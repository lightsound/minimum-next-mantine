import type { NextConfig } from "next";

export default {
	experimental: {
		ppr: true,
		// biome-ignore lint/style/useNamingConvention: Next.js側の設定
		dynamicIO: true,
		reactCompiler: true,
		optimizePackageImports: [
			"@mantine/core",
			"@mantine/hooks",
			"@mantine/form",
			"@mantine/dates",
		],
	},
} satisfies NextConfig;
