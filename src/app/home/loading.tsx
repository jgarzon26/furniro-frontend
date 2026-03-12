'use client';

import { FC } from "react";
import { OrbitProgress } from "react-loading-indicators";

const HomeLoading: FC = () => {
  return (
    <section className="flex justify-center items-center h-dvh w-full">
      <OrbitProgress color="var(--color-primary)" size="medium"/>
    </section>
  );
}

export default HomeLoading;