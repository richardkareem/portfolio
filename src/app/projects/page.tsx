import { Header } from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import {projects} from "@/components/sections/projects/config";
import ProjectCard from "@/components/sections/projects/cozy/project-card";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
            {projects.map((item, index) => {
                return(
                    <ProjectCard key={index} name={item.name} slug={item.slug} thumbnail={item.thumbnail} />
                )
            })}
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
