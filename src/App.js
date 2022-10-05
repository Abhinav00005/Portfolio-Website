import Topbar from "./My Components/topbar/Topbar";
import Intro from "./My Components/intro/Intro";
import Portfolio from "./My Components/portfolio/Portfolio";
import Works from "./My Components/works/Works";
import Testimonials from "./My Components/testimonials/Testimonials";
import Contact from "./My Components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./My Components/menu/Menu";

function App() {
	const [menuOpen, setMenuopen] = useState(false);

	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuopen={setMenuopen} />
			<Menu menuOpen={menuOpen} setMenuopen={setMenuopen} />
			<div className="sections">
				<Intro />
				<Portfolio />
				<Works />
				<Testimonials />
				<Contact />
			</div>
		</div>
	);
}

export default App;
