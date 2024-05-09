export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aidyn</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Дизайн и руководство</span>{" "}
            
            
          </h1>
          <p className="hero--section-description">
          Приветствую на главной странице моего портфолио. Погрузитесь в мир моих проектов, узнайте о моем опыте и пройдите по ссылкам для дополнительной информации.
          
          </p>
        </div>
        <button className="btn btn-primary">Связаться</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/my.png" alt="Hero Section" /> 
      </div>
    </section>
  );
}
