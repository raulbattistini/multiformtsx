import AppRouter from './router';
import { FormProvider } from './context/FormContext';

const App = () => {
  return (
    <FormProvider>
      <AppRouter />
    </FormProvider>
  );
}

export default App;