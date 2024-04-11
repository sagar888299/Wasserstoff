// Filename: src/pages/app.js

"use client";
import { useState, useEffect, useRef } from "react";
import { locationIcon, clockIcon } from "./assets/icons";
import Image from "next/image";
import {
  astrix,
  drum,
  fireworks,
  music,
  musician,
  people,
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture9,
  qrcode,
  record,
} from "./assets/images";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: fireworks,
  },
  {
    label: "Second Picture",
    imgPath: picture1,
  },
  {
    label: "Third Picture",
    imgPath: picture2,
  },
  {
    label: "Third Picture",
    imgPath: picture3,
  },
  {
    label: "Third Picture",
    imgPath: picture4,
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(1);
  const delay = 2000;
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === MyCollection.length ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main className="grid grid-cols-12 sm:p-5 gap-4 overflow-x-hidden bg-stone-900">
      <div className="absolute sm:text-9xl text-7xl font-extrabold text-stone-500 px-10 inset-0 z-0">
        <div className="mt-36  ">ASTR</div>
        <div className="mt-5">IX</div>
        {activeButton === 1 ? (
          <>
            <div className="mt-5">EVE</div>
            <div className="mt-5">NTS</div>
          </>
        ) : (
          <>
            <div className="mt-5 ">COLL</div>
            <div className="mt-5">ECTI</div>
            <div className="mt-5 ">BLES</div>
          </>
        )}
      </div>
      <div className="sm:col-span-8 col-span-full overflow-hidden">
        <div className="my-6">
          <div className="text-5xl flex gap-4 font-bold text-amber-300 m-2">
            <Image
              src={astrix}
              width={50}
              height={50}
              className="bg-stone-950"
            />
            <h1>Astrix.</h1>
          </div>
        </div>
        <div
          className="whitespace-nowrap transition-transform duration-500 ease-in-out m-2 max-w-lg mt-28 "
          style={{ transform: `translate3d(${-index * 50}%, 0, 0)` }}
        >
          {MyCollection.map((item, index) => (
            <div className="inline-block m-2" key={index}>
              <Image
                src={item.imgPath}
                alt={item.label}
                width={400}
                height={500}
                className="rounded-lg h-auto"
              />
            </div>
          ))}
        </div>
        <div className="w-72 justify-between flex mx-6 mt-14 relative rounded-l-full rounded-r-full bg-stone-600">
          <div
            className={` max-w-lg py-7 absolute px-16 rounded-l-full opacity-40 rounded-r-full  bg-stone-900  ${
              activeButton === 1
                ? "transform translate-x-0 duration-1000 "
                : "transform translate-x-40 duration-1000 "
            }`}
          ></div>
          <button
            className="rounded-l-full rounded-r-full px-8 py-4 font-semibold b text-white"
            onClick={() => setActiveButton(1)}
          >
            Event
          </button>
          <button
            className="rounded-l-full rounded-r-full px-8 py-4 font-semibold text-white"
            onClick={() => setActiveButton(2)}
          >
            Collection
          </button>
        </div>
      </div>
      <div className="sm:col-span-4 col-span-full px-10">
        <div className="md:text-3xl text:xl font-bold mt-4 md:max-w-72 text-white ">
          {activeButton === 1 ? (
            <h1>Explore Your first Event</h1>
          ) : (
            <h1>Explore Your first Collectible</h1>
          )}
        </div>
        <div className="lg:text-6xl md:text-4xl text-6xl font-bold  text-white mt-12">
          {activeButton === 1 ? (
            <h1>Event Name</h1>
          ) : (
            <h1 className="md:max-w-10">Meta Live</h1>
          )}
        </div>
        <div className=" flex flex-wrap gap-6 mt-4 text-white">
          {activeButton === 1 ? (
            <>
              <div className="flex gap-2">
                <Image
                  src={locationIcon}
                  alt="Location Icon"
                  width={20}
                  height={20}
                  style={{ filter: "invert(100%)", fill: "white" }}
                />
                Venue
              </div>
              <div className="flex gap-2">
                <Image
                  src={clockIcon}
                  alt="Clock Icon"
                  width={20}
                  height={20}
                  style={{ filter: "invert(100%)", fill: "white" }}
                />
                04/03/2024 @19:00
              </div>
            </>
          ) : (
            <h1 className="text-3xl font-bold">Live in Astrix</h1>
          )}
        </div>
        <div className=" mt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div>
          <div className="text-white mt-5">
            {activeButton === 1 ? (
              <h1 className="text-3xl font-bold">Artist Lineup</h1>
            ) : (
              <div className="flex gap-4 text-center">
                <div className="flex ">
                  <Image
                    src={people}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Image
                    src={people}
                    width={40}
                    height={40}
                    className="rounded-full -ml-3"
                  />
                  <Image
                    src={people}
                    width={40}
                    height={40}
                    className="rounded-full -ml-3"
                  />
                  <Image
                    src={people}
                    width={40}
                    height={40}
                    className="rounded-full -ml-3"
                  />
                  <Image
                    src={people}
                    width={40}
                    height={40}
                    className="rounded-full -ml-3"
                  />
                </div>
                <div className="font-bold sm:text-xl text:sm mt-1.5">
                  {" "}
                  22k people interested
                </div>
              </div>
            )}
          </div>
          <div className="mt-10 flex">
            {activeButton === 1 ? (
              <>
                <div className="mt-3">
                  <Image
                    src={picture6}
                    alt="guitar"
                    width={120}
                    height={150}
                    className="rounded-md"
                  />
                </div>
                <div>
                  <Image
                    src={musician}
                    alt="guitar"
                    width={150}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <Image
                    src={picture5}
                    alt="guitar"
                    width={130}
                    height={150}
                    className="rounded-md"
                  />
                </div>
              </>
            ) : (
              <div>
                <div className="text-white font-bold">Collectibles</div>
                <div className="mt-5 flex gap-4 w-full min-w-72 overflow-x-auto no-scrollbar cursor-pointer">
                  <Image
                    src={picture7}
                    alt="guitar"
                    width={160}
                    height={300}
                    className="rounded-md"
                  />
                  <Image
                    src={record}
                    alt="guitar"
                    width={160}
                    height={300}
                    className="rounded-md"
                  />
                  <Image
                    src={picture9}
                    alt="guitar"
                    width={160}
                    height={300}
                    className="rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={`flex flex-wrap ${
              activeButton === 1 ? "mt-20" : "flex-row-reverse"
            } justify-between `}
          >
            {activeButton === 1 && (
              <div>
                <Image
                  src={qrcode}
                  alt="qrcode"
                  width={130}
                  height={210}
                  className="rounded-md"
                />
              </div>
            )}
            <div className="mt-16">
              <button className="rounded-l-full lg:text-xl rounded-r-full px-8 py-4 font-semibold bg-amber-400 text-black">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute sm:mt-28 sm:flex w-screen z-100  sm:rotate-90 md:ml-28 lg:ml-44 bg-purple-300">
        <div className="sm:py-6 animate-marquee ">
          <div className="lg:text-4xl md:text-base text-xs font-bold lg:mx-4 md:mx-2">
            JLN Stadium,Delhi @ Collection Live,Meta Live Performance
          </div>
        </div>
      </div>
    </main>
  );
}
