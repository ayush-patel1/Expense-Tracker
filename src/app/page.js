import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
  
     <div className="bg-gray-900 h-screen w-screen">
        <Header/>
        <Hero/>
     </div>
  );
}
