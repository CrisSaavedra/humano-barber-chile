import { useEffect } from "react";

function Products() {

    useEffect(() => {
        const sectionElement = document.querySelector("#sectionProducts");

        const top = sectionElement?.getBoundingClientRect().top;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
           
            if(!sectionElement) return;
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
            name: "HIGH SHEEN",
            image: "src/assets/product-1.png",
            width: 100,
            decription: "Pomada de alto brillo en base agua",
        },
        {
            name: "HIGH SHEEN",
            image: "src/assets/prod-2.png",
            width: 100,
            decription: "Pomada de alto brillo en base agua",
        },
        {
            name: "HIGH SHEEN",
            image: "src/assets/product-1.png",
            width: 100,
            decription: "Pomada de alto brillo en base agua",
        },
        {
            name: "HIGH SHEEN",
            image: "src/assets/prod-2.png",
            width: 100,
            decription: "Pomada de alto brillo en base agua",
        },
    ];

    const showImages = listOfProducts.map((product, index) => {

        if (index % 2 === 0) {
            return (
                <div id="left" className={"flex px-10 align-middle my-5 justify-cente gap-10"} key={index+ product.name} >
                    <img src={product.image} alt={product.name} width={product.width} className="hover:brightness-125 transition" />
                    <div className="flex  flex-col  justify-center items-center gap-5">
                        <p className="font-thin text-white font-antonio md:text-xl">{product.name}</p>
                        <p className="text-center text-zinc-500">{product.decription}</p>
                    </div>
                </div>
            );
        }else{
            return (
                <div id="right" className="flex px-10 align-middle my-5 justify-cente gap-10"  key={index+ product.name}>
                    <div className="flex  flex-col  justify-center items-center gap-5">
                        <p className="font-thin text-white font-antonio md:text-xl">{product.name}</p>
                        <p className="text-center text-zinc-500">{product.decription}</p>
                    </div>
                    <img src={product.image} alt={product.name} width={product.width} className="hover:brightness-125 transition" />
                </div>
            );
        }
    })


    return (
        <>
            <section id="sectionProducts" className=" flex flex-col items-center bg-black py-10">
                <h3  className="border-b border-yellow font-antonio text-white text-3xl font-thin">Nuestros productos</h3>
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