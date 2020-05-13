import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works/";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";
// import Work from "./components/Work";
import StudyCase from "./components/StudyCase";
import LanguageContext from "./context/LanguageContext";
import React, { useContext } from "react";

const messages = {
	fr: messagesFr,
	en: messagesEn,
};

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
						<Route path="/works">
							<Works />
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

{
	/* <Route path={`/works/:projectSlug`}>
							<StudyCase />
						</Route> */
}
