import React from 'react';
// Import Spectacle Core tags
import {
	Slide,
	BlockQuote,
	Code,
	Cite,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Notes,
	Quote,
	Text
} from 'spectacle';

// Require CSS
require('normalize.css');

export default class WhatIsGraphQL extends React.Component {
	render() {
		return (
			<>
				<Slide transition={['fade']} bgColor="tertiary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Topics
					</Heading>
					{[
						'WHAT IS GRAPHQL?',
						'TAKEAWAYS FROM THE CONFERENCE',
						'GRAPHQL AT VEEVA'
					].map(topic => (
						<Text
							size={6}
							lineHeight={1.5}
							textColor="primary"
							textAlign="left"
						>
							{topic}
						</Text>
					))}
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						GraphQL is data query language for API's, not a repo or framework.
					</Text>

					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={30}
						margin={20}
					>
						<Link href="https://graphql.github.io/graphql-spec/">
							Specification
						</Link>
					</Text>
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={30}
						margin={20}
					>
						<Link href="https://www.graphql-java.com/" textAlign="left">
							graphql-java
						</Link>
					</Text>
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={30}
						margin={20}
					>
						<Link
							href="https://github.com/apollographql/apollo-client/tree/master/packages/graphql-anywhere"
							textAlign="left"
						>
							graphql-anywhere
						</Link>
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<List bulletStyle="star">
						<ListItem>Declarative data fetching</ListItem>
						<ListItem>Strong type schema</ListItem>
						<ListItem>Good developer experience</ListItem>
						<ListItem>Cost effective</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Declarative data fetching
					</Heading>
					<List>
						<ListItem>
							Avoid making multiple server requests to fetch data
						</ListItem>
						<ListItem>Avoid over fetching data</ListItem>
						<ListItem>
							REST API's are optimized for servers, not for clients
						</ListItem>
						<ListItem>
							Response data is mapped one to one with the request
						</ListItem>
					</List>
				</Slide>
			</>
		);
	}
}
