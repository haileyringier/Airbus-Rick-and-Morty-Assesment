import './App.css';
import Overview from './components/Overview';
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Overview />
    </ApolloProvider>
  );
};

export default App;
