import { NextPage } from "next";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import Hero from "@/components/hero";
import Brands from "@/components/brands";
import AboutUS from "@/components/aboutus";
import Gallery from "@/components/gallery";
import Artist from "@/components/artist";
import Subscribe from "@/components/subscribe";

const Index: NextPage = () => {
  return (
    <>
     
      <div className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-700 to-[#2c2f54]">
        <Header />
        <main>
          <Hero />
          <Brands />
          <AboutUS />
          <Gallery />
          <Artist />
          <Subscribe />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
