import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import User from "./views/User";

function App() {
	return (
		<div className="app">
			<Router>
        <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/user" element={<User />} />
        </Routes>
			</Router>
		</div>
	);
}

export default App;
