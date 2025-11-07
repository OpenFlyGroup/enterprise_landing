import {
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiNestjs,
} from "react-icons/si";

const stack = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiDjango, name: "Django" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

export default function Stack() {
  return (
    <section className="py-16 px-8 bg-base-200/50">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-10">Built With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <s.icon className="w-12 h-12 text-primary mb-2" />
              <p className="text-sm font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
