import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation(["common", "about"]);

	return (
		<div className="container mt-5 col-9 col-md-6">
			<h1 className="text-center">{t("about:signup")}</h1>

			<div className="form-group">
				<label htmlFor="">{t("about:name")}:</label>
				<input
					type="text"
					className="form-control"
					placeholder="Shivansh Kaurav"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">{t("about:age")}:</label>
				<input
					type="number"
					className="form-control"
					placeholder="21"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">{t("about:e-mail")}:</label>
				<input
					type="text"
					className="form-control"
					placeholder="shivansh@Olecons.com"
				/>
			</div>
			<br />
			<div className="text-center">
				<button className="btn btn-dark">{t("common:submit")}</button>
			</div>
		</div>
	);
};

export default About;