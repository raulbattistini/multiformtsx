import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { useForm, FormActions } from '../../context/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <C.p>Passo 1/3</C.p>
                <C.h1>Vamos começar com seu nome</C.h1>
                <C.p>Preencha o campo abaixo com seu nome completo.</C.p>

                <C.hr/>

                <C.label>
                    Seu nome completo
                    <C.input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </C.label>

                <C.button onClick={handleNextStep}>Próximo</C.button>
            </C.Container>
        </Theme>
    );
}
