import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {/* {console.log(Object.entries(requests))} */}
        {/* See Object.Entries() documentation */}
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            // nextJS router hook links to http://localhost:3002/?genre=fetchComedyMovies when pressed
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}

export default Nav;
