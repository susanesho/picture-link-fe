import logo from './logo.svg';
import './App.css';
import {Container, GlobalStyles} from './App.style'
import {Upload} from './components/upload/upload'
import { useState } from 'react';
import {ImagePreview} from './components/ImagePreview/ImagePreview'

function App() {
  const [fileUrl, setFileUrl] = useState()
  const handleUploadChange = (file) => {
   const url =  URL.createObjectURL(file)

    setFileUrl(url)
  }

  return (
    <Container>
      <GlobalStyles />
      <Upload onChange={handleUploadChange} />

      <ImagePreview  src={fileUrl} />
    </Container>
  );
}

export default App;
