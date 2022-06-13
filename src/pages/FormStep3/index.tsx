import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import * as C from "./style";
import { useForm, FormActions } from "../../context/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    } // eslint-disable-next-line
  }, []);

  const handleNextStep = (email: string, github: string) => {
    dispatch({
      type: FormActions.setEmail,
      payload: email
    });
    dispatch({
      type: FormActions.setGithub,
      payload: github
    });
    console.log(state)
  };
  const schema = Yup.object().shape({
    email: Yup.string().email().trim().required(),
    github: Yup.string().url().trim().required()
  });
  return (
    <Theme>
      <C.Container>
        <C.p>Passo 3/3</C.p>
        <C.h1>Legal {state.name}, onde te achamos?</C.h1>
        <C.p>
          Preencha com seus contatos para conseguirmos entrar em contato.
        </C.p>

        <C.hr />
        <Formik
          initialValues={{
            email: "",
            github: "",
          }}
          onSubmit={(state) => {
            handleNextStep(state.email, state.github);
            console.log(state)
          }}
          validationSchema={schema}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form>
                <Field
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Seu melhor email"
                  type="email"
                  name="email"
                />
                <Field
                  value={values.github}
                  onChange={handleChange}
                  placeholder="Seu Github"
                  type="url"
                  name="github"
                />
                <Link 
                to="/step2" 
                className="backButton"
                >
                Voltar
                </Link>
                <C.button type="submit">
                Finalizar Cadastro
                </C.button>
              </Form>
            );
          }}
        </Formik>
      </C.Container>
    </Theme>
  );
};
