import { useNavigate, Link } from 'react-router-dom';
import * as C from './style';
import { useForm, FormActions } from '../../context/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            console.log(state);
        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <C.p>Passo 3/3</C.p>
                <C.h1>Legal {state.name}, onde te achamos?</C.h1>
                <C.p>Preencha com seus contatos para conseguirmos entrar em contato.</C.p>

                <C.hr/>

                <C.label>
                    Qual seu e-mail?
                    <C.input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </C.label>

                <C.label>
                    Qual seu GitHub?
                    <C.input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </C.label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <C.button onClick={handleNextStep}>Finalizar Cadastro</C.button>
            </C.Container>
        </Theme>
    );
}
