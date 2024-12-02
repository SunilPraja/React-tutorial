import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarScroll from './Components/Header/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import '../src/Assets/css/Style.css';
import AlertMsg from './Components/AlertMsg';
import { Routes, Route } from "react-router";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, showAlert] = useState(null);

  const showAlertMsg = (msg, type) => {
    showAlert({ msg, type });
    setTimeout(() => showAlert(null), 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      showAlertMsg("Dark mode is enabled", "success");
      document.body.classList.add('bg-dark');
    document.body.classList.remove('bg-light');
    } else {
      showAlertMsg("Light mode is enabled", "info");
      document.body.classList.add('bg-light');
      document.body.classList.remove('bg-dark');
    }
  };

  return (
    <>

      <NavbarScroll
        title="textutils"
        homeTitle="Home"
        aboutTitle="About"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        alert={alert}
      />
      <AlertMsg alert={alert} />
      {/* <TextForm heading="Text Transform Box" darkMode={darkMode} showAlertMsg={showAlertMsg} /> */}
      {/* <About heading="About Us" darkMode={darkMode} /> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route exact path="/" element={<TextForm heading="Text Transform Box" darkMode={darkMode} showAlertMsg={showAlertMsg} />} />
          <Route exact path="About" element={<About heading="About Us" darkMode={darkMode} />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
