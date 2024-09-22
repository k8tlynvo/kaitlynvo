"use client"
import Image from 'next/image';
import { cardData } from "@/data/projectCardsData";
import Card from "./(components)/Card";
import { useState, useEffect } from 'react';

const linkPrefix = process.env.NODE_ENV === "production" ? "/kaitlynvo" : "";

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const scrollableDiv = document.querySelector('.overflow-y-auto');
    const handleScroll = () => {
      if (scrollableDiv?.scrollTop && scrollableDiv?.scrollTop > 0) {
        setIsVisible(true);
      }
    };
  
    scrollableDiv?.addEventListener('scroll', handleScroll);

    return () => {
      scrollableDiv?.removeEventListener('scroll', handleScroll);
    };

  }, []);

  useEffect(() => {
    setIsLoad(true);
  }, []);
  
  return (
    // center body
    <div className="flex-1 max-w-[80rem] justify-center">

      {/* name and intro */}
      <div 
        className={`flex-col h-fit py-40 mb-10 w-[70%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%] transition-opacity duration-1000 ${isLoad ? 'opacity-100 animate-fadeInFromLeft' : 'opacity-0'}`}
        
      >
        <div className="flex items-center">
          <div className="text-lg text-default-text">Hi! My name is</div>
          <Image src={linkPrefix + "/svgs/name.svg"} alt="Image of text: Kaitlyn Vo" width={200} height={200}/>
        </div>
        <div className="text-lg text-sub-text">
          I&apos;m a developer and student at the University of California, Davis! &#127803;
          I&apos;m passionate about contributing to impactful products and I&apos;m currently an application developer at 
          <span className="text-accent-text font-bold"> Centene Corporation</span>.
        </div>
      </div>
      {isLoad && !isVisible ? (
        <div className={`pt-10 w-full items-center justify-center flex transition-opacity duration-1000 ${isLoad && !isVisible ? 'opacity-100 animate-fadeInFromBottom' : 'opacity-0'}`}>
          <Image src={linkPrefix + "/svgs/arrow.svg"} alt="Arrow" width={30} height={30}/>
        </div>
      ) : (
        <div className="w-full border-2">
          <Image src={linkPrefix + "/svgs/divider.svg"} alt="line" width={10} height={30}/>
        </div>
      )}
      {/* project cards */}
      <div className={`flex w-full justify-center transform transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex mt-52 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-w-full">
          {cardData.map(card => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}