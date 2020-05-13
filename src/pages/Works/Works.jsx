import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import StudyCase from "../../components/StudyCase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Works = () => {
	// const xx = projects.map((project, key) => (
	// 	<div key={key}>
	// 		<Link to={`/works/${project.slug}`}>{project.title}</Link>
	// 	</div>
	// ));

	return (
		<>
			<h1>
				<FormattedMessage id="works.title" />
			</h1>
			<br />
			<FormattedMessage id="works.text" /> <br />
			Sedal description:
			<FormattedMessage id="sedal.description" />
			<Router>
				<div>
					{projects.map((project, key) => (
						<div key={key}>
							<h6>{project.title}</h6>
							<Link to={`/works/${project.slug}`}>{project.slug}</Link>
						</div>
					))}
				</div>
				<Switch>
					<Route path={`/works/:projectSlug`}>
						<StudyCase />
					</Route>
				</Switch>
			</Router>
		</>
	);
};
export default Works;

{
	/* <Router>
		
				<Navbar />
				<Switch>
					<Route path={`/book/:bookSlug`}>
						<Book />
					</Route>
				</Switch>
		</Router> */
}
