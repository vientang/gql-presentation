import React from 'react';
// Import Spectacle Core tags
import {
	BlockQuote,
	Code,
	CodePane,
	Cite,
	Deck,
	Heading,
	Image,
	Link,
	ListItem,
	List,
	Notes,
	Quote,
	Slide,
	Table,
	TableBody,
	TableHeader,
	TableHeaderItem,
	TableItem,
	TableRow,
	Text
} from 'spectacle';
import Companies from './companies';
import CompaniesMore from './companies-more';
import References from './references';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		quaternary: '#CECECE'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
);

const greyFade = 'rgba(0, 0, 0, 0.5)';

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading size={1} fit caps lineHeight={1} textColor="secondary">
						GraphQL
					</Heading>
					<Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
						Summit 2019
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary">
					{[
						'WHAT IS GRAPHQL?',
						'WHY USE GRAPHQL?',
						'CORE PARTS',
						'TAKEAWAYS FROM THE CONFERENCE'
					].map(topic => (
						<Heading
							size={6}
							lineHeight={1.5}
							textColor="secondary"
							textAlign="left"
						>
							{topic}
						</Heading>
					))}
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Declarative typed based query language for API's
					</Text>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Declarative type-based data query language for API's
					</Text>
					<Text
						transition={['fade']}
						lineHeight={2}
						textColor="primary"
						textAlign="left"
					>
						A <Link href="https://graphql.github.io/graphql-spec/">spec</Link>,
						not a library or framework.
					</Text>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Declarative type based query language for API's
					</Text>
					<Text
						transition={['fade']}
						lineHeight={2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						A <Link href="https://graphql.github.io/graphql-spec/">spec</Link>,
						not a library or framework
					</Text>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Powered by a schema that describes the contract between clients and
						servers
					</Text>
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						(and the relationships between different data types)
					</Text>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Declarative type based query language for API's
					</Text>
					<Text
						transition={['fade']}
						lineHeight={2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						A <Link href="https://graphql.github.io/graphql-spec/">spec</Link>,
						not a library or framework
					</Text>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Powered by a schema that describes the contract between clients and
						servers
					</Text>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						(and the relationships between different data types)
					</Text>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Gateway between the client and server
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Image src={require('./assets/graphql_gateway.png')} />
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						WHAT IS GRAPHQL?
					</Heading>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Query language + Type-based schema for APIs
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						WHY USE GRAPHQL?
					</Heading>
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						What problem is GraphQL is solving?
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Problems:
					</Heading>
					{[
						'Often times, we request more data than we need',
						'Different applications have different data needs',
						'How do we know which endpoint to use?'
					].map(message => (
						<Text
							lineHeight={1.2}
							margin="15px"
							textColor="primary"
							textAlign="left"
							textSize={35}
						>
							{message}
						</Text>
					))}
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Over fetching data
					</Heading>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Let's take a look at vof in React. Specifically the implemention
						steps of a PicklistField
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor={greyFade} textAlign="left" caps>
						Let's take a look at vof in React
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Specifically the implemention steps of a PicklistField
					</Text>
					<List ordered>
						<ListItem>Fetch field data</ListItem>
						<ListItem>Adapt the data for PicklistField</ListItem>
						<ListItem>Display PicklistField in view mode</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Text textColor="primary" textAlign="left" bold>
						Fetch the data
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/getrequest.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="16px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Text textColor="primary" textAlign="left" bold>
						Payload
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/restpayload.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Text textColor="primary" textAlign="left" bold>
						Adapt the data for PicklistField
					</Text>
					<CodePane
						lang="js"
						margin="10px auto"
						overflow="overflow"
						textSize="15px"
						source={require('./examples/adaptor.example')}
					/>
					<Text textColor="primary" textAlign="left" textSize={20}>
						notice how we have to handle null cases
					</Text>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Text textColor="primary" textAlign="left" bold>
						Display PicklistField in view mode
					</Text>
					<CodePane
						lang="js"
						margin="10px auto"
						overflow="overflow"
						textSize="20px"
						source={require('./examples/picklistview.example')}
					/>
				</Slide>

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Application data requirements
					</Heading>
					<Text textColor="primary" textAlign="left" textSize={30}>
						"Lazy load data for editmode"
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Application data requirements
					</Heading>
					<Text textColor="primary" textAlign="left" bold>
						Maybe make new endpoints?
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="secondary"
						textAlign="left"
						textSize={25}
					>
						RIM:
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/rim/picklist/viewmode"</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/rim/picklist/editmode"</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="secondary"
						textAlign="left"
						textSize={25}
					>
						Safety:
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>
							"https://devauth1.vaultdev.com/safety/picklist/viewmode"
						</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>
							"https://devauth1.vaultdev.com/safety/picklist/editmode"
						</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="secondary"
						textAlign="left"
						textSize={25}
					>
						VOF:
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/vof/picklist/viewmode"</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/vof/picklist/editmode"</Link>
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor={greyFade}
						textAlign="left"
						textSize={25}
					>
						One endpoint
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor="primary"
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/everyone/public"</Link>
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor={greyFade}
						textAlign="left"
						textSize={25}
					>
						One endpoint
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor={greyFade}
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/everyone/public"</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Applications will request for the required data using GraphQL
						Queries
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor={greyFade}
						textAlign="left"
						textSize={25}
					>
						One endpoint
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.5}
						textColor={greyFade}
						textAlign="left"
						textSize={25}
					>
						<Link>"https://devauth1.vaultdev.com/everyone/public"</Link>
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Applications will request for the required data using GraphQL
						Queries
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						...and will update data using GraphQL Mutations
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Query
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/query.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Query
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Response is structured like the query
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Query
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={30}
					>
						Response is structured like the query
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Query for multiple fields in a single request
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Query
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Response is structured like the query
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Query for multiple fields in a single request
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Data transfers are more efficient, enabling faster load times by
						reducing the amount of data sent
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Which endpoints do I use?
					</Heading>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						GraphQL
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={30}
					>
						<Link>"https://devauth1.vaultdev.com/everyone/public"</Link>
					</Text>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Write queries and mutations against one endpoint
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						GraphQL
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={30}
					>
						<Link>"https://devauth1.vaultdev.com/everyone/public"</Link>
					</Text>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={30}
					>
						Write queries against one endpoint
					</Text>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Lets take a look at GitHub GraphQL Explorer
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Problems solved 🥳
					</Heading>
					{[
						'Avoid over fetching data',
						'Applications can customize queries based on data needs',
						'Documentation is built-in thanks to typed based schema'
					].map(message => {
						return (
							<Text
								lineHeight={1.2}
								margin="15px"
								textColor="primary"
								textAlign="left"
								textSize={35}
							>
								{message}
							</Text>
						);
					})}
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Core parts of GraphQL
					</Heading>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Core parts of GraphQL
					</Heading>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Powered by a schema that describes the contract between clients and
						servers
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Core parts of GraphQL
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Powered by a schema that describes the contract between clients and
						servers
					</Text>
					<Text textColor="primary" textAlign="left">
						Schema is made up of type definitions. Every type have fields that
						resolve to values.
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Core parts of GraphQL
					</Heading>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Powered by a schema that describes the contract between clients and
						servers
					</Text>
					<Text
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Schema is made up of type definitions. Every type have fields that
						resolve to values.
					</Text>
					<Text lineHeight={1.2} textColor="primary" textAlign="left">
						Schema is written in the GraphQL Schema Definition Language (SDL)
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Type definitions
					</Heading>
					<List>
						<ListItem>Queries</ListItem>
						<ListItem>Mutations</ListItem>
						<ListItem>Resolvers</ListItem>
						<ListItem>Scalars</ListItem>
						<ListItem>Inputs</ListItem>
						<ListItem textColor={greyFade}>and more ...</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Type definitions
					</Heading>
					<List>
						<ListItem>Queries</ListItem>
						<ListItem>Mutations</ListItem>
						<ListItem>Resolvers</ListItem>
						<ListItem>Scalars</ListItem>
						<ListItem>Inputs</ListItem>
						<ListItem textColor={greyFade}>and more ...</ListItem>
					</List>
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						More often than not, we'd define custom types
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Widget type
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/schema.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Field type
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/schema2.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Image src={require('./assets/graphql-banner.png')} />
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Text lineHeight={1.2} textColor="primary" textAlign="left" bold>
						Lets take a look at these types
					</Text>
					<List>
						<ListItem>Queries</ListItem>
						<ListItem>Mutations</ListItem>
						<ListItem>Resolvers</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Query
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/query.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Mutations
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Create, update and delete
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Mutations
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Create, update and delete
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Similar to queries, mutations can contain multiple fields
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Mutations
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/mutations.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Functions that executes the task and returns the data
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Functions that executes the task and returns the data
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
					>
						Every query or mutation needs a resolver
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Query
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/resolver.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						resolved data from query
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/query.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Mutations
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/resolver-mutation.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Resolvers
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						resolved data for mutations
					</Text>
					<CodePane
						lang="jsx"
						source={require('./examples/mutations.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Text
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
						textSize={35}
						bold
					>
						GraphQL is powered by a schema that that is made up of type
						definitions
					</Text>
					<List>
						<ListItem textSize={40}>Queries</ListItem>
						<ListItem textSize={40}>Mutations</ListItem>
						<ListItem textSize={40}>Resolvers</ListItem>
						<ListItem textSize={40}>Scalars</ListItem>
						<ListItem textSize={40}>Inputs</ListItem>
						<ListItem textColor={greyFade} textSize={35}>
							and more ...
						</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Benefits of GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Data transfers are more efficient, enabling faster load times by
						reducing the amount of data sent
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Benefits of GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Data transfers are more efficient, enabling faster load times by
						reducing the amount of data sent
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Request data from different data sources, resolve the data (filter,
						transform, sort, etc.), then send the resolved payload
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Benefits of GraphQL
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Data transfers are more efficient, enabling faster load times by
						reducing the amount of data sent
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
						textSize={35}
					>
						Request data from different data sources, resolve the data (filter,
						transform, sort, etc.), then send the resolved payload
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Improves developer productivity with api documentation, early error
						detections and removing the need to create new endpoints
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<BlockQuote>
						<Quote>The fastest network request is a request not made</Quote>
						<Cite textColor={greyFade}>Ilya Grigorik</Cite>
						<Text textColor={greyFade} textSize={20}>
							High Performance Browser Networking
						</Text>
					</BlockQuote>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Takeaways from GraphQL Summit
					</Heading>
				</Slide>

				<Companies />
				<CompaniesMore />

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						Common tech stack
					</Heading>
					<Image
						src={require('./assets/graphql-logo.png')}
						height={100}
						textAlign="left"
						display="inline-block"
						style={{ margin: '0 1rem' }}
					/>
					<Image
						src={require('./assets/typescript-logo.png')}
						width={100}
						height={100}
						textAlign="left"
						display="inline-block"
						style={{ margin: '0 1rem' }}
					/>
					<Image
						src={require('./assets/apollo-logo.png')}
						height={100}
						textAlign="left"
						display="inline-block"
						style={{ margin: '0 1rem' }}
					/>

					<Image
						src={require('./assets/React_logo.png')}
						height={100}
						textAlign="left"
						display="inline-block"
						style={{ margin: '0 1rem' }}
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						GraphQL in Every Language
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						by Jon Wong, Staff Software Engineer at Coursera
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						GraphQL in Every Language
					</Heading>
					<Table>
						<TableBody>
							<TableRow>
								{['java', 'graphql-java'].map((name, i) => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>

							<TableRow>
								{['ruby', 'graphql-ruby'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['javascript', 'Apollo'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['.NET', 'Hot Chocolate'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['scala', 'Sangria'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['elixir', 'Absinthe'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['python', 'Graphene'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
							<TableRow>
								{['rust', 'Juniper'].map(name => (
									<TableItem
										lineHeight={1.5}
										textColor="primary"
										textAlign="left"
									>
										{name}
									</TableItem>
								))}
							</TableRow>
						</TableBody>
					</Table>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						The GraphQL developer experience
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						by Danielle Man, Engineering Manager at Apollo
					</Text>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						The GraphQL developer experience
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor={greyFade}
						textAlign="left"
					>
						Teams often make the case for adopting GraphQL for its technical
						merits
					</Text>
					<List ordered>
						{[
							'Avoid over fetching data',
							'Fewer client/server round trips',
							'Smaller payload'
						].map(message => (
							<ListItem textColor="primary">{message}</ListItem>
						))}
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						The GraphQL developer experience
					</Heading>
					<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
						<BlockQuote>
							<Quote>productivity boost at all levels in the stack</Quote>
							<Cite textColor={greyFade}>Danielle Mann</Cite>
							<Text textColor={greyFade} textSize={20}>
								Senior Engineering at Apollo
							</Text>
						</BlockQuote>
					</Slide>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading
						size={6}
						lineHeight={1.2}
						textColor="secondary"
						textAlign="left"
						caps
					>
						The GraphQL developer experience
					</Heading>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Introspection gives us documentation without writing any code
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Code gen tools can generate type definitions, queries, mutations,
						etc. based off of the schema
					</Text>
					<Text
						transition={['fade']}
						lineHeight={1.2}
						textColor="primary"
						textAlign="left"
					>
						Intellisense for GraphQL queries and mutations in IDEs
					</Text>
				</Slide>

				<References />

				<Slide transition={['none']} bgColor="tertiary" textColor="primary">
					<Image src={require('./assets/graphql-roadmap.png')} />
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Enums
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/enums.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Alias
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/aliasquery.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Alias
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/aliasqueryres.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Alias
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/alias.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="secondary" textAlign="left" caps>
						Alias
					</Heading>
					<CodePane
						lang="jsx"
						source={require('./examples/aliasres.example')}
						margin="20px auto"
						overflow="overflow"
						textSize="20px"
					/>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="primary" textAlign="left" caps>
						TAKEAWAYS FROM GRAPHQL SUMMIT
					</Heading>
					<List>
						<ListItem>Service discovery</ListItem>
						<ListItem>Meshing API's together</ListItem>
						<ListItem>Creating federations</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<Heading size={6} textColor="primary" textAlign="left" caps>
						GRAPHQL in UIP
					</Heading>
					<List>
						<ListItem>GraphQL Server with a connected database</ListItem>
						<ListItem>
							GraphQL Server as a layer in front of current apis used in Vault
						</ListItem>
						<ListItem>Connects them all with one GraphQL API</ListItem>
						<ListItem>
							Hybrid approach with connected database and communicates with
							external apis
						</ListItem>
						<ListItem>Cost effective</ListItem>
					</List>
				</Slide>

				<Slide transition={['fade']} bgColor="tertiary" textColor="primary">
					<BlockQuote>
						<Quote>Example Quote</Quote>
						<Cite>Author</Cite>
					</BlockQuote>
				</Slide>
			</Deck>
		);
	}
}
