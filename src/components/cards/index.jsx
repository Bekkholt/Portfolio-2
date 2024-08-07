"use client";

import { Card } from "flowbite-react";
import Auctionhouse from "../../Images/portfolioauctionhouse.jpg";
import ShopDrop from "../../Images/portfolioshopdrop.jpg";
import Holidaze from "../../Images/holidazescreenshot.jpg";
import ThonerGolf from "../../Images/Screenshot 2024-08-07 105120.jpg";

export default function Cards() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center flex-wrap">
      <a href="https://thonergolf.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300 hover:bg-orange-300"
          imgAlt="Screenshot of thoner.golf Homepage - Black theme with green details and white text"
          imgSrc={ThonerGolf}
        >
          <h5 className="text-3xl font-bold h2 tracking-tight text-gray-900 dark:text-white">
            thoner.golf
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            thoner.golf is a website for the Norwegian golfer and trainer Heidi
            Thoner with some info about Thoner, golf and a form to book lessons.
          </p>
        </Card>
      </a>
      <a href="https://holidazebookings.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300 hover:bg-orange-300"
          imgAlt="Screenshot of Holidaze Bookings Homepage - Dark grey theme with orange details and white text"
          imgSrc={Holidaze}
        >
          <h5 className="text-3xl font-bold h2 tracking-tight text-gray-900 dark:text-white">
            Holidaze Bookings
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Holidaze Bookings is a booking site where you can book your venue of
            interest and publish your own venue for others to be able to book.
          </p>
        </Card>
      </a>
      <a href="https://eclectic-cheesecake-582684.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300 hover:bg-orange-300"
          imgAlt="Screenshot of Auctionhouse Homepage - Dark blue theme with white details"
          imgSrc={Auctionhouse}
        >
          <h5 className="text-3xl font-bold h2 tracking-tight text-gray-900 dark:text-white">
            Auctionhouse
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Auctionhouse is an auction website where users can put up items to
            be bid on and bid on other items that has been put up for auction.
          </p>
        </Card>
      </a>
      <a href="https://sprightly-twilight-6dc1f3.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300 hover:bg-orange-300"
          imgAlt="Screenshot of Shop-Drop Homepage - Bright blue pastell theme with light gray text"
          imgSrc={ShopDrop}
        >
          <h5 className="text-3xl font-bold h2 tracking-tight text-gray-900 dark:text-white">
            Shop-drop
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Shop-drop is a simple and playful eCom store where users can add and
            delete products in the cart, checkout and send in a contact form.
          </p>
        </Card>
      </a>
    </div>
  );
}
