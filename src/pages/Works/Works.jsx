import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import StudyCase from "../../components/StudyCase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";

const Works = () => {
	// const xx = projects.map((project, key) => (
	// 	<div key={key}>
	// 		<Link to={`/works/${project.slug}`}>{project.title}</Link>
	// 	</div>
	// ));
	const [selectedProject, setselectedProject] = useState("");

	// let clientname = "platon";
	// const handleChange = (e) => {
	// 	var button = e.target;
	// 	console.log(button.id);
	// 	setselectedProject(button.id);
	// };
	return (
		<>
			<h1>
				<FormattedMessage id="works.title" />
			</h1>
			<br />
			<FormattedMessage id="works.text" /> <br />
			<Router>
				<div>
					{projects.map((project, key) => (
						<div key={key}>
							{/* <h6>{project.title}</h6> */}
							<Link to={`/works/${project.slug}`}>{project.client}</Link>
						</div>
					))}
				</div>
				---------------
				{/* <div>
					<h6>test link</h6>
					<p>Discover our clients:</p>
					<Link to={`/works/${selectedProject}-study-case`}>
						<FormattedMessage id={`${selectedProject}.title`} /> <br />
						<FormattedMessage id={`${selectedProject}.description`} />
					</Link>
				</div> */}
				---------------
				{/* <div>
					Discover our clients:
					<h6>test link2</h6>
					<button id="platon" onClick={handleChange}>
						Platon
					</button>
					<button id="sedal" onClick={handleChange}>
						Sedal
					</button>
					<button id="solane" onClick={handleChange}>
						Solane
					</button>
					<br />
				</div> */}
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
