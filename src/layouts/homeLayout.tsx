import Navbar from "@/components/ui/navbar";
import SectionOne from "../pages/sectionOne";
import SectionTwo from "@/pages/sectionTwo";

function HomeLayout() {


    return (
        <>
            <main className="font-kanit">
                <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                <Navbar />
                <SectionOne />
                <SectionTwo />
            </main>
        </>
    );
}

export default HomeLayout;