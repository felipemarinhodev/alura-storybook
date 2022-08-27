import Button from "../src/components/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
	return (
		<ThemeProvider>
			<div>
				<h1>Home page!</h1>
				<Button variant="primary">Simple Button</Button>
			</div>
		</ThemeProvider>
	);
}
