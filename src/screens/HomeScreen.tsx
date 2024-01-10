import { MainLayout } from "../components/layout";
import {
  About,
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
      <Topics />
      <RibbonLogos />
      <SpeakersSection />
    </MainLayout>
  );
};
