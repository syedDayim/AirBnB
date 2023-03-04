import Cards from "./components/Cards";
import Grid from "./components/Grid";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid />
      <Heading />
      <Cards />
    </div>
  );
}

export default App;
