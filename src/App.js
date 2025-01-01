/*import Accordion from "./components/Accordion";*/
/*import ImageSlider from "./components/ImageSlider/ImageSlider";*/
/*import { SliderData } from "./components/ImageSlider/SliderData";*/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
