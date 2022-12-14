import { useState, useEffect } from "react";
import { HomePage, Contact, BlogDetail } from "./pagesExports";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route } from "wouter";
//import data from "./data/destinationsLightMode.json";

function App() {
  //const destinations = data;
  const [travelDestinations, setTravelDestinations] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/destinations")
      .then((response) => response.json())
      .then((result) => {
        setTravelDestinations(result);
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
            <BlogDetail id={params.id} destinations={destinations} />
          )} */}
          {(params) => (
            <BlogDetail id={params.id} destinations={travelDestinations} />
          )}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route>
          {/* <HomePage destinations={destinations} /> */}
          <HomePage error={error} destinations={travelDestinations} />
        </Route>
      </Switch>
    </main>
  );
}
export default App;
