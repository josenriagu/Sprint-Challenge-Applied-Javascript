class Carousel {
    constructor(imgElement){
        this.imgElement = imgElement;
        this.next = document.querySelectorAll('.carousel div')[1];
        this.previous = document.querySelectorAll('.carousel div')[0];
        
    }
    ButtonClick(){
        if(index == x){
            carouselImages[index].setAttribute("style", "display: block;");
        } else {
            carouselImages[index].setAttribute("style", "");
        }
    }
}

let index = 0;
let carousel = document.querySelectorAll('.carousel img').forEach(img => new Carousel(img));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
