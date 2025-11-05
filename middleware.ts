// middleware.ts (in your root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface RateLimitStore {
    count: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitStore>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

// Global default rate limit
const DEFAULT_MAX_REQUESTS = 10;

// Custom rate limits for specific routes
const ROUTE_LIMITS: Record<string, number> = {
    '/api/rancangan/list_rancangan_by_jenis': 30,
    '/api/rancangan/download': 15,
};

function getRateLimitForPath(pathname: string): number {
    // Check for exact match first
    if (ROUTE_LIMITS[pathname]) {
        return ROUTE_LIMITS[pathname];
    }

    // Check for pattern match (e.g., /api/users/123 matches /api/users)
    for (const [route, limit] of Object.entries(ROUTE_LIMITS)) {
        if (pathname.startsWith(route)) {
            return limit;
        }
    }

    // Return default if no custom limit found
    return DEFAULT_MAX_REQUESTS;
}

export function middleware(request: NextRequest) {
    // Only apply rate limiting to API routes
    if (request.nextUrl.pathname.startsWith('/api/')) {
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'anonymous';

        const pathname = request.nextUrl.pathname;
        const maxRequests = getRateLimitForPath(pathname);

        // Use IP + pathname as key for per-route rate limiting
        const tokenKey = `${ip}:${pathname}`;

        const now = Date.now();
        let tokenData = rateLimitStore.get(tokenKey);

        if (!tokenData || now > tokenData.resetTime) {
            tokenData = {
                count: 0,
                resetTime: now + RATE_LIMIT_WINDOW,
            };
        }

        tokenData.count += 1;
        rateLimitStore.set(tokenKey, tokenData);

        const isRateLimited = tokenData.count > maxRequests;
        const remaining = Math.max(0, maxRequests - tokenData.count);

        // Add rate limit headers
        const response = isRateLimited
            ? NextResponse.json(
                {
                    error: 'Too many requests',
                    message: `Rate limit exceeded. Maximum ${maxRequests} requests per minute.`
                },
                { status: 429 }
            )
            : NextResponse.next();

        response.headers.set('X-RateLimit-Limit', maxRequests.toString());
        response.headers.set('X-RateLimit-Remaining', remaining.toString());
        response.headers.set('X-RateLimit-Reset', tokenData.resetTime.toString());

        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*',
};

// Clean up old entries periodically (in production, use Redis or similar)
setInterval(() => {
    const now = Date.now();
    rateLimitStore.forEach((value, key) => {
        if (now > value.resetTime) {
            rateLimitStore.delete(key);
        }
    });
}, 60 * 1000);