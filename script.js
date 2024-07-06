// const screens = document.querySelectorAll('.screen');
// let currentScreen = 0;


// console.log(screens)

// function scrollToScreen(index) {
//     if (index >= 0 && index < screens.length) {
//         screens[index].scrollIntoView({ behavior: 'smooth' });
//         currentScreen = index;
//     }
// }

// function handleScroll(event) {
//     if (event.deltaY > 0) {
//         // Scrolling down
//         scrollToScreen(currentScreen + 1);
//     } else {
//         // Scrolling up
//         scrollToScreen(currentScreen - 1);
//     }
// }

// // window.addEventListener('wheel', handleScroll);





// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase)
  

//     const screens = document.querySelectorAll('.screen');
// let currentScreen = 0;
// let scrollInProgress = false;

// function scrollToScreen(index) {
//     if (index >= 0 && index < screens.length && !scrollInProgress) {
//         scrollInProgress = true;
//         gsap.to(window, {
//             scrollTo: {
//                 y: index * window.innerHeight,
//                 autoKill: false
//             },
//             duration: 1,
//             onComplete: () => {
//                 currentScreen = index;
//                 scrollInProgress = false;
//             }
//         });
//     }}



//     ScrollTrigger.create({
//     trigger: '.screen',
//     start: 'top top',
//     end: 'bottom bottom',
//     onEnter: ({ direction }) => {
//         if (direction === 1) {
//             // Scrolling down
//             scrollToScreen(currentScreen + 1);
//         } else if (direction === -1) {
//             // Scrolling up
//             scrollToScreen(currentScreen - 1);
//         }
//     },
//     markers: true // Optional: shows trigger markers for debugging
// });



// })






// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const screens = document.querySelectorAll('.screen');
// let currentScreen = 0;
// let scrollInProgress = false;

// function scrollToScreen(index) {
//     if (index >= 0 && index < screens.length && !scrollInProgress) {
//         scrollInProgress = true;
//         gsap.to(window, {
//             scrollTo: {
//                 y: index * window.innerHeight,
//                 autoKill: false
//             },
//             duration: 1,
//             onComplete: () => {
//                 currentScreen = index;
//                 scrollInProgress = false;
//             }
//         });
//     }
// }

// Create ScrollTrigger for each screen section
// screens.forEach((screen, index) => {
   
// });



// ScrollTrigger.create({
//     trigger: screen,
//     start: 'top top',
//     end: () => `+=${window.innerHeight}`,
//     onEnter: ({ direction }) => {
//         if (direction === 1) {
//             // Scrolling down
//             scrollToScreen(index + 1);
//         } else if (direction === -1) {
//             // Scrolling up
//             scrollToScreen(index - 1);
//         }
//     },
//     markers: true // Optional: shows trigger markers for debugging
// });

// function handleScroll(event) {
//     console.log(event)
//     if (event.deltaY > 0) {
//         // Scrolling down
//         scrollToScreen(currentScreen + 1);
//     } else {
//         // Scrolling up
//         scrollToScreen(currentScreen - 1);
//     }
// }

// window.addEventListener('wheel', handleScroll);