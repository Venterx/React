import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import HomePage from "./pages/HomePage/HomePage"
import ProductPage from "./pages/ProductPage/ProductPage"

function App(){
	return (
		<>
      	<Header/>
		<Routes>
			<Route path="/" element={<HomePage/>}></Route>
			<Route path="/catalog" element={<CatalogPage/>}></Route>
			<Route path="/catalog/:id" element={<ProductPage/>}></Route>
			
		</Routes>
		</>
	)
}

export default App
