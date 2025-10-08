import { parse, format } from "date-fns";
import { id } from "date-fns/locale";

export function formatDate(dateString: any) {
    const date = new Date(dateString);
    console.log(date);

    const formattedDate = format(date, "d MMMM yyyy", { locale: id });
    const formattedTime = format(date, "HH:mm:ss");
    return { formattedDate, formattedTime };
}

export function parseFormatDate(dateString: string) {
    try {
        const parsedDate = parse(dateString, 'dd-MM-yyyy HH:mm:ss', new Date());
        const formattedDate = format(parsedDate, 'dd MMMM yyyy', { locale: id });
        const formattedTime = format(parsedDate, "HH:mm:ss");

        return { formattedDate };
    } catch (error) {
        return { formattedDate: '-' };
    }
}

export function formatDateMonth(dateString: any) {
    const date = new Date(dateString);
    const formattedDate = format(date, "d MMMM", { locale: id });
    return { formattedDate };
}

export function parseDateMMM(dateString: any) {
    const [datePart, timePart] = dateString.split(" ");
    const [day, monthAbbr, year] = datePart.split("-");
    const [hour, minute, second] = timePart.split(":");

    const monthMap: { [key: string]: number } = {
        JAN: 0,
        FEB: 1,
        MAR: 2,
        APR: 3,
        MAY: 4,
        JUN: 5,
        JUL: 6,
        AUG: 7,
        SEP: 8,
        OCT: 9,
        NOV: 10,
        DEC: 11,
    };

    if (!(monthAbbr in monthMap)) {
        throw new Error(`Invalid month abbreviation: ${monthAbbr}`);
    }

    const fullYear = `20${year}`;

    const dayNum = parseInt(day, 10);
    const hourNum = parseInt(hour, 10);
    const minuteNum = parseInt(minute, 10);
    const secondNum = parseInt(second, 10);
    const yearNum = parseInt(fullYear, 10);

    return new Date(
        yearNum,
        monthMap[monthAbbr],
        dayNum,
        hourNum,
        minuteNum,
        secondNum,
    );
}

export function formatDateAndOtherTime(
    dateString: string | null | undefined,
    dateString2: string | null | undefined,
    timeString: string | null | undefined,
    timeString2: string | null | undefined,
) {
    const date = dateString ? new Date(dateString) : "";
    const date2 = dateString2 ? new Date(dateString2) : "";
    const time1 = timeString ? new Date(timeString) : null;
    const time2 = timeString2 ? new Date(timeString2) : null;
    const formattedDate = date instanceof Date
        ? format(date, "d MMMM yyyy", { locale: id })
        : "";
    const formattedDate2 = date2 instanceof Date
        ? format(date2, "d MMMM yyyy", { locale: id })
        : "";
    const formattedTime = time1 instanceof Date
        ? format(time1, "HH:mm")
        : "";
    const formattedTime2 = time2 instanceof Date
        ? format(time2, "HH:mm")
        : "";
    return { formattedDate, formattedDate2, formattedTime, formattedTime2 };
}

export default formatDate;
