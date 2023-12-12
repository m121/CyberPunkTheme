import Image from "next/image";
const Artist = () => {
  return (
    <div className="px-7 py-24" id="artists">
      <button className="float-right mr-4 inline-flex text-white bg-transparent border-2 rounded-full border-[#12b3a8]   py-2 px-6 focus:outline-none   text-lg btn-glow">
        View all
      </button>
      <div className="">
        <p className="title-font sm:text-4xl text-3xl  font-semibold text-white mb-6 ml-2">
          Top artists
        </p>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 md:grid-cols-4 sm:gap-4 gap-2">
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center ">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-gray-100 min-w-max  -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_1.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Gaspar Lahms
                </span>
                <p className="text-sm text-gray-200">@gaspar</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-gray-100 min-w-max  -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_2.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Logan Tenet
                </span>
                <p className="text-sm text-gray-200">@logtech</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg ">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-gray-100 min-w-max  -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_3.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Viktoria Ant
                </span>
                <p className="text-sm text-gray-200">@viki_598</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24  bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_4.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Kevin Vulgr
                </span>
                <p className="text-sm text-gray-200">@Techorland</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center ">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_1.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Gaspar Lahms
                </span>
                <p className="text-sm text-gray-200">@gaspar</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-gray-100 min-w-max  -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_2.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Logan Tenet
                </span>
                <p className="text-sm text-gray-200">@logtech</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar  items-end justify-end text-gray-100 min-w-max  -top-16 flex bg-purple-200  row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_3.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Viktoria Ant
                </span>
                <p className="text-sm text-gray-200">@viki_598</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 bg-gray-900 shadow-md">
          <div className="w-full ">
            <div className="w-full rounded-lg h-24  bg-gradient-to-r from-yellow-200 via-green-200 to-green-300"></div>
          </div>

          <div className="flex items-center p-4">
            <div className="relative flex flex-col items-center w-full">
              <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-24 w-24 md rounded-full relative"
                  src="/img/avatars/user_4.png"
                  alt=""
                />
                <div className="absolute"></div>
              </div>
              <div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span className="text-md whitespace-nowrap text-gray-50 font-semibold">
                  Kevin Vulgr
                </span>
                <p className="text-sm text-gray-200">@Techorland</p>
                <div className="py-2 flex space-x-2">
                  <button className="flex justify-center   shadow-lg rounded-full text-white bg-[#12b3a8] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-40  text-lg">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
