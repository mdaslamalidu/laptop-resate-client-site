export const Banner = () => {
  return (
    <div className="relative w-5/6 m-auto">
      <img
        src="http://www.polymagnet.com/media/laptop-banner.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative  bg-opacity-75 ">
        <div>
          <div className="flex flex-col items-center justify-center  h-[500px]">
            <h2 className="text-5xl font-bold text-white text-center">
              <span className="pb-6">Laptop Resal Market</span> <br />
              <span className="pt-5">To Everyone</span> <br />
              <span className="text-white text-2xl">
                Find Out Your Best Product
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
