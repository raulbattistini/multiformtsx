import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as C from "./style";
import { useForm, FormActions} from "../../context/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import {
    Formik,
    Form,
    Field
  } from 'formik';
export const FormStep1 = () => {
  const navigate = useNavigate();
  const {dispatch } = useForm(); 
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,

    });      // eslint-disable-next-line
  }, []);

  const handleNextStep = (name: string) => {
      navigate("/step2");
      dispatch({
        type: FormActions.setName,
        payload: (name) //acessar o valor que se coloca no input
      })
      console.log(name)
  };
  const schema = Yup.object().shape({
    name: Yup.string().trim().required(),
  });

  return (
    <Theme>
      <C.Container>
        <C.p>Passo 1/3</C.p>
        <C.h1>Vamos começar com seu nome</C.h1>
        <C.p>Preencha o campo abaixo com seu nome completo.</C.p>

        <C.hr />
        <Formik
          initialValues={{
            name: ""
          }}
          onSubmit={(state) => {
            handleNextStep(state.name)
          }}
          validationSchema={schema}
          enableReinitialize
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form action="submit" autoComplete="off">
                <Field
                  type="text"
                  value={values.name} 
                  onChange={handleChange}
                  name="name"
                />
                <C.button type="submit">Próximo</C.button>
              </Form>
            );
          }}
        </Formik>
      </C.Container>
    </Theme>
  );
};
