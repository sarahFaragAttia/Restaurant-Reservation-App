import logo from './logo.svg';
import './App.css';
import NamesList from './component/NamesList'
import InputNames from './component/InputName'
import NameFoodList from './component/NameFoodList';


function App() {


  return(
  <div className='container vh-100 '>
    <div className='row secOne   mt-4 ms-4 vh-100  gap-2 justify-content-center'>
      <div className='col-3 p-3 mt-4 ms-2  border-end d-flex  flex-column  border-black'>
      <h2 className='m-3'>Clients'Names</h2>
      <NamesList/>
     
      
     
      </div>
      <div className='col-6 p-3 mt-4 ms-2  '>
      <h2 className='m-3'>Food List</h2>
      
        <NameFoodList/>
        

      </div>
  </div>
  <InputNames/>
</div>
   
  )}
  
export default App;