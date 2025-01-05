import { calculateInvestmentResults } from "../util/investment";
export default function Results({ input }) {
	let results = calculateInvestmentResults(input);
	console.log(results);
}
