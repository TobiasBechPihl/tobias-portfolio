import Image from "next/image";

const basePath = "/tobias-portfolio";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-10 pt-16 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tobias Pihl
          </h1>

          <p className="justify-copy max-w-2xl text-lg leading-8 text-[#e5f4f5] md:text-xl">
            I’m Tobias Bech Pihl, an MSc in Engineering in Game Development and
            Learning Technology. I build interactive simulations, web and XR
            applications, and learning-driven software systems where solid
            engineering meets practical usability.
          </p>
          <p className="justify-copy max-w-2xl text-lg leading-8 text-[#e5f4f5] md:text-xl">
            My work spans modular software development, system integration,
            testing and quality evaluation, and instructional design. Whether
            I’m prototyping a training simulation, structuring learning workflows,
            or refining an existing codebase, I focus on turning complex
            requirements into clear, reliable tools that work for real users.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm lg:max-w-md">
        <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-[#eaf4ed] p-3 shadow-[0_20px_45px_rgba(8,49,67,0.2)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#f7f3ee]">
            <Image
              src={`${basePath}/images/profile/profile-photo.jpg`}
              alt="Portrait of Tobias Bech Pihl"
              fill
              priority
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-[#8fb9d4]/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
