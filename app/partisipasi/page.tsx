import React from "react";
import Partisipasi from "./comps";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Cards() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Partisipasi />
      </Suspense>
    </>
  );
}
