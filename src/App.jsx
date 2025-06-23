import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
   const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalUrl)}`
      );
      setShortUrl(res.data);
    } catch (err) {
      alert("Failed to shorten URL");
    }
  };


  return (
    <div id='main'>
      <Navbar/>

      <Main onSubmit={handleSubmit}/>

    </div>
  )
}

export default App
