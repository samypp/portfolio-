
import { useEffect } from 'react';
import Footer from './assets/Components/Footer';
import Navbar from './assets/Components/navbar';
import UseTheme from './hooks/UseTheme';
import AppRouter from './Routes/AppRouter';


const App = () => {
  const {theme} = UseTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme=== "dark");
  }, [theme]);
  return (
    <div 
    className="flex flex-col min-h-screen font-serif bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow p-4" >
     
      
      <Navbar/>
       <AppRouter/>
      <Footer/>
   
     
       

      
    </div>
  );
};

export default App;
