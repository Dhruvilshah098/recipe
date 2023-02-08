import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;



// Files and Links

// https://www.youtube.com/watch?v=xc4uOzlndAk

// https://spoonacular.com/food-api/docs#Get-Random-Recipes 

// 1.35.00