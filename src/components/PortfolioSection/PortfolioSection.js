import Portfolio from "../Portfolio/Portfolio";
import "./PortfolioSection";
import braun from "./PortfolioSectionImg/braun.jpg";
import levis from "./PortfolioSectionImg/levis.jpg";
import reebok from "./PortfolioSectionImg/reebok.jpg";
import Title  from "../Title/Title";
export default function PortfolioSection() {
  return (
    <section class="portfolio grey" id="portfolio">
<Title text="Portfolio"/>
      <Portfolio
        img={levis}
        alt="Левиз"
        text="Online fashion store - Homepage"
      />
      <Portfolio img={reebok} alt="Рибок" text="Reebok Store - Concept" />

      <Portfolio img={braun} alt="Браун" text="Braun Landing Page - Concept" />
    </section>
  );
}
