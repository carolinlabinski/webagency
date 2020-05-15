import React, { useEffect, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import LanguageContext from "../../context/LanguageContext";

const Home = () => {
	const history = useHistory();
	const { language } = useContext(LanguageContext);

	useEffect(() => {
		history.push(`/${language}`);
	}, [language]);

	return (
		<>
			<div className="container mt-5">
				<h1>
					<FormattedMessage id="home.title" />
				</h1>
				<br />
				<FormattedMessage id="home.text" /> <br />
			</div>
		</>
	);
};
export default Home;
