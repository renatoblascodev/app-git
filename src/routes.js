import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

const Rotas = () => {

    return(
    <Router>    
      <Routes>
        {/* Define your routes here */}
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repositorio/:repositorio" element={<Repositorio />} />
        {/* <Route path="*" element={<Erro />} />  */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>

   )
}

export default Rotas;

