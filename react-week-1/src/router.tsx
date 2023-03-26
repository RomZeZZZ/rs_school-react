import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './routes/root';
import Error from './routes/error';
import About from './routes/about';
import Header from './components/header';
import SignUp from './routes/form';
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
