import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import React from "react";

const Works = () => {
	return (
		<>
			<h1>
				<FormattedMessage id="works.title" />
			</h1>
			<br />
			<FormattedMessage id="works.text" /> <br />
			<div>
				{projects.map((project, key) => (
					<div key={key}>
						<FormattedMessage id={`${project.client}.title`} /> <br />
						<Link to={`/works/${project.slug}`}>{project.client.toUpperCase()}</Link>
					</div>
				))}
			</div>
		</>
	);
};
export default Works;
