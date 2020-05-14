import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import React, { useState } from "react";

const Work = () => {
	const [selectedProject, setselectedProject] = useState("");

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
						{/* <h6>{project.title}</h6> */}
						<Link to={`/works/${project.slug}`}>{project.client}</Link>
					</div>
				))}
			</div>
		</>
	);
};
export default Work;
