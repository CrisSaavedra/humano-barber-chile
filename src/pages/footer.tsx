function Footer() {
    return (
        <footer className="bg-black text-white font-antonio font-light flex flex-col justify-center items-center">
            <div className=" flex flex-col md:flex-row justify-center items-center pt-10 pb-3 md:gap-60">
                <div className="flex flex-col gap-2">
                    <img src="src/assets/logo.webp" className="mx-auto" alt="logo" width={112} />
                    <p className="text-xl">Humano Barber Chile</p>
                </div>

                <div className="flex flex-col gap-2 mt-8 md:mt-4 justify-center align-center">
                    <div className="border-y py-1 border-yellow justify-center text-center">
                        <p className="text-2xl pb-1">Reservar</p>
                    </div>
                    <div className="flex justigy-center gap-4 mt-7">
                        <a href="#"><svg width="22" enableBackground="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" ><g id="_x31__stroke"><g id="Facebook_1_"><rect fill="none" height="128" width="128"></rect><path clipRule="evenodd" d="M68.369,128H7.065C3.162,128,0,124.836,0,120.935    V7.065C0,3.162,3.162,0,7.065,0h113.871C124.837,0,128,3.162,128,7.065v113.87c0,3.902-3.163,7.065-7.064,7.065H88.318V78.431    h16.638l2.491-19.318H88.318V46.78c0-5.593,1.553-9.404,9.573-9.404l10.229-0.004V20.094c-1.769-0.235-7.841-0.761-14.906-0.761    c-14.749,0-24.846,9.003-24.846,25.535v14.246H51.688v19.318h16.681V128z" fill="#dedede" fillRule="evenodd" id="Facebook"></path></g></g></svg></a>

                        <a href="#"> <svg enableBackground="new 0 0 128 128" width="22" version="1.1" viewBox="0 0 1024 1024"><g><g><path fill="#dedede" d="M512.305,0.122c70.856,0,141.717-0.328,212.571,0.094     c66.662,0.398,129.269,15.6,183.515,56.125c70.84,52.923,107.091,125.214,113.838,212.445c2.376,30.7,1.637,61.667,1.677,92.512     c0.161,119.619,0.072,239.239,0.059,358.86c-0.005,48.856-6.799,96.557-27.473,141.232     c-41.938,90.623-115.091,140.165-211.608,157.334c-20.125,3.579-40.886,4.916-61.359,4.977     c-141.333,0.417-282.669,0.321-424.003,0.174c-73.495-0.075-140.713-19.483-197.994-67.166     c-58.197-48.439-88.907-111.793-98.46-186.071c-1.648-12.811-2.657-25.805-2.669-38.714     C0.261,583.352-0.636,434.771,0.82,286.214c0.796-81.166,27.822-153.13,88.244-209.835     c50.119-47.032,111.04-71.607,178.739-74.012c81.404-2.892,162.991-0.685,244.499-0.685     C512.303,1.161,512.303,0.641,512.305,0.122z M511.505,929.369c68.18,0,136.358,0.274,204.534-0.188     c17.83-0.121,35.919-1.007,53.414-4.171c66.827-12.081,117.634-45.6,144.26-110.67c13.528-33.055,17.946-68.524,18.522-102.876     c2.237-133.271,0.976-266.602,0.819-399.911c-0.018-14.442-0.174-29.045-2.217-43.295     c-9.163-63.988-36.903-116.435-95.792-148.329c-32.869-17.801-68.551-24.522-105.64-24.534     c-142.831-0.042-285.662-0.084-428.492,0.087c-12.908,0.016-25.93,0.73-38.702,2.525     c-72.746,10.214-126.329,46.066-153.145,116.6c-10.822,28.463-14.28,58.288-14.286,88.569     c-0.021,139.403-0.155,278.803,0.183,418.208c0.041,17.055,1.313,34.355,4.366,51.114     c13.543,74.355,55.004,125.461,128.843,146.011c24.606,6.845,50.909,9.868,76.522,10.384     C373.608,930.277,442.565,929.364,511.505,929.369z" fillRule="evenodd"></path><path fill="#dedede" clipRule="evenodd" d="M775.903,510.369c-0.064,145.777-119.005,264.347-264.821,263.991     c-145.871-0.353-263.345-118.096-263.43-264.029C247.567,364.56,366.331,245.98,512.255,246.139     C656.921,246.295,775.968,365.605,775.903,510.369z M511.878,679.188c93.007,0.071,169.609-76.475,169.448-169.325     c-0.161-92.206-76.568-168.757-168.818-169.132c-92.873-0.377-169.438,75.935-169.635,169.074     C342.677,603.077,418.542,679.114,511.878,679.188z" fillRule="evenodd"></path><path fill="#dedede" clipRule="evenodd" d="M785.693,299.338c-33.019-0.295-59.047-26.717-58.941-59.832     c0.104-33.491,26.785-59.75,60.471-59.52c32.644,0.226,59.246,27.168,59.147,59.904     C846.27,273.09,819.174,299.637,785.693,299.338z" fillRule="evenodd"></path></g></g></svg></a>

                        <svg width="22" enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512"><g><path fill="#dedede" d="M10.8,507.9c6.9-20.7,13.4-40.1,19.9-59.5c6.5-19.2,12.3-38.7,19.7-57.6c3.8-9.6,2.6-16.8-2.2-25.8   c-26.2-48.6-34-100.7-24.9-154.9c7.7-45.9,27.2-86.5,58.7-121C133.9,32.4,198.7,5.2,275.3,8.4c56.1,2.3,105.7,22.8,148,59.9   c39.4,34.5,65.1,77.4,77,128.4c9.6,41.1,8.5,82-3.3,122.5c-15,51.3-43.7,93.6-86.4,125.8c-59.3,44.8-125.8,58.7-198.3,44.6   c-21.8-4.2-42.6-12-62.2-22.6c-3.2-1.7-5.9-2.1-9.4-0.9c-37.2,12-74.5,23.9-111.7,35.8C23.4,503.7,17.7,505.6,10.8,507.9z    M74.1,445.2c2-0.5,2.9-0.7,3.8-1c23.3-7.4,46.6-14.9,70-22.1c2.2-0.7,5.2-0.1,7.3,0.9c10.1,5,19.8,11,30.2,15.4   c42.8,18.1,86.9,21,131.5,8.6c53.2-14.9,94-46.6,121.9-94.5c23.9-41,32.1-85.3,24.7-131.9c-9.4-59.3-39.8-105.9-90.1-139   C329.8,53,281.8,43.3,230.6,51.4c-44.1,7-81.8,27.1-112.9,59.3c-26.7,27.6-44.6,60.2-52.4,97.7c-11.1,53.7-2.9,104.5,26.9,150.8   c6,9.3,5.8,16.4,2.2,25.9C87.1,404.6,81,424.5,74.1,445.2z"></path><path fill="#dedede" d="M389.3,321.8c-0.3,19.3-9.4,34-27.8,43.2c-18.1,9-36.5,11.3-55.4,3.9c-17-6.7-34.2-13.2-50.6-21.3   c-21.6-10.7-39.3-26.7-55.5-44.4c-17.9-19.6-33.1-41.4-45.6-64.7c-8.9-16.5-14.3-34-12.4-53.2c2-20.4,11.5-36.7,27.5-49   c3.2-2.4,8-3.5,12.1-3.9c5.3-0.4,10.6,0.4,15.9,0.8c4.4,0.4,6.8,3.5,8.3,7.1c3.9,9.6,7.4,19.2,11.1,28.9c2.5,6.5,4.4,13.3,7.4,19.6   c3.7,7.8,1.4,14.3-3.4,20.3c-4.1,5.1-8.4,10-13.1,14.4c-3.9,3.7-4.6,7.5-2,12c11.5,20.5,25.5,38.9,44,53.8   c12.2,9.8,25.7,17.1,39.7,23.9c4.1,2,8.1,1.7,11.3-2c6.9-7.9,13.9-15.7,20.7-23.7c4.4-5.1,6.6-6.1,12.5-3.1   c17.1,8.6,34,17.5,51,26.4C389,313,390,316.6,389.3,321.8z"></path></g></svg>
                    </div>
                </div>

            </div>
            <p className="mt-20 text-sm">HUMANO BARBER CHILE TODOS LOS DERECHOS RESERVADOS © </p>
        </footer>
    );
}

export default Footer;