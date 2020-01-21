import React from 'react';
// Import Spectacle Core tags
import {
	Link,
	Heading,
	Text,
	Slide,
	Table,
	TableBody,
	TableItem,
	TableRow
} from 'spectacle';

// Require CSS
require('normalize.css');

export default class Companies extends React.Component {
	render() {
		return (
			<Slide transition={['fade']} bgColor="tertiary">
				<Heading
					size={6}
					lineHeight={1.2}
					textColor="secondary"
					textAlign="left"
					caps
				>
					Companies involved in GraphQL
				</Heading>
				<Table>
					<TableBody>
						<TableRow>
							{['AWS', 'IBM', 'Atlassian'].map(topic => (
								<TableItem
									size={6}
									lineHeight={1.5}
									textColor="primary"
									textAlign="left"
								>
									{topic}
								</TableItem>
							))}
						</TableRow>
						<TableRow>
							{['Lyft', 'Starbucks', 'Twitter'].map(topic => (
								<TableItem
									size={6}
									lineHeight={1.5}
									textColor="primary"
									textAlign="left"
								>
									{topic}
								</TableItem>
							))}
						</TableRow>
						<TableRow>
							{['Pintrest', 'NBC', 'Zillow'].map(topic => (
								<TableItem
									size={6}
									lineHeight={1.5}
									textColor="primary"
									textAlign="left"
								>
									{topic}
								</TableItem>
							))}
						</TableRow>
						<TableRow>
							{['Gatsby', 'Apollo', 'Facebook'].map(topic => (
								<TableItem
									size={6}
									lineHeight={1.5}
									textColor="primary"
									textAlign="left"
								>
									{topic}
								</TableItem>
							))}
						</TableRow>
					</TableBody>
				</Table>
				<Text textAlign="left" lineHeight={2} textSize={30}>
					<Link href="https://landscape.graphql.org/format=card-mode">
						See more at landscape.graphql.org
					</Link>
				</Text>
			</Slide>
		);
	}
}
