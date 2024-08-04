// import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import React from 'react';
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ContactUsPage from "./pages/ContactUsPage";
import ErrorPage from "./pages/ErrorPage";
import SessionPage from "./pages/SessionPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage.js";
import ProductDescription from './pages/DescriptionPage.js';
import AdminDescriptionPage from "./pages/AdminDescriptionPage.js";

function App() {
  return (
    <>
      <BrowserRouter basename = {window.location.pathname || ""}>
        <Routes>
          <Route path = "/" element = {<LoginPage />} />
          <Route path = "/signin" element = {<Signup />} />
          <Route path = "/contact" element = {<ContactUsPage />} />
          <Route path = "/errorwhilelogin" element = {<ErrorPage />} />
          <Route path = "/sessionexpired" element = {<SessionPage />} />
          <Route path = "/profile" element = {<ProfilePage />} />
          <Route exact path = "/home" element = {<HomePage />} />
          <Route path="/description/:id" element={<ProductDescription />} />
          <Route path = "/editdesc" element = {<AdminDescriptionPage />} />
          <Route path="/*" element = {<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;