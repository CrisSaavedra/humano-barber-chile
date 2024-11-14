import { useEffect } from "react";

function Reviews() {
    useEffect(() => {
        // Crear el script de Elfsight y añadirlo al documento
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        script.onload = () => {
            // Configuración del widget de Elfsight
            const elfsightApp = document.createElement("div");
            elfsightApp.className = "elfsight-app-68654e23-6b4a-419a-8ac6-254114274a89";
            // if (document.getElementById("elfsight-container")!.children.length < 0)
            document.getElementById("elfsight-container")!.appendChild(elfsightApp)
        };
        document.body.appendChild(script);

        // document.querySelector('#eapps-google-reviews-68654e23-6b4a-419a-8ac6-254114274a89 > div > a')!.classList.add('hidden');

        return () => {
            // Limpiar el script cuando se desmonte el componente
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div id="elfsight-container"></div>
        </div>
    )

}

export default Reviews;