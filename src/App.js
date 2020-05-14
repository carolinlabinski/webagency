import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";
import LanguageContext from "./context/LanguageContext";
import React, { useContext } from "react";
import StudyCase from "./components/StudyCase";
import { FormattedMessage } from "react-intl";

const messages = {
	fr: messagesFr,
	en: messagesEn,
};

console.log(messages);
function App() {
	const { language } = useContext(LanguageContext);

	return (
		<IntlProvider locale={language} messages={messages[language]}>
			<Router>
				<div className="App">
					<Navbar language={language} />
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route exact path="/works">
							<Works />
						</Route>
						<Route path="/works/:projectSlug">
							<StudyCase />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</IntlProvider>
	);
}

export default App;
