// import React from "react";
// import { FormattedMessage } from "react-intl";

// const About = ({ modify }) => {
// 	return (
// 		<>
// 			<FormattedMessage id="about.title" /> <br />
// 			<FormattedMessage id="about.text" />
// 			<button onClick={() => modify("en")}>Change language to frenchx</button>
// 		</>
// 	);
// };

// export default About;

import React from "react";
import { FormattedMessage } from "react-intl";

const About = ({ modify }) => {
	return (
		<>
			<div className="container mt-5">
				<h1>
					<FormattedMessage id="about.title" />
				</h1>
				<br />
				<FormattedMessage id="about.text" /> <br />
			</div>
		</>
	);
};
export default About;
