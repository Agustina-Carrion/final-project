import { NavBar, Footer, MapContainer, BlogCard } from "../componentExports";
import gif from "../assets/Lost -The Weeknd.gif"; 


function HomePage({ error, destinations }) {
  return (
    <>
      <NavBar />
      <div className="relative bg-rose-500 dark:bg-slate-900">
        <div className="grid sm:auto-cols-max md:grid-cols-2 justify-center items-center px-4 py-8 sm:px-6 lg:px-8 lg:py-0">
          <div className="grid grid-cols-2 md:ml-0 md:w-full md:px-0 md:py-16 sm:px-6 sm:py-12">
            {error ? (<>
            <h1 className="text-white text-xl text-center ">Error when retrieving data. We're trying to find out what happened...</h1>
            <img className="px-5"src= {gif} alt="The Weekend.gif."/>
            </>)
              :
                (destinations?.sort((itemA, itemB) => Number(itemB.date) - Number(itemA.date)).map((item, i) => (<BlogCard
                key={item.title}
                id={i}
                image={item.image}
                title={item.title}
                date={item.date}
                authorImage={item.authorImage}
                author={item.author}
                />
                ))
                )}
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
