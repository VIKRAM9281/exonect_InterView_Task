import { Route, Routes } from 'react-router-dom';
import './App.css';
import ApiDataTable from './Components/ApiTableData';
import RegsiterPage from "./Components/RegisterForm"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ApiDataTable/>}/>
        <Route path='/register' element={<RegsiterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
