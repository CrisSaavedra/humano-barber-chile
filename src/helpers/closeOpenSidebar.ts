export const closeOpenSideBar = () => {
    const element = document.querySelector("#sidebar");
    if(!element) return;

    if(element.classList.contains('openSideBar')){
        element.classList.remove('openSideBar');
        element.classList.add('closeSideBar');
    }else {
        element.classList.remove('closeSideBar');
        element.classList.add('openSideBar');
    }
}