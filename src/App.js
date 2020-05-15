import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import fr from "./translation/fr";
import en from "./translation/en";
import LanguageContext from "./context/LanguageContext";
import StudyCase from "./components/StudyCase";

const messages = {
	fr,
	en,
};

console.log(messages);
const App = () => {
	const { language } = useContext(LanguageContext);

	return (
		<IntlProvider locale={language} messages={messages[language]}>
			<Router>
				<div className="App">
					<Navbar language={language} />
					<Switch>
						<Route path="/about" component={About} />
						<Route exact path="/works" component={Works} />
						<Route path="/works/:projectSlug">
							<StudyCase />
						</Route>

						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</IntlProvider>
	);
};

export default App;
