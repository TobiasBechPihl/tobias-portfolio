import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header flex flex-wrap items-center justify-between gap-4 pb-6">
      <Link href="/" className="text-lg font-bold tracking-tight hover:text-[#e8f8fa]">
        Tobias Pihl
      </Link>
      <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-3 text-sm font-semibold sm:gap-6">
        <a href="#projects" className="hover:text-[#e8f8fa]">Projects</a>
        <a href="#skills" className="hover:text-[#e8f8fa]">Skills</a>
        <a href="#experience" className="hover:text-[#e8f8fa]">Experience</a>
        <a
          href="/tobias-portfolio/Tobias-Pihl-CV.pdf"
          download="Tobias-Pihl-CV.pdf"
          className="rounded-full bg-[#f8edcf] px-5 py-2.5 text-[#153c4a] transition hover:bg-white"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}
