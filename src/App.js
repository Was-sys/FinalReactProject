import logo from './logo.svg';
import './App.css';
import  {Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Contactpage from "./Components/Contactpage";
import About from './Components/About';
import Collection from './Components/Collection';

function App() {
  return (
    <>
    <div style={{backgroundColor:"YELLOW"}}> <b><center>THE BEST PLACE FOR YOUR STYLES     ....SHOP NOW.....    Email : fashionplus.lk</center></b></div>
    
     <Route path="/"exact component={Homepage}/>
     <Route path="/Contact"exact component={Contactpage}/>
     <Route path="/About"exact component={About}/>
      <Route path='/collection' exact component={Collection}/>
    
    
    </>
  );
}



export default App;

