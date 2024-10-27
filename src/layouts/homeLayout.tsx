import Navbar from "@/components/ui/navbar";
import SectionOne from "../pages/sectionOne";
import SectionTwo from "@/pages/sectionTwo";
import SectionThree from "@/pages/sectionThree";
import SectionFour from "@/pages/sectionFour";

function HomeLayout() {


    return (
        <>
            <main className="font-kanit">
                <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                <Navbar />
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
            </main>
        </>
    );
}

export default HomeLayout;