import Navbar from "@/components/ui/navbar";
import SectionOne from "./sectionOne";

function HomeLayout() {


    return (
        <>
            <main className="font-kanit">
                <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                <Navbar />
                <section className="h-[67dvh] ">
                    <SectionOne />
                </section>
                <section className="h-dvh relative flex justify-center items-center">
                    <div className="h-dvh bg-[url('src/assets/picture-1.jpg')] bg-cover bg-center absolute w-full z-[-6] grayscale" ></div>
                    <main className="w-[85%] h-[90%] relative ">
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-[-5] opacity-85"></div>
                        <div className="text-white flex flex-col items-center justify-center w-full h-full font-antonio p-10">
                            <h3 className="text-2xl text-yellow font-medium">HUMANO BARBER CHILE</h3>
                            <p className="mt-10 text-center font-libre">En nuestro establecimiento no solo encontrarás un corte de cabello y un arreglo de barba impecable, sino que también te brindamos una experiencia única de relajación y diversión.</p>
                            <p className="mt-5 text-center font-libre">Además, en HumanoBarberChile creemos que la risa es la mejor medicina, por lo que siempre encontrarás un ambiente alegre y divertido que te hará sentir como en casa. Estamos seguros de que te encantará venir a visitarnos.</p>
                            <p className="mt-5 text-center font-libre">Te esperamos en nuestra barbería para que disfrutes de una experiencia única y diferente en la que saldrás con una sonrisa en el rostro y con una apariencia renovada.</p>

                            <p className="mt-5 text-center font-libre text-yellow">Te esperamos :)</p>
                        </div>

                    </main>
                </section>
            </main>
        </>
    );
}

export default HomeLayout;