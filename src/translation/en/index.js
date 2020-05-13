import home from "./home.json";
import works from "./works.json";
import about from "./about.json";
import casestudies from "./casestudies.json";

const en = {
	...works,
	...home,
	...about,
	...casestudies,
};

export default en;
