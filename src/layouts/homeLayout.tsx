import Navbar from "@/components/ui/navbar";
import LandingPage from "@/pages/landingPage";
import AboutUs from "@/pages/aboutUs";
import MediaSection from "@/pages/mediaSection";
import Products from "@/pages/products";
import MapSection from "@/pages/mapSection";
import Schedule from "@/pages/schedule";
import Footer from "@/pages/footer";
import SideBar from "@/components/ui/sidebar";
import Reviews from "@/pages/reviews";

function HomeLayout() {


    return (
        <>
            {/* <div className="opacityAnimation absolute w-full h-dvh z-[100000] bg-black"></div> */}
            <div className="overflow-hidden relative ">
                <SideBar />
                <Navbar />
                <main className="font-kanit z-[-22] opacityAnimation">
                    <div className="h-dvh bg-[url('src/assets/backgorund-image.webp')] bg-cover bg-center absolute w-full top-0 z-[-1] " style={{ filter: "brightness(.6)" }}></div>
                    <LandingPage />
                    <AboutUs />
                    <div className="bg-black">
                        <MediaSection />
                        <Products />
                        <MapSection />
                        <Schedule />
                        <Reviews />
                        <Footer />
                    </div>

                </main>
            </div>
        </>
    );
}

export default HomeLayout;