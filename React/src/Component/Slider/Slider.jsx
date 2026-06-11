import "./Slider.css";

function Slider() {
  const flowers = [
    {
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200",
      title: "Pink Flower",
      desc: "Beautiful Pink Flower",
    },
    {
      image:
        "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=1200",
      title: "White Flower",
      desc: "Elegant White Flower",
    },
    {
      image:
        "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?w=1200",
      title: "Sunflower",
      desc: "Bright Yellow Sunflower",
    },
    {
      image:
        "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=1200",
      title: "Pink Daisy",
      desc: "Lovely Pink Daisy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200",
      title: "Red Rose",
      desc: "Classic Red Rose",
    },
  ];

  return (
    <section className="slider-section">
      <h1 className="slider-title">
        Flower Gallery
      </h1>

      <div className="gallery-grid">
        {flowers.map((item, index) => (
          <article className="card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Slider;
