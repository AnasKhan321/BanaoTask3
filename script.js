// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


    function animateImagesForScreen(screenIndex) {
        const screen = screens[screenIndex];
        const screenId = screen.id;

   
     
        if (screenId === 'screen2') {
            gsap.to('#screen2img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },
              
                
            });

            gsap.to('#screen2img2', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to("#textscreen2"  , {

                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })

            gsap.to("#textscreen22"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })
        }


        else if (screenId === 'screen3') {
            gsap.to('#screen3img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to('#screen3img2', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to("#textscreen3"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })


            gsap.to("#textscreen33"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })
        }else if(screenId === "screen4"){

            gsap.to('#screen4img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to('#screen4img2', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to("#textscreen4"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })


            gsap.to("#textscreen44"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })

        }else if(screenId === "screen5"){

            gsap.to('#screen5img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to("textscreen5"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })


            gsap.to("#textscreen55"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })

            gsap.to('#screen5img2', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });



            gsap.to('#screen5img3', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to('#screen5img4', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to('#screen5img5', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to("#textscreen5"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })



            
        }else if(screenId === "screen6"){

            gsap.to('#screen6img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to("#textscreen66"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })


       

            gsap.to("#textscreen6"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })
            
        }else if(screenId === "screen7"){
            gsap.to('#screen7img1', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });


            gsap.to('#screen7img2', {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            });

            gsap.to("#textscreen77"  , {

                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                   
                },

                onEnter : ()=>{
                    console.log("enter textscreen2 ")
            },
            })


            gsap.to("#textscreen7"  , {
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: screen,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none"
                }
            })
        }
    }


    const screens = document.querySelectorAll('.screen');
    let currentScreen = 0;

    const controller = new ScrollMagic.Controller();

    function scrollToScreen(index) {
        if (index >= 0 && index < screens.length) {
            const target = screens[index];

     
            new ScrollMagic.Scene({
                triggerElement: `#${target.id}`
            }).setClassToggle(`#${target.id}`, 'show').addTo(controller);
         
        
            gsap.to(window, {
                duration: 1, 
                scrollTo: {
                    y: target.getBoundingClientRect().top + window.scrollY, 
                    offsetY: 0 
                },
                ease: "power1.out" 
            });

            animateImagesForScreen(index);
          
            currentScreen = index;
        }
    }

    function handleScroll(event) {
        if (event.deltaY > 0) {
            // Scrolling down
            scrollToScreen(currentScreen + 1);
        } else {
            // Scrolling up
            scrollToScreen(currentScreen - 1);
        }
    }

    window.addEventListener('wheel', handleScroll);

});


