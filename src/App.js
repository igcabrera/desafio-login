import { useState } from "react";
import Boton from "./components/boton/boton";
import Input from "./components/input/input";

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container center">
    <h1 className="mb-5 mt-5">Formulario</h1>
      <div className="form-group">
        <Input
          nombre={nombre}
          setNombre={setNombre}
          password={password}
          setPassword={setPassword}
        />
        {password === '252525' ? <Boton /> : null}
       </div>
    </div>
  );
}

export default App;
