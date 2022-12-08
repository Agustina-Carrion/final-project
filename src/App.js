import { HomePage, Contact, BlogDetail } from "./pagesExports";
import "mapbox-gl/dist/mapbox-gl.css";
import { Switch, Route } from "wouter";

function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <Switch>
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/contact" component={Contact} />
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}
export default App;
