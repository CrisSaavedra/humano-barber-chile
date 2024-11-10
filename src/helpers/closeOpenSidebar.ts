export const closeOpenSideBar = () => {
    const element = document.querySelector("#sidebar");
    const burgerBtn = document.querySelector("#burger");
    if (!element || !burgerBtn) return;

    if (element.classList.contains('openSideBar')) {
        burgerBtn.classList.remove('visibleToInvisible');
        burgerBtn.classList.add('invisibleToVisile');
        element.classList.remove('openSideBar');
        element.classList.add('closeSideBar');
    } else {
        burgerBtn.classList.remove('invisibleToVisile');
        burgerBtn.classList.add('visibleToInvisible');
        element.classList.remove('closeSideBar');
        element.classList.add('openSideBar');
    }
}