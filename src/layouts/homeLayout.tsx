import Navbar from "@/components/ui/navbar";
import SectionOne from "../pages/sectionOne";
import SectionTwo from "@/pages/sectionTwo";
import SectionThree from "@/pages/sectionThree";
import SectionFour from "@/pages/sectionFour";
import SectionFive from "@/pages/sectionFive";
import SectionSix from "@/pages/sectionSix";
import Footer from "@/pages/footer";
import SideBar from "@/components/ui/sidebar";

function HomeLayout() {


    return (
        <>
            <div className="overflow-hidden relative">
                <main className="font-kanit z-[-22] opacityAnimation">
                    <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1]" style={{ filter: "brightness(.6)" }}></div>
                    <SideBar />
                    <Navbar />
                    <SectionOne />
                    <SectionTwo />
                    <div className="bg-black">
                        <SectionThree />
                        <SectionFour />
                        <SectionFive />
                        <SectionSix />
                        <Footer />
                    </div>

                </main>
            </div>
        </>
    );
}

export default HomeLayout;