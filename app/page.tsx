import Name from "../public/svgs/name.svg"
import Image from 'next/image';
import { cardData } from "@/data/projectCardsData";
import Card from "./(components)/Card";

export default function Home() {
  
  return (
    // center body
    <div className="flex-1 max-w-[80rem] justify-center">

      {/* name and intro */}
      <div className="flex-col h-fit py-40 mb-10 w-[70%] sm:w-[70%] md:w-[70%] lg:w-[50%] xl:w-[50%]">
        <div className="flex items-center">
          <div className="text-lg text-default-text">Hi! My name is</div>
          <Image src={Name} alt="Image of text: Kaitlyn Vo" width={200} height={200}/>
        </div>
        <div className="text-lg text-sub-text">
          I'm a developer and student at the University of California, Davis! &#127803;
          I'm passionate about contributing to impactful products and I'm currently an application developer at 
          <span className="text-accent-text font-bold"> Centene Corporation</span>.
        </div>
      </div>

      {/* project cards */}
      <div className="flex min-w-full justify-center">
        <div className="flex mt-20 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-w-full">
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