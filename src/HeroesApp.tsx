import { AppRouter } from './components/routers/AppRouter';
import { AuthProvider } from './context/AuthProvider';

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
