function Schedule() {
    return (
        <>
            <section id="scheduleSection" className="py-16 flex justify-center items-center bg-black">
                <div className=" bg-gray-100 w-[85%] flex flex-col justify-center items-center p-10 relative z-[3] max-w-[900px] ml-5">
                    <div className="absolute w-[100%] h-[100%] bg-yellow top-[0] m-[-18px] left-0 z-[-3]"></div>
                    <div className="absolute w-[100%] h-[100%] bg-zinc-300 ] right-0 z-[-2]"></div>
                    <h4 className="font-antonio text-3xl md:pr-8 pr-4">Horario</h4>
                    <div className="mt-12 flex text-xl font-light gap-4 md:gap-28">
                        <div className="flex flex-col gap-8">
                            <p>Lunes</p>
                            <p>Martes</p>
                            <p>Miércoles</p>
                            <p>Jueves</p>
                            <p>Viernes</p>
                            <p>Sábado</p>
                            <p>Domingo</p>
                        </div>
                        <div className="w-[2px] h-[355px] bg-yellow mt-5"></div>
                        <div className="flex flex-col gap-8">
                            <p>09:30 - 19:00</p>
                            <p>09:30 - 19:00</p>
                            <p>09:30 - 19:00</p>
                            <p>09:30 - 19:00</p>
                            <p>09:30 - 19:00</p>
                            <p>10:00 - 17:00</p>
                            <p>10:00 - 17:00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Schedule;