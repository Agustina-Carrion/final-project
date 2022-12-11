import { Link } from "wouter";

function BlogCard({ image, title, date, authorImage, author, id }) {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-slate-400 dark:border-slate-500 m-3 ">
      <img
        className="rounded-t-lg h-1/2 w-full"
        src={image}
        alt="Destination"
      />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
          {date}
        </p>
        <div className="flex items-center my-4">
          <img
            className="w-12 h-10 rounded-full mr-4"
            src={authorImage}
            alt="Author"
          />
          <div className="text-md">
            <p className="text-gray-900 leading-none dark:text-gray-400">
              {author}
            </p>
          </div>
        </div>
        <Link href={`/blog/${id}`}>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-emerald-500 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-500 active:shadow-lg transition duration-150 ease-in-out dark:bg-slate-600 dark:hover:bg-slate-900"
          >
            <span>Read More</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
