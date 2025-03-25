import { Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Works from './Components/Works';
import Contact from './Components/Contact';
import { Projects } from './Projects/Projects';
//import { Create } from './Projects/Create';
import { Read } from './Projects/Read';
import { Update } from './Projects/Update';
import { Add } from './Projects/Add';
import { CreateUser } from './Projects/Createuser';
import TestCompt from './Projects/Testcomp';
import { CreateProject } from './Projects/Createproject';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Works' element={<Works/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Route>
        <Route path='/projects/list' element={<Projects/>}/>
        {/* <Route path='/projects/create' element={<Create/>}/> */}
        <Route path='/projects/create' element={<CreateProject/>}/>
        <Route path='/projects/read/:id' element={<Read/>}/>
        <Route path='/projects/update/:id' element={<Update/>}/>
        <Route path='/projects/add' element={<Add/>}/>
        <Route path='/projects/createuser' element={<CreateUser/>}/>
          <Route path='/Test' element={<TestCompt/>}/>
      </Routes>
    </>
  );
}

export default App;
