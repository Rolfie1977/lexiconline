import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<Routes>
					<Route path={"/"} element={<LandingPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
