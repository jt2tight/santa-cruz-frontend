import './App.css';
import SantaCruzApp from './Containers/SantaCruzApp/SantaCruzApp';
import { AuthContext, AuthContextProvider } from './store/auth-context';
import Footer from './Components/Footer/Footer';
import { useEffect, useContext } from 'react';




function App() {
  const authCtx = useContext(AuthContext);



  const LoadData = () => {
    const loggedInUser = localStorage.getItem('user');
    const loggedInEmail = localStorage.getItem('userEmail');
    const loggedInToken = localStorage.getItem('userToken');
    console.log(loggedInUser)

    if(loggedInUser){
      authCtx.login(loggedInToken, loggedInUser, loggedInEmail)
  }



}

  useEffect(()=>{
    LoadData();
  }, [])

  
  return (
    <AuthContextProvider>
    <div className="App">
      <SantaCruzApp />
      <Footer />
    </div>
  </AuthContextProvider>
  );

}

export default App;
