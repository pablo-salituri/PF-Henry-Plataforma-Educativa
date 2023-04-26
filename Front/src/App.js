import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/landing";
import HomeStudent from "./Components/Home/homeStudent";
import Form from "./Components/Forms/forms";
import FormProfesor from "./Components/Forms/formProfesor";
import Classroom from "./Components/Classroom/Classroom";
import FormSubject from "./Components/Forms/formSubject";
import Detail from "./Components/Detail/detail";
import Carrito from "./Components/Carrito/carrito";
import AppStripe from "./Components/MercadoPago/stripe/appStripe";
import Alumnos from "./Components/Alumnos/alumnos";
import Login from "./Components/Landing/Login/Login";
import Caracteristicas from "./Components/Landing/Caracteristicas/Caracteristicas";
import Contacto from "./Components/Landing/Contacto/Contacto";
import EditarLanding from "./Components/Editar/Landing/EditarLanding";
import ProtectedRoutes from "./Components/ProtectedRoute/protectedRoute";
import axios from "axios";
import { MiPerfil } from "./Components/MiPerfil/miPerfil";
/* axios.defaults.baseURL = "https://servidor-plataformae2.onrender.com"; */
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/home" element={<HomeStudent />} />
          <Route exact path="/Cursos" element={<Classroom />} />
          <Route exact path="/Materias" element={<Classroom />} />
          <Route exact path="/alumnos" element={<Alumnos />} />
          <Route exact path="/Aulas/materia/:id" element={<Detail />} />
          <Route exact path="/formAlumno" element={<Form />} />
          <Route exact path="/formProfesor" element={<FormProfesor />} />
          <Route exact path="/formsubject" element={<FormSubject />} />
          <Route exact path="/carrito" element={<Carrito />} />
          <Route exact path="/Stripe" element={<AppStripe />} />
          <Route exact path="/miPerfil" element={<MiPerfil />} />
          <Route exact path="/editarUsuario" element={<EditarLanding />} />
        </Route>

        <Route exact path="/" element={<Landing />} />
        <Route exact path="/sobreNosotros" element={<Caracteristicas />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
