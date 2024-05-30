"use client";

import {
  Button,
  Drawer,
  Label,
  Textarea,
  TextInput,
  Footer,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[25vh] items-center justify-center">
        <Button
          className="bg-gray-800 border-pink-300"
          onClick={() => setIsOpen(true)}
          pill
        >
          Contact
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="bg-orange-100">
        <Drawer.Header title="About" titleIcon={IoPersonCircle} />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Hi there! My name is Tina Bekkholt, and I am an officially educated
            front-end developer, ready for your service. This is my portfolio
            where all my work will be shown as I go on to explore the world of
            front-end. So, if you are interested in having a website, please
            contact me for a quick chat about what you want and need.
          </p>
        </Drawer.Items>
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
          </div>
        </Drawer.Items>
        <Drawer.Header title="Contact" titleIcon={HiEnvelope}></Drawer.Header>
        <Drawer.Items>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="name@email.com"
                type="email"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput
                id="subject"
                name="subject"
                placeholder="Let us know how I can help you"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <div className="mb-6">
              <Button
                type="submit"
                className="w-full bg-gray-800 border-pink-300"
                pill
              >
                Send message
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="mailto:tina.bekkholt@hotmail.com"
                className="hover:underline"
              >
                tina.bekkholt@hotmail.com
              </a>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
