const Subscribe = () => {
  return (
    <div>
      <div className="flex flex-row py-24">
        <div className="mx-auto">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white text-center">
            Join us and sell your Artwork
          </h1>
          <p className="mb-8 leading-relaxed text-[#9e9fae] text-2xl mt-8 text-center">
            The first fully-fledged NFT Marketplace. NFTs from different
            collections and artists
          </p>
          <div className="flex justify-center w-96 mx-auto">
            <div className="rounded-full p-2  bg-white flex flex-row w-full">
              <input
                className="w-full ml-4"
                placeholder="Enter your email Address"
              />
              <button className="inline-flex shadow-lg rounded-full text-white bg-[#12b3a8]  py-2 sm:px-6 px-4 focus:outline-none hover:text-[#12b3a8] hover:bg-white border-2 hover:border-[#12b3a9]  text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
