export default () => (
  <div className="flex lg:flex-row">
    <div className="px-8 py-8 bg-white max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
      <div className="xl:max-w-lg xl:ml-auto">
        <img
          className="h-10"
          src="/assets/youtubelogotxt.png"
          alt="youtube main logo"
        />
        <img
          className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
          src="/assets/dravenenloltexture.jpeg"
          alt="youtube main draven logo"
        />
        <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8">
          Dominate every region.<br></br>
          <span className="text-orange-400">Take advantage of it.</span>
        </h1>

        <p className="mt-2 text-gray-600 sm:text-xl">
          I hope you enjoy all of my content, go forth and destroy each and
          every scrub in your region.
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            href="#"
            className="inline-block text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:shadow-outline active:bg-orange-600 text-sm px-5 py-3 shadow-lg uppercase tracking-wider font-semibold rounded-lg sm:text-base"
          >
            Book your lesson
          </a>
        </div>
      </div>
    </div>
    <div className="hidden lg:block lg:w-1/2 lg:relative">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="/assets/dravenenloltexture.jpeg"
        alt="youtube main draven logo"
      />
    </div>
  </div>
);
