import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Layout from "./pages/Layout";
// above we have imported the pages as well as the router dependencies



// we will mention the routes here just on the first level
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="work" element={<Work/>} />
          <Route path="contactUs" element={<Contact/>} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
