import siteHeadImage from "../assets/investment-calculator-logo.png";

export default function Header() {
	return (
		<header id="header">
			<img src={siteHeadImage} alt="Logo showing Money bag" />
			<h1>React Investment Calculator</h1>
		</header>
	);
}
