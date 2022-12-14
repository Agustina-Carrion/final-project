import { NavBar, Footer } from "../componentExports";

function Contact() {
  return (
    <>
      <NavBar />
      <main className="bg-emerald-500 dark:bg-slate-900 flex items-center">
        <div className="container px-6 py-16 mx-auto">
          <div className="xl:flex xl:items-center xl:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
                Our Team
              </h1>
              <p className="max-w-2xl mt-4 text-white text-lg dark:text-gray-300">
                We are two highly motivated individuals 🤓, with a dash of
                insanity 🤪, genuinely curious about the universe & coding... We
                are lifelong learners who value the journey over the
                destination! 🚀
                <br />
              </p>
              <p className="max-w-2xl mt-4 text-white text-lg dark:text-gray-300">
                This project has been the source of one too many headaches 🤕
                and riotous laughter 🤣, but we love it dearly 🫶!
                <br />
              </p>
              <p className="max-w-2xl mt-4 text-white text-lg dark:text-gray-300">
                This is our final project for
                <strong className="text-orange-700 dark:text-red-400">
                  {" "}
                  Hamburg Coding School's{" "}
                </strong>
                Full-Stack Web Development course. And it's a work in progress!
              </p>
              <br />
              <h3 className="text-3xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                Contact Us
              </h3>
              <h5 className="max-w-2xl text-2xl mt-4 text-white dark:text-gray-300">
                Agustina
              </h5>
              <p className="max-w-2xl text-lg mt-4 text-white dark:text-gray-300">
                Somewhere lost in Hamburg
                <br />
                tina@argentina.com
                <br />
                +49 40 22863615
              </p>{" "}
              <h5 className="max-w-2xl text-2xl mt-4 text-white dark:text-gray-300">
                Andi
              </h5>
              <p className="max-w-2xl text-lg mt-4 text-white dark:text-gray-300">
                Somewhere lost in space
                <br />
                andi@tothemoon.com
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
                  Massive geek
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
