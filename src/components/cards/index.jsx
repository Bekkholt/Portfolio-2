"use client";

import { Card } from "flowbite-react";

export default function Cards() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <a href="https://eclectic-cheesecake-582684.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300"
          imgAlt="Screenshot of Auctionhouse Homepage - Dark blue theme with white details"
          imgSrc="https://raw.githubusercontent.com/Bekkholt/semester-project-2/main/images/auctionhouse_screenshot.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          className="max-w-sm bg-orange-200 m-2 border-pink-300"
          imgAlt="Screenshot of Shop-Drop Homepage - Bright blue pastell theme with light gray text"
          imgSrc="https://raw.githubusercontent.com/Bekkholt/js-frameworks/main/public/Screenshot%202024-04-04%20092833.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Shop-drop
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Shop-drop is a eCom store where users can add and delete products in
            the cart, checkout and send in a contact form.
          </p>
        </Card>
      </a>
      <a href="https://holidazebookings.netlify.app/">
        <Card
          className="max-w-sm bg-orange-200 m-2 border-pink-300"
          imgAlt="Screenshot of Holidaze Bookings Homepage - Dark grey theme with orange details and white text"
          imgSrc="https://raw.githubusercontent.com/Bekkholt/project-exam-2/main/public/holidazebooking.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Holidaze Bookings
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Holidaze Bookings is a booking site where you can book your venue of
            interest and publish your own venue for others to be able to book.
          </p>
        </Card>
      </a>
    </div>
  );
}
