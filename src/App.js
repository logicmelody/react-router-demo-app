import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				<div className="content-container">
					<div className="route-container">
						{/* A <Switch> looks through its children <Route>s and
							renders the first one that matches the current URL. */}
						<Switch>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/users">
								<Users />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>

					<button onClick={() => console.log("Click Right Button")}>
						Right Button
					</button>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
