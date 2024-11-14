import { useEffect } from "react";
import shampoo from "@/assets/new-products/shampoo.png";
import accondicionador from "@/assets/new-products/acondicionador.png";
import cremaOne from "@/assets/new-products/cera-muse.png";
import cremaTwo from "@/assets/new-products/cera-clay.png";
import pomada from "@/assets/new-products/pomada.png";
import aceiteForta from "@/assets/new-products/aceite-fortalecedor.png";
import aceiteEscen from "@/assets/new-products/aceite-escencial.png";


function Products() {

    useEffect(() => {
        const sectionElement = document.querySelector("#sectionProducts");

        const top = sectionElement?.getBoundingClientRect().top;
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (!sectionElement) return;
            if (scrollTop + 1000 > top!) {
                sectionElement?.classList.add("leftToRight");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup del listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const listOfProducts = [
        {
            name: "Shampoo cabello D-Tox",
            image: shampoo,
            width: 200,
            height: 220,
            decription: "Shampoo de uso diario para todo tipo de cabello, ideal para pieles sensibles.",
            positon: 'center'
        },
        {
            name: "Bálsamo cabello D-Tox",
            image: accondicionador,
            height: 220,
            width: 200,
            decription: "Acondicionador, para todo tipo de cabellos. No engrasa.",
            positon: 'center',
        },
        {
            name: "Hybrid Mousse",
            image: cremaOne,
            height: 220,
            width: 200,
            positon: 'center',
            decription: "Cera para peinar cabellos finos y ondulados, otorgando volumen y flexibilidad durante todo el día.",
        },
        {
            name: "Hybrid Clay",
            image: cremaTwo,
            height: 220,
            width: 200,
            positon: 'center',
            decription: "Cera para peinar compatible con cabellos grasos, asegura un peinado con acabado mate que te acompañará todo el día.",
        },
        {
            name: "Pomada para barba",
            image: pomada,
            height: 190,
            width: 200,
            positon: 'center',
            decription: "Dale forma a tu barba y mantenla ordenada durante todo el día, con esta pomada para peinar.",
        },
        {
            name: "Aceite Fortalecedor para barba",
            image: aceiteForta,
            height: 280,
            width: 200,
            positon: '50% 110%',
            decription: "Aceite de uso diario que estimula el crecimiento sano de la barba y refuerza el brillo de esta.",
        },
        {
            name: "Aceite Esencial para barba",
            image: aceiteEscen,
            height: 265,
            width: 200,
            positon: '50% 110%',
            decription: "Aceite de acción hidratante, ayuda a eliminar la molesta caspa y picazón de la barba",
          
        },


    ];

    const showImages = listOfProducts.map((product, index) => {

        if (index % 2 === 0) {
            return (
                <div id="left" className={"flex justify-center gap-2 align-middle my-5 px-5 "} key={index + product.name} >
                    <div style={{ width: product.width, height: '220px', backgroundImage: `url(${product.image})`, backgroundSize: product.height, backgroundRepeat: 'no-repeat', backgroundPosition: product.positon }} className="flex justify-center items-center col-2">
                    </div>
                    <div className="flex  flex-col  justify-center items-center gap-5  w-[90%] max-w-[600px]">
                        <p className="font-thin text-white font-antonio md:text-xl">{product.name}</p>
                        <p className="text-center text-zinc-500">{product.decription}</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="left" className={"flex justify-center gap-2 align-middle my-5 px-5 "} key={index + product.name} >
                    <div className="flex  flex-col  justify-center items-center gap-5  w-[90%] max-w-[600px]">
                        <p className="font-thin text-white font-antonio md:text-xl">{product.name}</p>
                        <p className="text-center text-zinc-500">{product.decription}</p>
                    </div>
                    <div style={{ width: product.width, height: '220px', backgroundImage: `url(${product.image})`, backgroundSize: product.height, backgroundRepeat: 'no-repeat', backgroundPosition: product.positon }} className="flex justify-center items-center col-2">
                    </div>
                </div>
            );
        }
    })


    return (
        <>
            <section id="sectionProducts" className=" flex flex-col items-center bg-black py-10">
                <h3 className="border-b border-yellow font-antonio text-white text-3xl font-thin">Nuestros productos</h3>
                <div className="mt-20 flex flex-col md:flex-row md:gap-2 flex-wrap gap-10 md:justify-center md:max-w-[1000px] ">
                    {
                        showImages
                    }
                </div>

            </section>
        </>
    );
}

export default Products;