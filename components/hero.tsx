import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="text-gray-600 body-font " id="home">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col sm:flex-col items-center">
        <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
            Discover and collect The rarest NFTS
          </h1>
          <h2 className="mb-8 leading-relaxed text-[#9e9fae] text-2xl mt-8">
            The Collection of randomly generated and NFTs is the Cool, Ethereum
            blockchain.
          </h2>
          <div className="flex justify-center">
            <AnchorLink
              href="#collection"
              className="inline-flex shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 sm:px-6 px-4 focus:outline-none hover:bg-opacity-40  text-lg"
            >
              Explore more
            </AnchorLink>

            <button className="ml-4 inline-flex text-white bg-transparent border-2 rounded-full border-[#12b3a8]   py-2 sm:px-6 px-4 focus:outline-none btn-glow  text-lg">
              Create Account
            </button>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-full w-full">
          <Image
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="object-cover object-center rounded md:mt-10 w-full "
            alt="hero"
            src="/img/hero2_city.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
