
import Formularios from './componenets/Formularios';
import MyAppBar from './componenets/MyAppBar';
import Image1 from './shared/images/Image1';
import './App.css';

function App() {
  return (
    <div className="App">    
     <MyAppBar/>  
      <div className="container">
        
        <Formularios />
        <Image1 />   
     </div>
     

    </div>
  );
}

export default App;
