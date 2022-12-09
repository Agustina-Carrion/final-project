function BlogCard({ image, title, dates, author }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-3 ">
      <img
        className="rounded-t-lg h-1/2 w-full"
        src={image}
        alt="Destination"
      />
      <div className="px-5 py-2 md:px-8">
        <h5 className="sm:my-0 sm:text-l md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="sm:mb-1 font-normal text-gray-700 dark:text-gray-400">
          {dates}
        </p>
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-4"
            src="https://assets.glamour.de/photos/62a71150ce765a72b3577e74/master/pass/JENNA-ORTEGA_GALLERY-SINGLE_0287R2C.jpg"
            alt="Author's Photo"
          />
          <div className="text-md">
            <p className="text-gray-900 leading-none dark:text-gray-400">
              {author}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center rounded-md border border-transparent bg-emerald-500 px-2 py-1 text-md font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mx-auto sm:mb-4 dark:bg-stone-700 dark:hover:bg-stone-900"
        >
          <span>Read More</span>
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
