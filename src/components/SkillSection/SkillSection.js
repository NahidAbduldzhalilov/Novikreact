import "./SkillSection.css";
import Skill from "../Skill/Skill";
import photoshop from "./skills/ps.jpg";
import illustrator from "./skills/ai.jpg";
import afterEffect from "./skills/ae.jpg";
import figma from "./skills/figma.png";
import Title from "../Title/Title";

export default function SkillSection() {
  return (
    <section id="skills" className="skills">
      <Title text="Skills"/>
      <p className="descr">I work in such programs as</p>
      <div className="cards">
        <Skill
          img={photoshop}
          alt="Photoshop"
          text="Adobe Photoshop"
          st5="starGrey"
        />
        <Skill
          img={illustrator}
          alt="Adobe Illustrator"
          text="Adobe Illustrator"
          st4="starGrey"
          st5="starGrey"
        />
        <Skill
          img={afterEffect}
          alt="Adobe After Effects"
          text="Adobe After Effects"
          st4="starGrey"
          st5="starGrey"
        />
        <Skill
          img={figma}
          alt="Figma"
          text="Figma"
          st3="starGrey"
          st4="starGrey"
          st5="starGrey"
        />
      </div>
    </section>
  );
}
