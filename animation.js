var x = $(window).width(),
    y = $(window).height();

var rotation = 3600;

TweenMax.to(".logo-upper", 3, {
    bezier:{curviness:1, values:[
        {x:0, y:0},
        {x:x-150, y:y/2},
        {x:x/2, y:y-150},
        {x:x/4, y:y/2}, /* Start */
        {x:x/2, y:y/4},
        {x:3*x/4, y:y/2},
        {x:x/2, y:3*y/4}, /* End */
        {x:3*x/8, y:y/2},
        {x:x/2-82, y:y/2-107},
    ]},
    rotation: rotation,
    ease:Expo.easeInOut, y: 0
});


TweenMax.to(".logo-lower", 3, {
    bezier:{curviness:1, values:[
        {x:0, y:0},
        {x:-x+150, y:-y/2},
        {x:-x/2, y:-y+150},
        {x:-x/4, y:-y/2},
        {x:-x/2, y:-y/4},
        {x:-3*x/4, y:-y/2},
        {x:-x/2, y:-3*y/4},
        {x:-3*x/8, y:-y/2},
        {x:-x/2+81.5, y:-y/2+108.5},
    ]},
    rotation: rotation,
    ease:Expo.easeInOut, y: 0
});

TweenMax.to(".logo-upper feGaussianBlur", 0.5, {
    attr:{stdDeviation:10},
    // repeat: -1,
    // yoyo: true,
    delay: 3
});

TweenMax.to(".logo-lower feGaussianBlur", 0.5, {
    attr:{stdDeviation:10},
    // repeat: -1,
    // yoyo: true,
    delay: 3.5
});

// TweenMax.to("feGaussianBlur", 1, {
//     delay:3.1
// }
