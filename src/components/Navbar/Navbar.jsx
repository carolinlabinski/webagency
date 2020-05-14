import { Link } from "react-router-dom";
import flaggb from "../../img/flaggb.jpg";
import flagfr from "../../img/flagfr.jpg";
import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";
import { FormattedMessage } from "react-intl";
import projects from "../../data/projects";

const Navbar = ({ language }) => {
	const { toggle } = useContext(LanguageContext);
	const [src, setSrc] = useState(flagfr);

	useEffect(() => (language === "fr" ? setSrc(flaggb) : setSrc(flagfr)));

	let projectsList = projects.map((project, key) => (
		<div key={key}>
			<Link className="nav-link" to={`/works/${project.slug}`}>
				{project.client.toUpperCase()}
			</Link>
		</div>
	));

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark bg-dark">
			<Link className="navbar-brand" id="whitetext" to="/">
				Better Webagency
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" id="whitetext" to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" id="whitetext" to="/about">
							About
						</Link>
					</li>
					<li className="nav-item dropdown ">
						<Link
							className="nav-link dropdown-toggle"
							to="/works"
							id="navbarDropdown whitetext"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							style={{ backgroundColor: "lightgrey" }}
						>
							Works
						</Link>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<Link className="nav-link" to="/works">
								Case studies
							</Link>
							<div className="dropdown-divider" id="redtext"></div>
							{projectsList}
						</div>
					</li>
				</ul>
				<button className="btn" onClick={toggle}>
					<img
						src={src}
						className="m-0"
						style={{ height: "20px", right: "400px" }}
						alt="Logo"
					/>
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
