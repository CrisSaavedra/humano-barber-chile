import { useEffect, useState } from "react";


function Navbar() {

    const [background, setBackground] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Distancia desplazada desde la parte superior
            if (scrollTop > 1) { // Cambia 50 por el valor de desplazamiento deseado
                setBackground("bg-black opacity-85"); // Deja esto como el fondo que quieras
            } else {
                setBackground("");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup del listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);





    return (
        <>
            <nav  className={"sticky top-0 z-10 w-full h-[100px] py-3 px-9 flex justify-between transition duration-700 " + background} >
                <img src="src/assets/logo.webp" alt="logo" style={{ width: "80px", height: "80px" }} />
                <button className="pt-2">
                    <svg width="45" enableBackground="new 0 0 12 12" id="burger" version="1.1" viewBox="0 0 12 12" ><g><rect fill="#cecece" height="1" width="11" x="0.5" y="5.5"></rect><rect fill="#cecece" height="1" width="11" x="0.5" y="2.5"></rect><rect fill="#cecece" height="1" width="11" x="0.5" y="8.5"></rect></g></svg>
                </button>
            </nav>
        </>
    );
}

export default Navbar;