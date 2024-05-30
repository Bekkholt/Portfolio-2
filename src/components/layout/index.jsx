import Cards from "../cards";
import About from "../navbar";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Layout() {
  return (
    <div className="bg-orange-100">
      <h1 className="flex justify-center pt-5 title text-6xl">Bekkholt</h1>
      <h3 className="flex justify-center text-md">Front-end developer</h3>
      <div className="flex space-x-6 sm:mt-0 sm:justify-center pt-5">
        <Footer.Icon
          href="https://www.facebook.com/tina.bekkholt/"
          icon={BsFacebook}
        />
        <Footer.Icon href="https://github.com/Bekkholt" icon={BsGithub} />
        <Footer.Icon
          href="https://www.linkedin.com/in/tina-bekkholt-267355249/"
          icon={BsLinkedin}
        />
      </div>
      <About />
      <Cards />;
    </div>
  );
}
