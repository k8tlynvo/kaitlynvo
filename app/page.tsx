import NavBar from "./(components)/NavBar";
import Header from "./(components)/Header";

export default function Home() {
  
  return (
    <div className="flex-col border-2 w-11/12 min-h-[95dvh] mt-5 mx-auto bg-white items-center justify-center">
      <Header />
      <div className="flex space-between pl-20 border-2 border-black">
        {/* main content */}
        <div className="flex-1 border-2 h-fit">
          {/* name section */}
          <div className="flex-col h-fit p-32">
            {/* text + handwriting */}
            <div className="flex items-center">
              <div className="text-lg">Hi! My name is</div> 
              <div className="">Kaitlyn Vo</div>
            </div>
            <div className="text-md text-gray-500">developer. student.</div>
          </div>
          {/* boxes, do a grid situation  */}
          <div className="grid grid-cols-2 gap-4 border-2">
            <div className="border-2 h-96 w-full">
              box1
            </div>
            <div className="border-2 h-96 w-full">
              box2
            </div>
          </div>
          
        </div>
        <NavBar />

      </div>
    </div>
    
  );
}