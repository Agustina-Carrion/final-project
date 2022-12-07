function BlogCard({image, title, dates, author}) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-3 ">
      <img
        className="rounded-t-lg"
        src={image}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {dates}
        </p>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://assets.glamour.de/photos/62a71150ce765a72b3577e74/master/pass/JENNA-ORTEGA_GALLERY-SINGLE_0287R2C.jpg"
            alt=""
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
