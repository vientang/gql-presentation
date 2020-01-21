import React from 'react';
// Import Spectacle Core tags
import {
	Slide,
	Heading,
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
					Companies in attendance
				</Heading>
				<Table>
					<TableBody>
						<TableRow>
							{['Microsoft', 'Gitlab', 'GitHub'].map(topic => (
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
							{['VMWare', 'Coursera', 'Expedia'].map(topic => (
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
							{['Shopify', 'Airbnb', 'Zillow'].map(topic => (
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
							{['Netflix', 'Paypal', 'Robinhood'].map(topic => (
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
							{['New York Times', 'Capital One', 'Intuit'].map(topic => (
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
							<TableItem
								size={6}
								lineHeight={1.5}
								textColor="secondary"
								textAlign="left"
							>
								and more ...
							</TableItem>
						</TableRow>
					</TableBody>
				</Table>
			</Slide>
		);
	}
}
