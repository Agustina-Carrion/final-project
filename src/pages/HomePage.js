import { NavBar, Footer, Map, BlogCard } from "../componentExports";
import myData from "../data/destinationsLight.json";

function HomePage() {
  const destinations = myData;

  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-r from-cyan-400 to-orange-500">
        <div className="grid sm:auto-cols-max md:grid-cols-2 justify-center items-center max-w-full min-h-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
          <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-8 md:py-16 sm:px-6 sm:py-12">
            {destinations?.features
              ?.sort(
                (itemA, itemB) =>
                  Number(itemB.properties.date) - Number(itemA.properties.date)
              )
              .map((item) => (
                <BlogCard
                  key={item.properties.title}
                  image={item.properties.image}
                  title={item.properties.title}
                  dates={item.properties.date}
                  author={item.properties.authorName}
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
