import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";

const App = () => {
	return (
		<Suspense fallback={null}>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
				</Routes>
			</Router>
		</Suspense>
	);
};

export default App;