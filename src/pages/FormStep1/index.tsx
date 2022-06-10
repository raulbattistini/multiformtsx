import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as C from "./style";
import { useForm, FormActions } from "../../context/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import {
    Formik,
    Form,
    Field
  } from 'formik';
export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step2");
    } else {
      alert("Preencha os dados.");
    }
  };
  const schema = Yup.object().shape({
    fullname: Yup.string().required(),
  });
  const initialValues = {name: '' };
  return (
    <Theme>
      <C.Container>
        <C.p>Passo 1/3</C.p>
        <C.h1>Vamos começar com seu nome</C.h1>
        <C.p>Preencha o campo abaixo com seu nome completo.</C.p>

        <C.hr />
        <Formik
          initialValues={initialValues}
          onSubmit={handleNextStep}
          validationSchema={schema}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form action="submit">
                <C.label htmlFor="name"> Seu nome completo </C.label>
                <Field
                  type="text"
                  autoFocus 
                  values={state.name} //o values do formik não esta sendo inserido
                  onChange={handleChange}
                  name="name"
                  error={touched.name && Boolean(errors.name)}
                  helpertext={touched.name && errors.name} 
                />
                <C.button type="submit" onSubmit={handleNextStep}>Próximo</C.button>
              </Form>
            );
          }}
        </Formik>
      </C.Container>
    </Theme>
  );
};
