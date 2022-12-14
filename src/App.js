import { useState, useEffect } from "react";
import { HomePage, Contact, BlogDetail } from "./pagesExports";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route } from "wouter";

// Commented out local solution (it fetches data from the json file)
// import data from "./data/destinationsLightMode.json";

function App() {
  // const destinationsJSON = data;

  const [travelDestinationsAPI, setTravelDestinationsAPI] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://happypathapi.onrender.com/destinations")
      .then((response) => response.json())
      .then((result) => {
        setTravelDestinationsAPI(result);
        console.log(result);
        setError(null);
      })
      .catch(setError);
  }, []);

  return (
    <main className="flex flex-col w-full h-full">
      <Switch>
        <Route path="/blog/:id">
          {/* {(params) => (
            <BlogDetail id={params.id} destinations={destinationsJSON} />
          )} */}
          {(params) => (
            <BlogDetail id={params.id} destinations={travelDestinationsAPI} />
          )}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route>
          {/* <HomePage destinations={destinationsJSON} /> */}
          <HomePage error={error} destinations={travelDestinationsAPI} />
        </Route>
      </Switch>
    </main>
  );
}
export default App;
