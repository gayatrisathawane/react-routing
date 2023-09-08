import ReactDOM from 'react-dom/client';
import Home from './view/home/Home';
import Contact from './view/contact/Contact';
import About from './view/about/About';


function App()
{
  
    
  const path =window.location.pathname;
    switch(path){
      case "/":
         return <Home/>
      case "/about":
         return <About/>
      case "/contact":
          return <Contact/>
      default :
         return <h2>Invalid Path</h2>

    }
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

<App/>

  </>
 
);


