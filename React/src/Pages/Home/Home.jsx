import Hero from "../../Component/Hero/Hero";
import Slider from "../../Component/Slider/Slider";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Slider />
    </main>
  );
}

export default Home;
