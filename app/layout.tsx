import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja" suppressHydrationWarning={true}>
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body suppressHydrationWarning={true}>
				<MantineProvider defaultColorScheme="auto">{children}</MantineProvider>
			</body>
		</html>
	);
}
