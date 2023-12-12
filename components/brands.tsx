import Image from "next/image";
const Brands = () => {
  return (
    <div>
      <div className="p-4">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              src="/img/binance_logo.png"
              className="opacity-40 w-60"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              src="/img/binance_logo.png"
              className="opacity-40 w-60"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              src="/img/binance_logo.png"
              className="opacity-40 w-60"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              alt="Logo"
              src="/img/binance_logo.png"
              className="opacity-40 w-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
