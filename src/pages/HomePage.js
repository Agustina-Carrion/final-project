import { NavBar, Footer, MapContainer, BlogCard } from "../componentExports";

function HomePage({ destinations }) {
  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-br from-pink-600 to-amber-400">
        <div className="grid sm:auto-cols-max md:grid-cols-2 justify-center items-center px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
          <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-0 md:py-16 sm:px-6 sm:py-12">
            {destinations?.sort(
                (itemA, itemB) =>
                  Number(itemB.date) - Number(itemA.date)
              )
              .map((item, i) => (
                <BlogCard
                  key={item.title}
                  id={i}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  authorImage={item.authorImage}
                  author={item.author}
                />
              ))}
          </div>
          <div className="md:w-full">
            <MapContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default HomePage;
