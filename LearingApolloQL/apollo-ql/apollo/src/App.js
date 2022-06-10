import React, { useState } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.graphcms.com/v2/cl41eibrh34k601xs2ph960ld/master',
  cache: new InMemoryCache()
});

// query
const vocabs_query = gql`
  query  Vocabs{
    vocabs{
      id
      vocab 
      meaning
      rates
    }
  }

`;

function Vocabs_Q() {
  const { loading, error, data } = useQuery(vocabs_query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : ${error.message} </p>;

  return data.vocabs.map(({ id, vocab, meaning, rates }) => (
    <div key={id}>
      <p >
        {vocab} : {meaning} : {rates}

      </p>
    </div>
  ));
}
//find




const Vocabs_Find = ({ text = "" }) => {

  const vocabs_find = gql`
  query  Vocabs_find{
    vocabs (where: {_search: "${text}"}){
      id
      vocab 
      meaning
      rates
    }
  }

`;
  const { loading, error, data } = useQuery(vocabs_find);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :  </p>;

  return (
    data && data.vocabs.map(({ id, vocab, meaning, rates }) => (
      <div key={id}>
        <p >
          {vocab} : {meaning} : {rates}

        </p>
      </div>
    ))
  );
}

// Mutation
const Creat_vacab = ({ vacab = "", mean = "", rates = "" }) => {

  const create_vacab = gql`

mutation MyMutation {
  createVocab(data: {meaning: "${mean}", rates: "${rates}", vocab: "${vacab}"}) {
    meaning
    rates
    vocab
  }
 
}



`;
  const { data, loading, error } = useMutation(create_vacab);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :  </p>;

  return (
    data.vocabs.map(({ id, vocab, meaning, rates }) => (
      <div key={id}>
        <p >
          {vocab} : {meaning} : {rates}
        </p>
      </div>
    ))
  );
}



function App() {
  const [vacabshow, Setvocabshow] = useState("");
  const [Newvocab, Setnewvacab] = useState("");
  const [Newmean, Setnewmean] = useState("");
  const [Newrate, Setnewrate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Create New`)
  }

  return (
    <ApolloProvider client={client}>
      <div className='center'>
        <h2>Query</h2>
        <Vocabs_Q />

        <div className='containee'>
          <h2>Find</h2>
          <input type="text" placeholder="find vacab" value={vacabshow} onChange={(e) => Setvocabshow(e.target.value)} />
          <Vocabs_Find text={vacabshow} />
        </div>
        <div className='containee'>
          <h2>Create</h2>
          <form onSubmit={handleSubmit} >
            <div className='contain-create'>
              <label>New vocab:
                <input type="text" placeholder="create vacab" value={Newvocab} onChange={(e) => Setnewvacab(e.target.value)} />
              </label>
              <label>New mean:
                <input type="text" placeholder="create vacab" value={Newmean} onChange={(e) => Setnewmean(e.target.value)} />
              </label>
              <label>New rate:
                <input type="number" placeholder="create vacab" value={Newrate} onChange={(e) => Setnewrate(e.target.value)} />
              </label>
            </div>

            <button onClick={Creat_vacab}
            > Submit  </button>
          </form>
        </div>

      </div>
    </ApolloProvider>
  );
}

export default App;