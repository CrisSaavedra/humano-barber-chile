export const goTo = (e,element) => {
    e.preventDefault();
    let go = document.getElementById(element);

    var moreLess = 100;
    var elementPosition = go.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - moreLess;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    return null;

}