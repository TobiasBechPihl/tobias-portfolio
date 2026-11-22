import Image from "next/image";

const basePath = "/tobias-portfolio";

export default function HeroSection() {
  return (
    <section className="grid items-center gap-10 pt-16 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9f0f3]">
          Portfolio
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Tobias Pihl
          </h1>

          <p className="justify-copy max-w-2xl text-lg leading-8 text-[#e5f4f5] md:text-xl">
            My name is Tobias Bech Pihl and I have recently completed my
            Master of Science in Engineering in Game Development and Learning
            Technology. Through my studies, I have developed a broad technical
            profile spanning software development, interactive systems, XR, and
            user-centered digital experiences, with a focus on building
            solutions that combine technical depth with practical usability.
            I am particularly motivated by projects where technology, design,
            and real-world impact meet — whether through web platforms,
            immersive applications, or applied digital learning experiences.
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
