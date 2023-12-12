import Image from "next/image";

const Gallery = () => {
  return (
    <div id="collection">
      <div className=" px-7 py-24">
        <button className="float-right mr-4 inline-flex text-white bg-transparent border-2 rounded-full border-[#12b3a8]   py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg btn-glow">
          View all
        </button>
        <div className="flex flex-row">
          <h3 className="title-font sm:text-4xl text-3xl  font-semibold text-white mb-6 ml-2  ">
            Trend this week
          </h3>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-4 gap-4  px-2">
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_1.png"
              alt="city_1"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_2.png"
              alt="city_2"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_3.png"
              alt="city_3"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_4.png"
              alt="city_4"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_5.png"
              alt="city_5"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_6.png"
              alt="city_6"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_7.png"
              alt="city_7"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 flex flex-col rounded-lg shadow-lg border-2 border-teal-700 ">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className=" rounded-lg  mx-auto w-60"
              src="/img/gallery/city_8.png"
              alt="city_8"
            />
            <div>
              <p className="text-[#9e9fae] mt-4 ml-6">Future City</p>
              <div className="mt-8 ml-6">
                <p className="text-[#9e9fae]">Current bid</p>
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-md text-[#12b3a8] ">ETH</p>
                  </div>
                  <div>
                    <button className="inline-flex items-center bg-[#12b3a8] text-white rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg mt-4 md:mt-0 shadow-lg">
                      Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
