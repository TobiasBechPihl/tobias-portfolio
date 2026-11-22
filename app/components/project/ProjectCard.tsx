import { Project } from "@/types/project";
import ImageSlider from "@/app/components/slider/ImageSlider";

type ProjectCardProps = {
  project: Project;
};

const BASE_PATH = "/tobias-portfolio";

export default function ProjectCard({ project }: ProjectCardProps) {
  const galleryImages = project.images.map((src, index) => ({
    src: `${BASE_PATH}${src}`,
    alt: `${project.title} - image ${index + 1}`,
  }));

  return (
    <article className="boat-card group relative rounded-[26px] border border-[#c6d6cf] bg-[#f8f5e9] shadow-[0_18px_30px_rgba(9,54,70,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_40px_rgba(9,54,70,0.28)]">
      <span
        aria-hidden="true"
        className="absolute -top-9 right-7 z-10 h-9 w-0.5 bg-[#f4ebd5]"
      >
        <span
          className="absolute top-0.5 left-0.5 h-[18px] w-6 bg-[#f3dca3]"
          style={{ clipPath: 'polygon(0 0, 100% 30%, 0 100%)' }}
        />
      </span>
      <div className="overflow-hidden rounded-t-[26px] border-b border-[#d6c5ae] bg-[#f7f3ee] p-5">
        <ImageSlider images={galleryImages} />
      </div>

      <div className="space-y-4 p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-[#2e2e2e]">
            {project.title}
          </h3>
          <div className="h-2.5 w-2.5 rounded-full bg-[#8fb9d4] opacity-80 transition group-hover:scale-125" />
        </div>

        <p className="justify-copy text-base leading-7 text-[#4b4b4b]">
          {project.description}
        </p>

        <p className="justify-copy text-base leading-7 text-[#4b4b4b]">
          <span className="font-semibold text-[#2e2e2e]">Technologies:</span>{" "}
          {project.technologies.join(", ")}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="absolute top-full left-[7%] h-6 w-[86%] bg-[#d49d72]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 91% 100%, 12% 100%)' }}
      />
    </article>
  );
}
