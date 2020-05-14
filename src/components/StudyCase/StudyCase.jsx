import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import projects from "../../data/projects";

const StudyCase = () => {
	let { projectSlug } = useParams();
	console.log("slug" + projectSlug);
	const [currentProject, setCurrentProject] = useState(null);

	useEffect(() => {
		setCurrentProject(projects.find((project) => project.slug === projectSlug));
	});

	return (
		<>
			{currentProject ? (
				<>
					<h6>
						<FormattedMessage id={`${currentProject.client}.title`} />
					</h6>
					<FormattedMessage id={`${currentProject.client}.description`} />
					<br />
				</>
			) : (
				<h1>Cette case study n'éxiste pas..</h1>
			)}
		</>
	);
};
export default StudyCase;

// useEffect(() => {
// 	if (projectSlug.includes("platon") === true) {
// 		setCurrentProject("platon");
// 	}
// 	if (projectSlug.includes("solane") === true) {
// 		setCurrentProject("solane");
// 	}
// 	if (projectSlug.includes("sedal") === true) {
// 		setCurrentProject("sedal");
// 	}
// 	console.log("Current slug" + currentProject);
// });
