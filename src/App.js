import './App.css';
import Navbar from './Component/Navbar';
import Progressbar from './Component/Progressbar';


function App() {
   return (
    <div className="App">  
      <Navbar />
        <div className = 'Container'>
          <h1>
            Cari Cari 
          </h1>
          <p>
            Live from their sofa to yours. get closer to your favorite
            artists, and never miss out.
          </p>
        </div>      
        <div className = 'progressbar'>
        <Progressbar />     
        </div>
    </div>
    
  );
}

export default App;





