
import Messenger from './components/Messenger'

import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId='873907604161-8vm61pqot6oboe884fnj0f48u9nncdj6.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider  clientId={clientId}>
      <AccountProvider>
         <Messenger/> 
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
