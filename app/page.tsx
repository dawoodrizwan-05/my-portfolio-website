import About from "./components/About";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import { HomeHero } from "./components/HomeHero";
import Portfolio from "./components/Portfolio";
import { Practice } from "./components/Practice";
import { Skills } from "./components/Skills";
import SocialIcons from "./components/SocialIcons";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <>
      <SocialIcons />
      <Header />
      <HomeHero />
      <About />
      <Blogs />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}
