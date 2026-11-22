import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import SkillsSection from './components/sections/SkillsSection';
import SiteHeader from './components/SiteHeader';
import ExperienceSection from './components/sections/ExperienceSection';

export default function HomePage() {
  return (
    <main className="journey-page min-h-screen text-[#173b46]">
      <div
        className="sea-region"
        style={{
          backgroundColor: '#317d94',
          backgroundImage: 'radial-gradient(ellipse 80px 18px at 35px 24px, rgba(235,250,247,.22) 0 38%, transparent 41%), radial-gradient(ellipse 80px 18px at 110px 70px, rgba(235,250,247,.16) 0 38%, transparent 41%), linear-gradient(180deg, #66aabb 0%, #3b8ca4 38%, #246e85 100%)',
          backgroundSize: '155px 105px, 155px 105px, auto',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 pt-8 pb-24 md:px-10 lg:px-12">
          <SiteHeader />
          <HeroSection />
          <ProjectsSection />
        </div>
      </div>
      <div
        className="beach-region"
        style={{
          backgroundColor: '#ead9b5',
          backgroundImage: 'radial-gradient(circle at 18% 25%, rgba(255,248,225,.65) 0 2px, transparent 3px), radial-gradient(circle at 72% 66%, rgba(123,101,75,.14) 0 2px, transparent 3px)',
          backgroundSize: '80px 70px, 110px 90px',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 lg:px-12">
          <SkillsSection />
        </div>
      </div>
      <div
        className="lawn-region"
        style={{
          backgroundColor: '#4b8057',
          backgroundImage: 'repeating-linear-gradient(105deg, transparent 0 35px, rgba(214,238,180,.06) 36px 38px, transparent 39px 70px), linear-gradient(180deg, #5e9567 0%, #3e704b 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl space-y-24 px-6 py-24 md:px-10 lg:px-12">
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
