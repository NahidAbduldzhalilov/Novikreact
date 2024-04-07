import "./Portfolio.css";

export default function Portfolio({ img, alt, text }) {
  return (
    <>
      <a href="#">
        <img src={img} alt={alt} />
      </a>
      <p>
        <a href="#" class="portfolio_link">
          {text}
        </a>
      </p>
    </>
  );
}
