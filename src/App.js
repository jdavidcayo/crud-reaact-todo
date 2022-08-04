import { useState } from 'react'
import NavBar from './components/NavBar';
import Form from './components/Form';
import Tabla from './components/Table'

import 'bootswatch/dist/sandstone/bootstrap.min.css'

function App() {
  //Para controlar el refresh de la tabla
  const [bandera, setBandera] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [btnName, setBtnName] = useState('Add');
  const [id, setId] = useState(0);

  return (
    <div className="background">
        <NavBar />
        <div className="col-md-12">
          
            <Form bandera={bandera} setBandera={ setBandera } 
                  name={name} setName={ setName } description={description} setDescription={setDescription} 
                  btnName={btnName} setBtnName={setBtnName} 
                  id={id} setId={setId} />
            <Tabla bandera={bandera} setBandera={ setBandera } 
                  name={name} setName={ setName } description={description} 
                  setDescription={setDescription} btnName={btnName} setBtnName={setBtnName} 
                  id={id} setId={setId} />
          
        </div>
    </div>
)
}

export default App;
