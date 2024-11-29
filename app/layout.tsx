export default function RootLayout({
	children,
}: { children: React.ReactNode }): React.ReactNode {
	return (
		<html lang="ja">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
