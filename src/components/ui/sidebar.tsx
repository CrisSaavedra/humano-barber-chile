function SideBar() {
    return (
        <>
            <div className="fixed bg-black opacity-85 h-dvh w-full max-w-[220px] md:max-w-[300px] flex flex-col items-center right-0 z-[100]">
                <header className="block w-full flex justify-end pt-5 pr-10">
                    <svg width="40" className="ci-primary options-in" id="xbtn" viewBox="0 0 512 512"><polygon fill="#cecece" points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon></svg>
                </header>
                <nav className="w-full block flex flex-col justify-start">

                </nav>
            </div>


        </>
    );
}

export default SideBar;