import React from 'react';
// Import Spectacle Core tags
import { Slide, Text, Link } from 'spectacle';

// Require CSS
require('normalize.css');

export default class References extends React.Component {
	render() {
		return (
			<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
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
		);
	}
}
