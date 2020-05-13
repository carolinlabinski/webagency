import projects from "../../data/projects";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const StudyCase = () => {
	let { projectSlug } = useParams();
	const [currentProject, setCurrentProject] = useState(null);

	useEffect(() => {
		setCurrentProject(projects.find((project) => project.slug === projectSlug));
	});
	return (
		<>
			{currentProject ? (
				<>
					<h1>{currentProject.title}</h1>
					<p>{currentProject.description}</p>
					test:
					<FormattedMessage id="works.title" />
				</>
			) : (
				<h1>Paragraphe d'erreur</h1>
			)}
		</>
	);
};
export default StudyCase;
