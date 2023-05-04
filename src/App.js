import Header from './components/header/Header';
import SubHeader from './components/header/SubHeader';
import Productes from './components/Productes';
function App() {
  // return react.createElement('div',{},"hii"); 
  return(
    <div>
      <Header></Header>
      <SubHeader></SubHeader>
       <Productes></Productes>
    </div>
  )
}

export default App;
