import { NavBar, Footer } from "../componentExports";

function Contact() {
  return (
    <>
      <NavBar />
      <main className="bg-emerald-500 dark:bg-slate-900 h-screen flex items-center">
        <div className="container px-6 py-10 mx-auto">
          <div className="xl:flex xl:items-center xl:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
                Our Team
              </h1>
              <p className="max-w-2xl mt-4 text-white dark:text-gray-300">
                Two things about our team go here.Lorem ipsum dolor sit
              </p>
              <br />
              <h3 className="text-3xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                Contact Us
              </h3>
              <h5 className="max-w-2xl mt-4 text-white dark:text-gray-300">
                Hamburg Coding School
              </h5>
              <p className="max-w-2xl text-sm mt-4 text-white dark:text-gray-300">
                Borselstraße 7, 22765 Hamburg
                <br />
                teresa@hamburgcodingschool.com
                <br />
                +49 40 22863615
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src="/images/Agustina.jpg"
                  alt="Agustina"
                />
                <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
                  Agustina Carrion
                </h1>
                <p className="mt-2 text-white capitalize dark:text-gray-300">
                  Massive nerd
                </p>
              </div>
              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src="/images/Andi.jpeg"
                  alt="Andi"
                />
                <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">
                  Andi White
                </h1>
                <p className="mt-2 text-white capitalize dark:text-gray-300">
                  Full-time Gremlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
