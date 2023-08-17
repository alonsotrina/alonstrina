/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useShow } from "../../hooks/useShow";
import { Link, useNavigate } from 'react-router-dom';
import { PageLogin, ColLeft, ColRight } from "./styled"
import Field from "../../components/Field/Index"
import FieldIcon from "../../components/FieldIcon/Index"
import Loading from "../../components/Loading/Index"
import Dialog from '../../components/Modal/Action/Index';
import Button from 'react-bootstrap/Button';

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
    errors.email = "campo obligatorio";
  } else if (!regexEmail.test(email.trim())) {
    errors.email = "campo 'Email' es incorrecto";
  }

  if (!password.trim()) {
    errors.password = "campo obligatorio";
  }

  return errors
}


const index = () => {
  const navigate = useNavigate();
  const { handleLogin, setLoading, setResponse, response, loading } = useContext(AuthContext);
  const [msg, setMsg] = useState(initalMsg)

  // FORM
  const {
    form,
    errors,
    setErrors,
    handleBlur,
    handleChange,
  } = useForm(initalForm, validationsForm)

  const Modal = useShow()
  const ShowPass = useShow()


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
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/login`, payload);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('email', form.email);
        handleLogin(response.data.token);
        setResponse('Login Successful:');
        navigate('/dashboard');
      } catch (error) {
        console.error("Login Error:", error);
        setResponse('Login Error:');
        Modal.handleShow();
        setMsg({ type: 'danger', msg: `${error.message}, inténtelo más tarde...` });
      }

      setLoading(false);
    }
  };


  return (
    <PageLogin>
      <ColLeft>
        <form onSubmit={handleSubmit}>
          <h4 className="fs-4 fw-bold mb-4">Iniciar sesión</h4>
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
            <Button type="submit" variant="dark">Iniciar sesión</Button>
          </div>

          <Link to="/register" className="link">registarte</Link>
        </form>

      </ColLeft>

      {/* background css */}
      <ColRight />


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
    </PageLogin>
  );
};

export default index;
