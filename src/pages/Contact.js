import { NavBar, Footer } from "../componentExports";

function Contact() {
  return (
    <>
      <NavBar />
<section className="bg-gradient-to-br from-pink-600 to-amber-400 dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">Our Team</h1>
                <p className="max-w-2xl mt-4 text-white dark:text-gray-300">
                Two things about our team go here.Lorem ipsum dolor sit
                </p>  
                <br/>
                <h3 className="text-3xl font-semibold text-white capitalize lg:text-3xl dark:text-white">Contact Us</h3>
                <h5 className="max-w-2xl mt-4 text-white dark:text-gray-300">
                Hamburg Coding School 
                </h5>  
                <p className="max-w-2xl text-sm mt-4 text-white dark:text-gray-300">
                 Borselstraße 7, 22765 Hamburg
                 <br/>
                  teresa@hamburgcodingschool.com
                  <br/>
                  +49 40 22863615
                </p>
            </div>
            
            
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div>
                    <img className="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">Agustina Carrion</h1>
                    
                    <p className="mt-2 text-white capitalize dark:text-gray-300">Full stack developer</p>
                </div>

                <div>
                    <img className="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                    
                    <h1 className="mt-4 text-2xl font-semibold text-white capitalize dark:text-white">Andi White</h1>
                    
                    <p className="mt-2 text-white capitalize dark:text-gray-300">Graphic Designer</p>
                </div>
            </div>
        </div>
    </div>
</section>

      <Footer />
    </>
  );
}

export default Contact;
