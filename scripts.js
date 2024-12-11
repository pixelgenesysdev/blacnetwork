
// menu humberger


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        menu.classList.remove('active');
    });
});








//search icon

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-icon').addEventListener('click', function() {
      document.getElementById('search-container').style.transform = 'scaleY(1)';
    });
  
    document.getElementById('close-search').addEventListener('click', function() {
      document.getElementById('search-container').style.transform = 'scaleY(0)';
    });
  });

















$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
       loop: true,            // Infinite loop
      nav: true,             // Show navigation buttons
      autoplay: true,        // Enable autoplay
      autoplayTimeout: 3000, // Autoplay interval
      responsive: {
          0: {
              items: 1       // Number of items displayed at 0px width
          },
          600: {
              items: 1      // Number of items displayed at 600px width
          },
          1000: {
              items: 1       // Number of items displayed at 1000px width
          }
      }
  });
});



$(document).ready(function(){
    $("#blogs-slider").owlCarousel({
       loop: true,            // Infinite loop
      nav: true,             // Show navigation buttons
      autoplay: true,        // Enable autoplay
      autoplayTimeout: 3000, // Autoplay interval
      responsive: {
          0: {
              items: 1       // Number of items displayed at 0px width
          },
          700: {
              items: 2       // Number of items displayed at 600px width
          },
          1000: {
              items: 3       // Number of items displayed at 1000px width
          }
      }
  });
});



  $(document).ready(function(){
    $("#member-ship-slider").owlCarousel({
       loop: true,            // Infinite loop
      nav: true,             // Show navigation buttons
      autoplay: true,        // Enable autoplay
      autoplayHoverPause: true,
      autoplayTimeout: 10000, // Autoplay interval
      responsive: {
          0: {
              items: 1       // Number of items displayed at 0px width
          },
          600: {
              items: 1       // Number of items displayed at 600px width
          },
          1000: {
              items: 1       // Number of items displayed at 1000px width
          }
      }
  });
});




// App page section



  $(document).ready(function(){
    $("#app-page-slide-main").owlCarousel({
       loop: true,            // Infinite loop
      nav: true,             // Show navigation buttons
      autoplay: true,        // Enable autoplay
      autoplayHoverPause: true,
      autoplayTimeout: 10000, // Autoplay interval
      responsive: {
          0: {
              items: 1       // Number of items displayed at 0px width
          },
          600: {
              items: 1       // Number of items displayed at 600px width
          },
          1000: {
              items: 1       // Number of items displayed at 1000px width
          }
      }
  });
});





// about page section




// document.addEventListener("DOMContentLoaded", function() {
//     const boxes = document.querySelectorAll(".a1");

//     function checkBoxes() {
//         const triggerBottom = window.innerHeight / 1.3;

//         boxes.forEach(box => {
//             const boxTop = box.getBoundingClientRect().top;

//             if (boxTop < triggerBottom) {
//                 const scrollFraction = (triggerBottom - boxTop) / triggerBottom;
//                 const translateX = -300 + (scrollFraction * 150); // Adjust the translateX value
//                 const opacity = scrollFraction;
                
//                 box.style.transform = `translateX(${translateX}px)`;
//                 box.style.opacity = opacity;
//             } else {
//                 box.style.transform = `translateX(-300px)`;
//                 box.style.opacity = 0;
//             }
//         });
//     }

//     window.addEventListener("scroll", checkBoxes);
//     checkBoxes(); // Initial check in case elements are already in view
// });




// animation for left animation foundation section 


document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".a1");
    const stopPosition = 800; // Adjust this value to the specific scroll position where you want the animation to stop

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 1.3;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY < stopPosition) { // Check if scroll position is less than the stop position
                if (boxTop < triggerBottom) {
                    const scrollFraction = (triggerBottom - boxTop) / triggerBottom;
                    const translateX = -300 + (scrollFraction * 300); // Adjust the translateX value
                    const opacity = scrollFraction;

                    box.style.transform = `translateX(${translateX}px)`;
                    box.style.opacity = opacity;
                } else {
                    box.style.transform = `translateX(-300px)`;
                    box.style.opacity = 0;
                }
            } else {
                box.style.transform = `translateX(${Math.min(0, -300 + (stopPosition / triggerBottom * 300))}px)`; // Adjust transform value to stop
                box.style.opacity = 1; // Ensure full opacity when stop position is reached
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check in case elements are already in view
});




document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".a2");
    const stopPosition = 800; // Adjust this value to the specific scroll position where you want the animation to stop

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 1.3;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY < stopPosition) { // Check if scroll position is less than the stop position
                if (boxTop < triggerBottom) {
                    const scrollFraction = (triggerBottom - boxTop) / triggerBottom;
                    const translateX = 300 + (scrollFraction * -300); // Adjust the translateX value
                    const opacity = scrollFraction;

                    box.style.transform = `translateX(${translateX}px)`;
                    box.style.opacity = opacity;
                } else {
                    box.style.transform = `translateX(300px)`;
                    box.style.opacity = 0;
                }
            } else {
                box.style.transform = `translateX(${Math.min(0, 300 + (stopPosition / triggerBottom * 300))}px)`; // Adjust transform value to stop
                box.style.opacity = 1; // Ensure full opacity when stop position is reached
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check in case elements are already in view
});




document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".a2");
    const stopPosition = 800; // Adjust this value to the specific scroll position where you want the animation to stop

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 1.3;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY < stopPosition) { // Check if scroll position is less than the stop position
                if (boxTop < triggerBottom) {
                    const scrollFraction = (triggerBottom - boxTop) / triggerBottom;
                    const translateX = 300 + (scrollFraction * -300); // Adjust the translateX value
                    const opacity = scrollFraction;

                    box.style.transform = `translateX(${translateX}px)`;
                    box.style.opacity = opacity;
                } else {
                    box.style.transform = `translateX(300px)`;
                    box.style.opacity = 0;
                }
            } else {
                box.style.transform = `translateX(${Math.min(0, 300 + (stopPosition / triggerBottom * 300))}px)`; // Adjust transform value to stop
                box.style.opacity = 1; // Ensure full opacity when stop position is reached
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check in case elements are already in view
});





document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".a3");
    const stopPosition = 800; // Adjust this value to the specific scroll position where you want the animation to stop

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 1.3;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const scrollY = window.scrollY || window.pageYOffset;

            if (scrollY < stopPosition) { // Check if scroll position is less than the stop position
                if (boxTop < triggerBottom) {
                    const scrollFraction = (triggerBottom - boxTop) / triggerBottom;
                    const translateY = 300 + (scrollFraction * -300); // Adjust the translateX value
                    const opacity = scrollFraction;

                    box.style.transform = `translateY(${translateY}px)`;
                    box.style.opacity = opacity;
                } else {
                    box.style.transform = `translateY(300px)`;
                    box.style.opacity = 0;
                }
            } else {
                box.style.transform = `translateY(${Math.min(0, 300 + (stopPosition / triggerBottom * 300))}px)`; // Adjust transform value to stop
                box.style.opacity = 1; // Ensure full opacity when stop position is reached
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Initial check in case elements are already in view
});






document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".scale-image");
    const stopPosition = 800; // Adjust this value to the specific scroll position where you want the scaling to stop

    function checkImageScale() {
        const triggerBottom = window.innerHeight / 1.3;
        const scrollY = window.scrollY || window.pageYOffset;
        const imageTop = image.getBoundingClientRect().top;

        // Define scale start and end values
        const scaleStart = 1.4; // Initial scale
        const scaleEnd = 1; // Final scale
        const scrollFraction = Math.min((scrollY / stopPosition), 1); // Ensure value stays between 0 and 1

        if (scrollY < stopPosition) { // Check if scroll position is less than the stop position
            if (imageTop < triggerBottom) {
                // Calculate scale based on scroll position
                const scale = scaleStart - (scrollFraction * (scaleStart - scaleEnd)); // Scale from 1.2 to 1
                image.style.transform = `scale(${scale})`;
            } else {
                image.style.transform = `scale(${scaleStart})`; // Initial scale
            }
        } else {
            // Calculate scale when scrolling back up
            const scale = Math.max(scaleEnd, scaleStart - (scrollFraction * (scaleStart - scaleEnd)));
            image.style.transform = `scale(${scale})`;
        }

        image.style.opacity = 1; // Keep opacity at 1
    }

    window.addEventListener("scroll", checkImageScale);
    checkImageScale(); // Initial check in case image is already in view
});






//    --------Banner animation


document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('#banner');
    const tags = document.querySelectorAll('.tag');

    let lastMouseX = null;
    let lastMouseY = null;
    let stopTimeout = null; // Variable to store the timeout ID
    let stopAnimationInterval = null; // Variable for smooth stopping interval

    // Function to position tags randomly with margin
    function positionTags() {
        const bannerRect = banner.getBoundingClientRect();
        const bannerWidth = bannerRect.width;
        const bannerHeight = bannerRect.height;

        // Define margin
        const margin = 50;

        // Function to get random speed
        function getRandomSpeed() {
            // 30% chance of slow speed, 70% chance of fast speed
            return Math.random() < 0.8 ? 1.5 : 2.5; // Adjust these values as needed
        }

        tags.forEach(tag => {
            const tagWidth = tag.offsetWidth;
            const tagHeight = tag.offsetHeight;

            // Randomize position within the banner, respecting margin
            const x = Math.random() * (bannerWidth - tagWidth - 2 * margin) + margin;
            const y = Math.random() * (bannerHeight - tagHeight - 2 * margin) + margin;

            // Set random speed for the tag
            tag.dataset.speed = getRandomSpeed();

            tag.style.position = 'absolute';
            tag.style.left = `${x}px`;
            tag.style.top = `${y}px`;
            tag.style.transition = 'transform 0.5s ease'; // Add transition for smooth movement
        });
    }

    positionTags(); // Initial positioning of tags

    // Update positioning on resize
    window.addEventListener('resize', positionTags);

    document.addEventListener('mousemove', function(e) {
        if (lastMouseX !== null && lastMouseY !== null) {
            // Calculate movement delta
            const deltaX = e.clientX - lastMouseX;
            const deltaY = e.clientY - lastMouseY;

            tags.forEach(tag => {
                // Get current transform values
                const style = window.getComputedStyle(tag);
                const matrix = new WebKitCSSMatrix(style.transform);

                // Get sensitivity factor from data attribute
                const sensitivity = tag.dataset.speed;

                // Apply inverse movement with the sensitivity factor
                const moveX = matrix.m41 - deltaX * sensitivity;
                const moveY = matrix.m42 - deltaY * sensitivity;

                tag.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
            });
        }

        // Update last mouse positions
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;

        // Clear the existing timeout if the mouse moves
        clearTimeout(stopTimeout);
        clearInterval(stopAnimationInterval); // Clear any ongoing smooth stopping interval

        // Set a new timeout to stop animation smoothly after 20 seconds
        stopTimeout = setTimeout(() => {
            stopAnimationInterval = setInterval(() => {
                tags.forEach(tag => {
                    // Gradually reduce the movement by reducing the speed factor
                    let currentSpeed = parseFloat(tag.dataset.speed);

                    if (currentSpeed > 0) {
                        currentSpeed = Math.max(0, currentSpeed - 0.05); // Reduce speed smoothly
                        tag.dataset.speed = currentSpeed;

                        const style = window.getComputedStyle(tag);
                        const matrix = new WebKitCSSMatrix(style.transform);

                        const moveX = matrix.m41;
                        const moveY = matrix.m42;

                        // Apply the reduced speed and add transition effect
                        tag.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
                        tag.style.transition = `transform ${0.5 + currentSpeed}s ease-out`; // Adjust for smoother stop
                    } else {
                        clearInterval(stopAnimationInterval); // Stop interval once speed is 0
                    }
                });
            }, 30); // Adjust the interval time for smoother transition
        }, 20000); // 20 seconds
    });

    // Reset lastMouseX and lastMouseY when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        lastMouseX = null;
        lastMouseY = null;

        // Clear the timeout if the mouse leaves the window
        clearTimeout(stopTimeout);
        clearInterval(stopAnimationInterval); // Stop any ongoing smooth stopping interval
    });
});

































