import { HomePage, Contact, BlogDetail } from "./pagesExports";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route } from "wouter";
import data from "./data/destinationsLight.json";

function App() {
  const destinations = data;

  return (
    <main className="flex flex-col w-full h-full">
      <Switch>
        <Route path="/blog/:id">
          {(params) => (
            <BlogDetail id={params.id} destinations={destinations} />
          )}
        </Route>
        <Route path="/contact" component={Contact} />
        <Route>
          <HomePage destinations={destinations} />
        </Route>
      </Switch>
    </main>
  );
}
export default App;
