import Navbar from "@/components/ui/navbar";
import SectionOne from "./sectionOne";

function HomeLayout() {


    return (
        <>
            <main className="font-kanit">
                <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full  z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                <Navbar />
                <SectionOne />

                <section className="h-dvh relative">
                    <div className="h-dvh bg-[url('src/assets/picture-1.jpg')] bg-cover bg-center absolute w-full z-[-1]"></div>
                    hola
                </section>
            </main>
        </>
    );
}

export default HomeLayout;