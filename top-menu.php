
    
       <li class="list-item"><a id="myLink" href="https://blacnetwork.com/" class="btn">Home
       
                                             <span class="ihs">
                                    
                                    <lottie-interactive id="lottieAnimation" path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                    
                                </span>
                                
                                
        </a></li>
                            <li class="list-item"><a href="about-us.php" class="btn"><span class="word">About Us</span>
                                <span class="ihs">
                                    
                                    
                                    <lottie-interactive id="lottieAnimation" path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                    
                                    </span>
                                
                                
                            </a></li>
                            <li class="list-item"><a href="page.membership.php" class="btn">Membership
                    <span class="ihs">
                                    
                                    <lottie-interactive id="lottieAnimation" path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                  
                                </span>
                                
                                
                            
                            </a></li>
                            <li class="list-item"><a href="page.the-app.php" class="btn">The App
                                                         <span class="ihs">
                                    <lottie-interactive path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                
                                </span>
                                
                                </a></li>
                                
                                
                                
                                  <li class="list-item"><a href="page.pay-BLAC.php" class="btn">Pay BLAC
                                                         <span class="ihs">
                                    <lottie-interactive path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                
                                </span>
                                
                                </a></li>
                                
                                
                                
                                
                            <li><a href="page.resources.php" class="btn">Resources
                            <i class="fa-solid fa-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="blogs.php" class="btn">Blogs</a></li>
                                 <li><a href="faqs.php" class="btn">faqs</a></li>
                                <li><a href="products-&-merchandise.php" class="btn">Products & Merchandise</a></li>
                            </ul>
                            </li>
                                
                            <li class="list-item"><a href="page.careers.php" class="btn">Careers
                                                         <span class="ihs">
                                    <lottie-interactive path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                                  
                                </span>
                                </a></li>
                            <li class="list-item"><a href="page.contact.php" class="btn">Contact Us
                                                         <span class="ihs">
                                    
                                    <lottie-interactive path="animations/lottie.json" interaction="morph-lock" ></lottie-interactive>
                               
                                </span>
                                </a></li>

                            
                            <style>
                                
                                header nav ul.menu li span.ihs {
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    top: 30%;
}
.current-menu-item a {
    color: #ff6600; /* Highlight color */
    font-weight: bold;
}


header nav ul.menu li span.ihs lottie-interactive {
    width: 80px;
}








                            </style>
                            
                            <script>
                            
                            

    // Get all links in the menu
    const menuItems = document.querySelectorAll('ul li a');

    // Iterate over each link and check if it matches the current URL
    menuItems.forEach(link => {
        if (link.href === window.location.href) {
            // Add class to the parent <li> of the current link
            link.parentElement.classList.add('current-menu-item');
        }
    });





    
    
                            </script>
