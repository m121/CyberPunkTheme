import Image from "next/image";
const AboutUS = () => {
  return (
    <div className="py-24" id="aboutus">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover object-center shadow-lg rounded-md w-full"
              alt="aboutus"
              src="/img/city_future.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-6 font-semibold text-white ">
              About Us
            </h3>
            <p className="mb-8 leading-relaxed text-[#9e9fae]  text-lg">
              Introducing the SpectraMetropolis: A Cyberpunk City NFT Collection
              of 100,000 Unique Tokens! Step into a futuristic world where neon
              lights pierce the night, towering skyscrapers reach for the
              heavens, and technology intertwines with urban chaos.
              <br />
              <br />
              The SpectraMetropolis NFT collection invites you to immerse
              yourself in the breathtaking landscapes of 100,000 intricately
              designed cyberpunk cities. Explore the vast virtual metropolis
              where each token represents a one-of-a-kind cityscape,
              meticulously crafted to transport you into the realm of cyberpunk
              dreams.
              <br />
              <br />
              With its vibrant colors, mesmerizing architecture, and pulsating
              energy, SpectraMetropolis captures the essence of a dystopian
              future where humanity coexists with advanced technologies. These
              digital masterpieces are a fusion of art, technology, and
              imagination, offering a glimpse into a world where creativity
              knows no bounds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
