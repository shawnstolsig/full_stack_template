import React from 'react';
import axios from 'axios'

function App() {
  // some state for testing response from backend
  const [message, setMessage] = React.useState('Init')

  // on initial render, retrieve message from backend
  React.useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/v1/`,
      data: {},
      headers: {},
    })
    .then(response => {
      setMessage(response.data.message)
    })
    .catch(error => { console.log(error) })
  }, [])

  return (
    <div>
      <h1>Hello world.</h1>
      {process.env.REACT_APP_API_URL
        ? <p>Using development api url</p>
        : <p>Using production api url</p>
      }
      <h2>From backend: {message}</h2>
    </div>
  );
}

export default App;
