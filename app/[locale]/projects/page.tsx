import Projects from "@/src/components/layout/Projects/Projects";
import { setRequestLocale } from 'next-intl/server';

const ProjectsPage = async ({
  params
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-screen mt-20">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;

