
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Post from "./Components/Post"
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
    <main>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
     </Routes>
    </main>
  );
}

export default App;
