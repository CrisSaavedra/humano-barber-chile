import './App.css'
import HomeLayout from './layouts/homeLayout'
import { useEffect, useState } from "react";

function App() {

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Duración de la animación en milisegundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className={`app ${isAnimating ? "dark-mode" : ""}`}>
        <HomeLayout />
      </main>
    </>
  )
}

export default App
