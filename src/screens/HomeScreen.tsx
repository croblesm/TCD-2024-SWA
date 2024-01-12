import { MainLayout } from "../components/layout";
import {
  About,
  Agenda,
  Hero,
  RibbonLogos,
  SpeakersSection,
  Topics,
} from "../components";

export const HomeScreen = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <SpeakersSection />
      <Agenda />
      <RibbonLogos />
      <Topics />
    </MainLayout>
  );
};
