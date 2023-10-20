import {} from "react";
import PC_NAV from "../Navbar/PC_NAV";
import Hero from "../Hero_sec/Hero";
import Card_sec from "../Card_sec/Card_sec";
import Subscription from "../SubsCriptions/Subscription";
import Own_pace from "../Own_pace/Own_pace";
import Fetured from "../Fetured/Fetured";
import Student_Comments from "../Compliments/Student_Comments";
import Studio_des from "../Studio_descriptions/Studio_des";
import Learn from "../Learn_Pleasure/Learn";
import Stay_inform from "../Stay_informed/Stay_inform";
import Footer from "../Footer/Footer";
import Mobile_nav from "../Navbar/Mobile_nav";

function Home() {
  return (
    <main className="bg_color">
      <PC_NAV />
      <Mobile_nav />
      <hr className="hr" />
      <Hero />
      <Card_sec />
      <Subscription />
      <Own_pace />
      <Fetured />
      <Student_Comments />
      <Studio_des />
      <Learn />
      <Stay_inform />
      <Footer />
    </main>
  );
}

export default Home;
