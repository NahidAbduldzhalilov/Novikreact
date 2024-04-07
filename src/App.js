import "./App.css";
import SkillSection from "./components/SkillSection/SkillSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import AboutMe from "./components/AboutMeSection/AboutMe";

export default function App() {
  return (
    <div>
      <AboutMe title="tezt"></AboutMe>
      <SkillSection></SkillSection>
      <PortfolioSection></PortfolioSection>
    </div>
  );
}
