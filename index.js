let photos = ["img/1.webp", "img/2.jpg", "img/3.webp", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.webp", "img/8.webp", "img/9.jpg", "img/10.jpeg" ];

let imgTag = document.querySelector("img");


let count = 0;

function next() {
     count++;

     if(count >= photos.length) {
         count = 0;
         imgTag.src = photos[count];
     }
     else{
        imgTag.src = photos[count];
     }

}

function prev() {
    count--;

    if(count < 0 ) {
        count = photos.length - 1  ;
        imgTag.src = photos[count];
    }
    else{
       imgTag.src = photos[count];
    }

}


