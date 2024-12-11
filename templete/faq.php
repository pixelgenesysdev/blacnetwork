<style>
    
    section#faqs h2{
        text-transform:capitalize;
    }
    
    
</style>


            <section id="faqs">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">


                            <h2><span>Faqs</span></h2>
                         <div class="accord">   
                            <div class="wrapper">
                              
                              <div class="container accordians">
                                <div class="question">
                                    Who can join the BLAC Network?  
                                </div>
                                <div class="answercont">
                                  <div class="answer">
                                   Anyone can join the BLAC Network! Whether
                                   you're looking for exclusive discounts, rewards
                                   like BLAC DOLLAR, or a supportive community, our app is open to all 
                                   who align with our mission to empower Black communities and promote Black excellence.
                            
    
                                  </div>
                                </div>
                              </div> 

                              <div class="container accordians">
                                <div class="question">
                                    How do I earn BLAC DOLLAR? 
                                </div>
                                <div class="answercont">
                                  <div class="answer">
                                   You can earn BLAC DOLLAR by making purchases through
                                   the app. For every transaction, you’ll receive 10% more in rewards.
                            
    
                                  </div>
                                </div>
                              </div> 

                              <div class="container accordians">
                                <div class="question">
                                    Is the BLAC Network app free to use?  
                                </div>
                                <div class="answercont">
                                  <div class="answer">
                                    Yes, the BLAC Network app is completely free to
                                    download and use. Membership provides additional
                                    perks, but there are no mandatory fees.
                            
    
                                  </div>
                                </div>
                              </div> 

                              <div class="container accordians">
                                <div class="question">
                                  Where can I use the BLAC Network digital membership card? 
                                </div>
                                <div class="answercont">
                                  <div class="answer">
                                    The digital membership card can be used at participating stores 
                                    both online and in physical locations to unlock exclusive discounts.
                            
    
                                  </div>
                                </div>
                              </div> 

                              <div class="container accordians">
                                <div class="question">
                                    How do I get support if I have an issue with the app? 
                                </div>
                                <div class="answercont">
                                  <div class="answer">
                                    If you encounter any issues or have questions, you can contact our 
                                    support team through the app or by reaching out via email or social media. We’re here to help.
                                  </div>
                                </div>
                              </div> 

                              <script>
                               let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


                              </script>
                              

                            </div>           

                        </div>
                        <a href="faqs.php" id="btn1" style="margin: 0 auto;display: table;">read More</a>
                        </div>
                    </div>
                </div>

            </section>