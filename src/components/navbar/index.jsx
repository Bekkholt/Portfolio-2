"use client";

import {
  Button,
  Drawer,
  Label,
  Textarea,
  TextInput,
  Footer,
} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button className="bg-orange-500" onClick={() => setIsOpen(true)}>
          About
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="bg-orange-200">
        <Drawer.Header title="About" titleIcon={IoPersonCircle} />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our for Flowbite Docs
            + Job Board. Unlimited access to over 190K top-ranked candidates and
            the #1 design job board.
          </p>
        </Drawer.Items>
        <Drawer.Items>
          <div className="mt-4 mb-10 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
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
              <Button type="submit" className="w-full bg-orange-500">
                Send message
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
                tina.bekkholt@hotmail.com
              </a>
            </p>
          </form>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
