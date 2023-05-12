import { AuthContextProvider } from '@/contexts/auth.context';

const CoLayout = ({ children }) => {
  return (
    <AuthContextProvider>
      COLayout
      <br />
      {children}
    </AuthContextProvider>
  );
};

export default CoLayout;
