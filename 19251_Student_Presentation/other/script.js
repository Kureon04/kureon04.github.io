



const vh = window.innerHeight / 100;

// Get fade-in elements
const fadeIn = document.getElementsByClassName("fade-in");

// Get offsets top
const fadeOffsetTop = [];
for (i=0; i<fadeIn.length; i++) {
    fadeOffsetTop.push(fadeIn[i].offsetTop);
}

// Onscroll
window.onscroll = () => {
    yScroll = document.body.scrollTop || document.documentElement.scrollTop;

    // for each element check if it passed 70vh
    var k = 0;
    for (i=0; i<fadeIn.length; i++) {
        let windowTopDistance = fadeOffsetTop[i] - yScroll;
        if (windowTopDistance < 80*vh) {
            for (j=0; j<i; j++) {
                if (fadeOffsetTop[j] == fadeOffsetTop[i]) {
                    fadeIn[i].style.animation = "fadeIn 1s " + (++k * 300) + "ms ease forwards";
                    break;
                } else {
                    k = 0;
                }
            }
            if (k == 0) {
                fadeIn[i].style.animation = "fadeIn 1s ease forwards";
            }
        }
    }
}
