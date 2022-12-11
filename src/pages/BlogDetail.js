import { NavBar, Footer, Map } from "../componentExports";
function BlogDetail({ id }) {
  return (
    <>
      <NavBar />
      <main className="m-14">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-10">
              Lalalalala
            </h2>
          </div>
          <div className="p-4">
            <div className="flex py-2">
              <img
                src="/images/Agustina.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt="Author"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  Agustina & Andi
                </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
          </div>
          <img
            src="/images/Disneyland.jpg"
            className="w-full object-cover lg:rounded"
            alt="Destination"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
              Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor.
              Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor;
              hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor.
              Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor
              hodor HODOR! Hodor hodor... Hodor hodor hodor...
            </p>

            <p className="pb-6">
              Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake
              muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly
              beans topping carrot cake danish tart cake cheesecake. Muffin
              danish chocolate soufflé pastry icing bonbon oat cake. Powder cake
              jujubes oat cake. Lemon drops tootsie roll marshmallow halvah
              carrot cake.
            </p>
          </div>
          <div className="w-full lg:w-1/2 m-auto mt-12 max-w-screen-sm">
            <Map />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default BlogDetail;
