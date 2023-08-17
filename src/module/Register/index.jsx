/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { PageRegister, ColLeft, ColRight } from "./styled"
import { useShow } from "../../hooks/useShow";
import { Link, useNavigate } from 'react-router-dom';
import Field from "../../components/Field/Index"
import Dialog from '../../components/Modal/Action/Index';
import Loading from "../../components/Loading/Index"
import Button from 'react-bootstrap/Button';
import FieldIcon from "../../components/FieldIcon/Index"

const initalForm = {
  email: '',
  password: '',
}

const initalMsg = {
  type: '',
  msg: '',
}

const validationsForm = (form) => {
  const {
    email,
    password
  } = form;

  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!email.trim()) {
    errors.email = "campo 'Email' obligatorio";
  } else if (!regexEmail.test(email.trim())) {
    errors.email = "campo 'Email' es incorrecto";
  }

  if (!password.trim()) {
    errors.password = "campo 'Nombre' obligatorio";
  }

  return errors
}


const index = () => {
  const navigate = useNavigate();
  const { setLoading, setResponse, response, loading } = useContext(AuthContext);
  const [msg, setMsg] = useState(initalMsg)

  // FORM
  const {
    form,
    errors,
    setForm,
    setErrors,
    handleBlur,
    handleChange,
  } = useForm(initalForm, validationsForm)

  const Modal = useShow()
  const ShowPass = useShow()

  // SUBMIT DATA REGISTER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validationsForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      const payload = {
        email: form.email,
        password: form.password,
      };
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/register`, payload);
        console.log("Login Successful:", response);
        setResponse('Login Successful:');
        Modal.handleShow()
        setMsg({ type: 'success', msg: 'Usuario registrado con éxito, te enviamos un correo de confirmación mientras tanto te redirigiremos al login...' })
        setTimeout(() => setResponse(false), 4000);
        setTimeout(() => navigate('/login'), 4000);

      } catch (error) {
        console.error("Login Unsuccessful Error:", error);
        setResponse('Login Error:');
        Modal.handleShow()
        setMsg({ type: 'danger', msg: 'Tenemos un problema, intentalo más tarde...' })
      }

      setLoading(false);
      reset()
    }
  };

  // RESET FORM
  const reset = () => {
    setForm(initalForm)
    setErrors({ error: "errorDefault" })
  }

  return (
    <PageRegister>
      {/* background css */}
      <ColLeft />

      <ColRight>
        <form onSubmit={handleSubmit}>
          <h4 className="fs-4 fw-bold mb-4">Registrate</h4>

          <Field
            type="email"
            label="Email"
            name="email"
            placeholder="Ingresa usuario o email"
            value={form.email}
            onChange={handleChange}
            handleBlur={handleBlur}
            validations={errors.email}
          />


          <FieldIcon
            type={ShowPass.show ? "text" : "password"}
            label="Password"
            name="password"
            placeholder="Ingresar contraseña"
            value={form.password}
            onChange={handleChange}
            handleBlur={handleBlur}
            validations={errors.password}
            ShowPass={ShowPass}
          />

          <div className="d-grid mt-4">
            <Button type="submit" variant="dark">Registrarse</Button>
          </div>

          <Link to="/login" className="link">Iniciar sesión</Link>
        </form>
      </ColRight>

      {loading && <Loading />}

      {response &&
        <Dialog
          close={Modal.handleHide}
          show={Modal.show}
          title={msg.type === 'success' ? '¡Listo!' : 'Lo siento'}
          msg={msg.msg}
          size="md"
          type={msg.type}
        />
      }
    </PageRegister>
  );
};

export default index;
