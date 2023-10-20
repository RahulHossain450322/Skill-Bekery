import {} from "react";
import Primary_Footer from "./Components/Primary_Footer";
import Secondary_footer from "./Components/Secondary_footer";

function Footer() {
  return (
    <div className="container mx-auto text-white py-36">
      <Primary_Footer />
      <hr className="hr mt-8" />
      <Secondary_footer />
    </div>
  );
}

export default Footer;
