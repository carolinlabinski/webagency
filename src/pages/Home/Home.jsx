import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => {
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
