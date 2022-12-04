import './App.scss';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';
import Properties from './Components/Properties/Properties';
import HeroBanner from './Components/HeroBanner/HeroBanner';
import Testimonial from './Components/Testimonial/Testimonial';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return message;
    });
  }
});

const httpLink = createHttpLink({
  errorLink,
  uri: 'https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <HeroBanner />
        <Properties />
        <Testimonial />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
