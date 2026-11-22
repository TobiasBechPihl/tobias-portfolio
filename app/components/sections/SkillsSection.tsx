const skillGroups = [
  {
    title: 'Technical',
    skills: ['C# and Python', 'Unity and XR', 'Object-oriented programming', 'APIs and SQL', 'Git and GitHub', 'Computer vision with YOLOv8, OpenCV and PyTorch'],
  },
  {
    title: 'Training and design',
    skills: ['Digital learning and instructional design', 'Interactive simulations', 'Gamification', 'User-centred development', 'Technical communication'],
  },
  {
    title: 'Management and collaboration',
    skills: ['Project coordination', 'Stakeholder collaboration', 'Working with subject matter experts', 'Knowledge transfer', 'Community and board coordination'],
  },
  {
    title: 'Testing and analysis',
    skills: ['Automated unit testing', 'Functional testing and debugging', 'User testing and system evaluation', 'Technical documentation', 'Iterative improvement'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-10 scroll-mt-6" aria-labelledby="skills-heading">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#775f48]">On the shore</p>
        <h2 id="skills-heading" className="text-3xl font-bold tracking-tight md:text-5xl">Skills collected along the way</h2>
        <p className="max-w-2xl leading-7 text-[#3f505a]">
          Technical tools, testing experience and ways of working that connect the projects above.
        </p>
      </div>
      <div className="stone-field grid items-start gap-7 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className="skill-stone p-7 md:p-9"
            style={{
              color: '#243c43',
              backgroundColor: ['#e9e9dc', '#f3e7dc', '#dae3da', '#e7e0d4'][index],
              border: '2px solid #b6ae9b',
              borderRadius: ['38% 62% 54% 46% / 13% 18% 16% 20%', '54% 46% 63% 37% / 18% 16% 20% 14%', '44% 56% 40% 60% / 18% 14% 18% 16%', '38% 62% 54% 46% / 13% 18% 16% 20%'][index],
              boxShadow: '6px 12px 0 rgba(119,94,65,.14), inset -10px -10px 20px rgba(130,133,114,.07)',
            }}
          >
            <h3 className="mb-5 text-xl font-bold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-[#cfbfa7] bg-white/65 px-3 py-1.5 text-sm text-[#3f505a]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
