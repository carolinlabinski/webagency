import { Link } from "react-router-dom";
import flaggb from "../../img/flaggb.jpg";
import flagfr from "../../img/flagfr.jpg";
import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../../context/LanguageContext";

const Navbar = ({ language }) => {
	const { toggle } = useContext(LanguageContext);
	const [src, setSrc] = useState(flagfr);

	useEffect(() => (language === "fr" ? setSrc(flaggb) : setSrc(flagfr)));

	return (
		<div className="topnav">
			<Link to="/">SIMPLE WEBBAGENCY</Link>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/works">Works</Link>
			<button className="btn" onClick={toggle}>
				<img
					src={src}
					className="m-0"
					style={{ height: "20px", right: "400px" }}
					alt="Logo"
				/>
				;
			</button>
		</div>
	);
};
export default Navbar;
