import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import RecipeList from "./Components/RecipeList"
import RecipeDetails from "./Components/RecipeDetails"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipeDetails/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
