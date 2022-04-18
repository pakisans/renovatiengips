import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import References from "./Pages/References/Referenes";
import Navigation2 from "./Components/Layout/Navigation/Navigation2";
import Quote from "./Pages/Quote/Quote";
import SingleWork from "./Pages/Services/SingleWork";
import Footer from "./Components/Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import strings from "./localization";
import { changeLanguage } from "./Components/Slices/LanguageSlice";
import { getLanguageFromLocalStorage } from "./Components/Base/LocalStorage";

function App() {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();


  useEffect(() => {
    strings.setLanguage(getLanguageFromLocalStorage())

  },[language])

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<References />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/services/works' element={<SingleWork />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
