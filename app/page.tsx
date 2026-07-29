import Experience from "@sections/Experience";
import Hero from "@sections/Hero";
import Projects from "@sections/Projects";
import ProjectsSkeleton from "@sections/Projects/Skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-4 py-10 sm:py-16">
      <Hero />
      <Experience />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
    </div>
  );
}
