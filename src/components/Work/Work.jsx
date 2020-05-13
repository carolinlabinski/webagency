// //import React from "react";
// import projects from "../../data/projects";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// // const Book = () => {
// // 	let { bookSlug } = useParams();
// // 	console.log(bookSlug);
// // 	return <p>{bookSlug}</p>;
// // };
// // export default Book;

// const Work = () => {
// 	let { projectSlug } = useParams();
// 	const [currentProject, setCurrentProject] = useState(null);
// 	useEffect(() => {
// 		setCurrentProject(projects.find((project) => project.slug === projectSlug));
// 	});
// 	return (
// 		<>
// 			{currentProject ? (
// 				<>
// 					<h1>{currentProject.title}</h1>
// 					<p>{currentProject.description}</p>
// 				</>
// 			) : (
// 				<h1>Paragraphe d'erreur</h1>
// 			)}
// 		</>
// 	);
// };
// export default Work;
