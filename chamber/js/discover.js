
let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        /**image.removeAttribute("data-src");**/
    };
};
imagesToLoad.forEach ((img) => {
    loadImages(img);
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach ((item) => {
            if (item.isIntersecting){
            loadImages(item.target);
            observer.unobserve(item.target);
        }
            

        });
    });
    imagesToLoad.forEach ((img) => {
        observer.observe(img);

    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });

}
    


const today1 = new Date();

if (today1.getDay() == 1 || today1.getDay()==2 ){
  document.querySelector("header p").style.display='block';
}


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerButton").classList.toggle("open");
   
}
const x = document.getElementById('hamburgerButton');
x.onclick = toggleMenu;

const today= new Date();

    document.querySelector("footer div span").textContent = today.getFullYear();
    document.getElementById("lastupdatedate").textContent = document.lastModified;
    
   // select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;



