function imgSlide(imgSrc){
    document.querySelector(".isaw").src = imgSrc

}

function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const isaw = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    isaw.style.color = color;
}