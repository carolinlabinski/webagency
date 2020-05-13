import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
	return (
		<>
			<h1>
				<FormattedMessage id="home.title" />
			</h1>
			<br />
			<FormattedMessage id="home.text" /> <br />
		</>
	);
};
export default Home;
