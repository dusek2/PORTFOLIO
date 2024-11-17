import { HeroSection } from '@/components/sections/hero';
import { Timeline } from '@/components/sections/timeline';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <HeroSection />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}