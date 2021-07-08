import Image from 'next/image'
import rodrun4 from "../public/rodrun4.jpg"

export default function Homehero() {
  return (
      <div className="relative">
          <div className="absolute inset-0 z-10 flex justify-center items-end p-10 text-6xl text-white font-semibold">
            <p> Welcome to Northeast Rod Run</p>
          </div>
        <Image className="md:w-full lg:w-full" src={rodrun4} />
      </div>
  );
}