
import LandingPage from "@/pages/landingPage";
import AboutUs from "@/pages/aboutUs";
import MediaSection from "@/pages/mediaSection";
import Products from "@/pages/products";
import MapSection from "@/pages/mapSection";
// import Schedule from "@/pages/schedule";
import Footer from "@/pages/footer";
import Reviews from "@/pages/reviews";

function HomeLayout() {


    return (
        <>

            <div className="">
               
                <main className="font-kanit z-[-22] ">

                    <LandingPage />
                    <AboutUs />
                    <div className="bg-black">
                        <MediaSection />
                        <Products />
                        <MapSection />
                        {/* <Schedule /> */}
                        <Reviews />
                        <Footer />
                    </div>

                </main>
            </div>
        </>
    );
}

export default HomeLayout;