import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import projects from "../../data/projects";
import React from "react";

const Works = () => {
	return (
		<>
			<br />
			<h1>
				<FormattedMessage id="works.title" />
			</h1>
			<br />
			<FormattedMessage id="works.text" /> <br />
			{/* 
			<div class="games d-flex flex-wrap justify-content-around whitetext ml-5 mr-5">...loading</div>
		  <div class="col-md-12 text-center"> */}
			<div>
				{projects.map((project, key) => (
					<div className="section">
						<div className="container-1">
							<div className="row">
								<div className="mt-1 ml-5 mr-5">
									<div className="col-md-12 text-center">
										<br />
										<div
											className="card text-center"
											style={{ width: "18rem", height: "10rem" }}
										>
											<div className="card-body">
												<div key={key}>
													<h5 className="card-title">
														<FormattedMessage id={`${project.client}.title`} />
													</h5>
													<button className="btn btn-outline-primary" id="btn-cards">
														<Link to={`/works/${project.slug}`}>
															{project.client.toUpperCase()}
														</Link>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default Works;
