import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, FieldArray, Field, ArrayHelpers } from "formik";
import * as C from "./style";
import { useForm, FormActions } from "../../context/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    } // eslint-disable-next-line
  }, []);

  const handleNextStep = (level: number) => {
    navigate("/step3");
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
    console.log(level);
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <C.p>Passo 2/3</C.p>
        <C.h1>{state.name}, o que melhor descreve você?</C.h1>
        <C.p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </C.p>

        <C.hr />
        <Formik
          initialValues={{ level: 3 }}
          onSubmit={(state) => {
            handleNextStep(state.level);
          }}
        >
          {({ values, errors, touched, handleChange }) => {
            return (
              <Form>
                <Field name="level" as="select">
                  <option
                    value="0"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                    defaultValue="0"
                  >
                    Iniciante
                  </option>

                  <option
                    value="1"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                  >
                    Programador
                  </option>
                </Field>
                <Link to="/" className="backButton">
                  Voltar
                </Link>
                <C.button type="submit"
                >
                Próximo
                </C.button>
              </Form>
            );
          }}
        </Formik>
      </C.Container>
    </Theme>
  );
};
