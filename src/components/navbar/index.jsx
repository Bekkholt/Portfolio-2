"use client";

import { Button, Drawer, Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin, BsDot } from "react-icons/bs";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[20vh] items-center justify-center">
        <Button
          className="bg-gray-800 border-pink-300 "
          onClick={() => setIsOpen(true)}
          pill
        >
          About
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="bg-orange-100">
        <Drawer.Header title="About" titleIcon={BsDot} />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Hi there! My name is Tina Bekkholt, and I am an officially educated
            front-end developer, ready for your service. This is my portfolio
            where all my work will be shown as I go on to explore the world of
            front-end. So, if you are interested in having a website, please
            contact me for a quick chat about what you want and need.
          </p>
        </Drawer.Items>
        <Drawer.Header title="Contact" titleIcon={BsDot}></Drawer.Header>
        <Drawer.Items>
          <div className="mt-4 mb-10 flex space-x-6 sm:mt-0 sm:justify-center">
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
        </Drawer.Items>
      </Drawer>
    </>
  );
}
