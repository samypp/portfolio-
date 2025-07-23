
import { useEffect } from 'react';
import Footer from './assets/Components/Footer';

import UseTheme from './hooks/UseTheme';
import AppRouter from './Routes/AppRouter';
import Navbar from './assets/Components/Nav';




const App = () => {
  const {theme} = UseTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme=== "dark");
  }, [theme]);
  return (
    <div className="flex flex-col min-h-screen font-serif bg-pink-200 dark:bg-green-200 text-green-900 dark:text-pink-900 shadow p-4 ">

      
  <Navbar/>
       <AppRouter/>
      <Footer/>
   
     
       

      
    </div>
  );
};

export default App;
