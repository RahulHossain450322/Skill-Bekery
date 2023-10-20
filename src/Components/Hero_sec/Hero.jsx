import {} from "react";
import Hero_menu from "./Components/Hero_menu";
import H_Content from "./Components/H_Content";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="hero">
        <Hero_menu />
        <H_Content />
      </div>
    </div>
  );
}

export default Hero;
