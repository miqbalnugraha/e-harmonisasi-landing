import React from "react";
import ViewRancangan from "./view";

export default async function Cards({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return (
    <>
      <ViewRancangan params={resolvedParams} />
    </>
  );
}
