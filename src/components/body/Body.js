import { Map, BlogCard } from "../../componentExports.js";
import myData from "../../data/test.json";

function Body() {
  const destinations = myData;

  return (
    <div className="relative bg-gradient-to-r from-cyan-400 to-orange-500">
      <div className="grid sm:auto-cols-max md:grid-cols-2 justify-center items-center max-w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
        <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-8 md:py-16 sm:px-6 sm:py-12">
          {destinations.map((item) => (
            <BlogCard
              key={item.title}
              image={item.image}
              title={item.title}
              dates={item.dates}
              author={item.author}
            />
          ))}
        </div>
        <div className="md:w-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Body;
