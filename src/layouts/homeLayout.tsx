import Navbar from "@/components/ui/navbar";
import SectionOne from "../pages/sectionOne";
import SectionTwo from "@/pages/sectionTwo";
import SectionThree from "@/pages/sectionThree";

function HomeLayout() {


    return (
        <>
            <main className="font-kanit">
                <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                <Navbar />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
            </main>
        </>
    );
}

export default HomeLayout;