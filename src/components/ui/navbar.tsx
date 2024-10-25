function Navbar() {

    return (
        <>
            <nav className="sticky top-0 z-10 w-full  py-2 px-9 flex justify-between h-28  ">
                <img src="src/assets/logo.webp" alt="logo" style={{ width: "85px", height: "85px" }} /> 
                <button>
                    <svg width="45" enable-background="new 0 0 12 12" id="burger" version="1.1" viewBox="0 0 12 12" ><g><rect fill="#cecece" height="1" width="11" x="0.5" y="5.5"></rect><rect fill="#cecece" height="1" width="11" x="0.5" y="2.5"></rect><rect fill="#cecece" height="1" width="11" x="0.5" y="8.5"></rect></g></svg>
                </button>
            </nav>
        </>
    );
}

export default Navbar;