let elem = document.querySelector("#apps");
const imageObserver = new IntersectionObserver(
    (entries, observer)=> {
        if(elem.isIntersecting){
            elem.setAttribute("autoplay");
        }
    },
    {
        rootMargin: "-1000px"
    }
);
imageObserver.observe(elem);