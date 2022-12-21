export const Banner = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-[#17327A] transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://www.zdnet.com/a/img/resize/b523af5e4d7b939c6abf60609f068ca5f7fff48c/2021/05/12/2ac0c902-8e15-4481-90c0-7d9f52182a1a/best-laptop-for-college-microsoft-surface-laptop-3.jpg?auto=webp&width=1280"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-[#0D9488]">
            Best One
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Find Your Product
            <br className="hidden md:block" />
            As your <span className="inline-block text-white">Want</span>
          </h2>
          <p className="pr-5 mb-5 text-base text-white md:text-lg">
            In This site upload your product and sell with the new bayer.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#0D9488] hover:bg-deep-accent-700 focus:shadow-outline focus:outline-none"
            >
              Categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
