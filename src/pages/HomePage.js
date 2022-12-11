import { NavBar, Footer, Map, BlogCard } from "../componentExports";
import myData from "../data/destinationsLight.json";

function HomePage() {
  const destinations = myData;

  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-br from-pink-600 to-amber-400">
        <div className="grid sm:auto-cols-max md:grid-cols-2 justify-center items-center px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
          <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-0 md:py-16 sm:px-6 sm:py-12">
            {destinations?.features
              ?.sort(
                (itemA, itemB) =>
                  Number(itemB.properties.date) - Number(itemA.properties.date)
              )
              .map((item, i) => (
                <BlogCard
                  key={item.properties.title}
                  id={i + 1}
                  image={item.properties.image}
                  title={item.properties.title}
                  date={item.properties.date}
                  authorImage={item.properties.authorImage}
                  author={item.properties.author}
                />
              ))}
          </div>
          <div className="md:w-full">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
