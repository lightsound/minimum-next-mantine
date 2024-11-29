import { Card } from "@mantine/core";
import styles from "./styles.module.css";

export default function Home(): React.ReactNode {
	return (
		<Card
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder={true}
			className={styles.margin}
		>
			Hello, World!
		</Card>
	);
}
