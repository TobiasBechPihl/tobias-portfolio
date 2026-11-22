const professionalWork = [
  {
    role: 'Production Support / Cleaning Responsible',
    organisation: 'Medican',
    dates: 'September 2019 – June 2020',
    details: [
      'Worked in a GMP-regulated production environment, following documented procedures and SOPs.',
      'Built experience with manufacturing workflows, operational requirements, precision and reliability.',
    ],
  },
];

const volunteerWork = [
  {
    role: 'Web Developer',
    organisation: 'Vi Finder Hund',
    dates: 'June 2026 – Present',
    details: [
      'Maintain and extend existing web applications through feature development, debugging and technical problem-solving.',
      'Investigate system behaviour and dependencies before making changes to an established codebase.',
      'Collaborate on software requirements and use Git and GitHub for development work.',
    ],
  },
  {
    role: 'Volunteer & Board Member',
    organisation: 'PFA Kollegiet Odense',
    dates: 'October 2022 – October 2025',
    details: [
      'Participated in board activities, practical coordination and decisions affecting daily operations at the student residence.',
      'Connected residents and the housing association, communicating needs and contributing to practical improvements.',
      'Supported community activities and smaller initiatives with other volunteers.',
    ],
  },
];

function ExperienceList({ items }: { items: typeof professionalWork }) {
  return (
    <div className="grid gap-5">
      {items.map((item) => (
        <article
          key={item.organisation}
          className="experience-card rounded-[26px] p-6 md:p-8"
          style={{ backgroundColor: '#f8f5e9', color: '#243c32', border: '1px solid #d4e1bd' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h4 className="text-xl font-bold">{item.role}</h4>
              <p className="mt-1 font-semibold text-[#426b58]">{item.organisation}</p>
            </div>
            <p className="text-sm font-medium text-[#526d61]">{item.dates}</p>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-7 text-[#354b43]">
            {item.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-10 scroll-mt-6" aria-labelledby="experience-heading">
      <div className="space-y-3 text-[#f7f4dc]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6ecc6]">Beyond the beach</p>
        <h2 id="experience-heading" className="text-3xl font-bold tracking-tight md:text-5xl">Experience</h2>
        <p className="max-w-2xl leading-7 text-[#e7f1df]">
          Practical work and volunteer roles where I have developed software, supported operations and worked with communities.
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-[#f7f4dc]">Professional work</h3>
          <ExperienceList items={professionalWork} />
        </div>
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-[#f7f4dc]">Volunteer work</h3>
          <ExperienceList items={volunteerWork} />
        </div>
      </div>
    </section>
  );
}
