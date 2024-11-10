import { closeOpenSideBar } from "@/helpers/closeOpenSidebar";

function SideBar() {

    const scrollToElement = (elementId: string) => {
        const element = document.querySelector(elementId);
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }
    };

    const goToHome = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        scrollToElement("#home");
    }

    const goToProducts = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        scrollToElement("#sectionProducts");
    };

    const goToDirection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        scrollToElement("#sectionMap");
    };

    const goToHorario = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        scrollToElement("#scheduleSection");
    };



    return (
        <>
            <section className="w-full overflow-hidden">


                <div id="sidebar" className="fixed bg-black opacity-85 h-dvh w-full max-w-[220px] md:max-w-[300px] flex flex-col items-center right-0 z-[100] " style={{ transform: "translateX(100%)" }}>
                    <header className="block w-full flex justify-end pt-5 pr-10">
                        <button onClick={closeOpenSideBar}><svg width="40" className="ci-primary options-in hover:opacity-85" id="xbtn" viewBox="0 0 512 512"><polygon fill="#cecece" points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon></svg></button>
                    </header>
                    <nav className="w-full block text-zinc-200 font-light text-3xl">
                        <ul className="flex flex-col gap-10 py-12 ml-5">
                            <li><a href="#" onClick={(e) => goToHome(e)}>Inicio</a></li>
                            <li><a href="#" onClick={(e) => goToProducts(e)}>Productos</a></li>
                            <li><a href="#" onClick={(e) => goToDirection(e)}>Dirección</a></li>
                            <li><a href="#" onClick={(e) => goToHorario(e)}>Horario</a></li>
                            <li className="text-yellow"><a href="#">Agendar</a></li>
                        </ul>
                    </nav>
                    <div className="w-full flex flex-col justify-center items-center mt-10">
                        <div className="block w-[80%] h-[1px] border-t border-yellow opacity-70"></div>
                        <div className="flex justify-center items-center mt-10 gap-10">

                            <a href="#"><svg width="30" enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" ><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"></rect><path clipRule="evenodd" d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#dedede" fillRule="evenodd" id="Facebook"></path></g></g></svg></a>

                            <a href="#"> <svg enableBackground="new 0 0 128 128" width="30" version="1.1" viewBox="0 0 1024 1024"><g><g><path fill="#dedede" d="M512.305,0.122c70.856,0,141.717-0.328,212.571,0.094     c66.662,0.398,129.269,15.6,183.515,56.125c70.84,52.923,107.091,125.214,113.838,212.445c2.376,30.7,1.637,61.667,1.677,92.512     c0.161,119.619,0.072,239.239,0.059,358.86c-0.005,48.856-6.799,96.557-27.473,141.232     c-41.938,90.623-115.091,140.165-211.608,157.334c-20.125,3.579-40.886,4.916-61.359,4.977     c-141.333,0.417-282.669,0.321-424.003,0.174c-73.495-0.075-140.713-19.483-197.994-67.166     c-58.197-48.439-88.907-111.793-98.46-186.071c-1.648-12.811-2.657-25.805-2.669-38.714     C0.261,583.352-0.636,434.771,0.82,286.214c0.796-81.166,27.822-153.13,88.244-209.835     c50.119-47.032,111.04-71.607,178.739-74.012c81.404-2.892,162.991-0.685,244.499-0.685     C512.303,1.161,512.303,0.641,512.305,0.122z M511.505,929.369c68.18,0,136.358,0.274,204.534-0.188     c17.83-0.121,35.919-1.007,53.414-4.171c66.827-12.081,117.634-45.6,144.26-110.67c13.528-33.055,17.946-68.524,18.522-102.876     c2.237-133.271,0.976-266.602,0.819-399.911c-0.018-14.442-0.174-29.045-2.217-43.295     c-9.163-63.988-36.903-116.435-95.792-148.329c-32.869-17.801-68.551-24.522-105.64-24.534     c-142.831-0.042-285.662-0.084-428.492,0.087c-12.908,0.016-25.93,0.73-38.702,2.525     c-72.746,10.214-126.329,46.066-153.145,116.6c-10.822,28.463-14.28,58.288-14.286,88.569     c-0.021,139.403-0.155,278.803,0.183,418.208c0.041,17.055,1.313,34.355,4.366,51.114     c13.543,74.355,55.004,125.461,128.843,146.011c24.606,6.845,50.909,9.868,76.522,10.384     C373.608,930.277,442.565,929.364,511.505,929.369z" fillRule="evenodd"></path><path fill="#dedede" clipRule="evenodd" d="M775.903,510.369c-0.064,145.777-119.005,264.347-264.821,263.991     c-145.871-0.353-263.345-118.096-263.43-264.029C247.567,364.56,366.331,245.98,512.255,246.139     C656.921,246.295,775.968,365.605,775.903,510.369z M511.878,679.188c93.007,0.071,169.609-76.475,169.448-169.325     c-0.161-92.206-76.568-168.757-168.818-169.132c-92.873-0.377-169.438,75.935-169.635,169.074     C342.677,603.077,418.542,679.114,511.878,679.188z" fillRule="evenodd"></path><path fill="#dedede" clipRule="evenodd" d="M785.693,299.338c-33.019-0.295-59.047-26.717-58.941-59.832     c0.104-33.491,26.785-59.75,60.471-59.52c32.644,0.226,59.246,27.168,59.147,59.904     C846.27,273.09,819.174,299.637,785.693,299.338z" fillRule="evenodd"></path></g></g></svg></a>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default SideBar;