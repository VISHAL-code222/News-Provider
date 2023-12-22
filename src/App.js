import React, { useState } from 'react';
import NavBar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = "39f1b98ef93b417fbb2984558bf3ae19";
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

