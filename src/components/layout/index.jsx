import Cards from "../cards";
import About from "../navbar";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
export default function Layout() {
  return (
    <div className="bg-orange-100">
      <h1 className="flex justify-center pt-5 title text-6xl">Bekkholt</h1>
      <h2 className="flex justify-center text-2xl h2">Front-end developer</h2>
      <div className="flex space-x-6 sm:mt-0 sm:justify-center pt-5 justify-center">
        <Footer.Icon
          href="https://www.facebook.com/tina.bekkholt/"
          icon={BsFacebook}
        />
        <Footer.Icon href="https://github.com/Bekkholt" icon={BsGithub} />
        <Footer.Icon
          href="https://www.linkedin.com/in/tina-bekkholt-267355249/"
          icon={BsLinkedin}
        />
        <Footer.Icon
          href="mailto:tina.bekkholt@hotmail.com"
          icon={HiEnvelope}
        />
      </div>
      <About />
      <Cards />;
    </div>
  );
}
