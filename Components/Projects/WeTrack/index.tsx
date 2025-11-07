import Roadmap from "@/Components/Projects/WeTrack/Roadmap/Roadmap";
import Stack from "@/Components/Projects/WeTrack/Stack/Stack";
import BetaForm from "@/Components/Projects/WeTrack/BetaForm/BetaForm";
import Features from "@/Components/Projects/WeTrack/Features/Features";
import Preview from "./Preview/Preview";

const WeTrackPage = () => {
  return (
    <main>
      <Preview />
      <Features />
      <Stack />
      <Roadmap />
      <BetaForm />
    </main>
  );
};

export default WeTrackPage;
