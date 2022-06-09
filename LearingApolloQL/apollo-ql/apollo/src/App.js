import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
const EXCHANGE_RATES2 = gql`
   query Getrates {
    rates {
      currency
      rate
    }
  }
`;

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `
  })
  .then(result => console.log(result));

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
  
function ExchangeRates2({ onselecter }) {
  const { loading, error, data } = useQuery(EXCHANGE_RATES2);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name='rates' onChange={onselecter}>
      {data.rates.map((rate) => (
        <option key={rate.id} value={rate.rate}>
          {rate.rate}
        </option>
      ))}
    </select>
  );
}
function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My Apollo app</h2>
      <ExchangeRates/>
    </div>
    </ApolloProvider>
  );
}

export default App;
