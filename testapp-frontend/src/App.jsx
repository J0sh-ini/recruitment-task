import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [status, setStatus] = useState(null);

  
  const apiCall = async (mail,password) => {
    const url = 'http://localhost:8000/api/login';
    const payload = {
      mail,
      password
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStatus(data.message);
      })
      .catch((error) => {
        setStatus(`Fetch error: ${error}`);
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Login setMail={setMail} setPassword={setPassword} mail={mail} password={password} status={status} onSubmit={apiCall} />
    </div>
    
  );
}

export default App;