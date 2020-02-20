$(document).ready(function () {
                        let change_top_title_text = $('.col-md-6').css({
                                'top': '0'
                        });
                        let change_top_form_login = $('.rounded').css({
                                'top': '0'
                        });
                        // $(document).scroll(function (){
                        //     let onscroll_down=$('.navbar').css({'position':'fixed'});
                        //     let onscroll_background=$('.navbar').css({'background-color':'white'});

                        // });
                        $(window).on('scroll', function () {
                                if ($(document).scrollTop() > 0) {
                                        let onscroll_down = $('.navbar').css({
                                                'position': 'fixed'
                                        });
                                        let onscroll_background = $('.navbar').css({
                                                'background-color': 'white'
                                        });


                                } else {
                                        let onscroll_top_background = $('.navbar').css({
                                                'background-color': 'transparent'
                                        });

                                }
                        });
                        for (let i = 1; i < 7; i++) {
                                var x = ` <div class="slider-item shadow-sm p-3 mb-5 bg-white rounded mr-3 w-auto ">
                <img src="img/img_${i}.jpg" alt="" srcset="">
                <h3> course ${i}</h3>
                </div> `
                                document.querySelector('.owl-carousel').innerHTML += x;
                                // $('#courses .owl-carousel').html()=+x;  <div class="cont"></div>
                        }
                        $(document).ready(function () {
                                $('.section-title h1').css({
                                        'transform': 'translateY(0)'
                                });
                                $('.section-title h1').css({
                                        'opacity': '1'
                                });

                        $(window).on('scroll', function () {
                                        if (($(document).scrollTop() > 100)) {
                                                $('.section-title h1').css({
                                                        'transform': 'translateY(0)'
                                                });
                                                $('.section-title h1').css({
                                                        'opacity': '1'
                                                });
                                        }
                                        else{
                                                // $('#courses').css({
                                                //         'opacity': '0'
                                                // });
                                                // $('#courses').css({
                                                //         'transform': 'translateY(100px)'
                                                // });

                                                $('.section-title h1').css({
                                                        'transform': 'translateY(100px)'
                                                });
                                                $('.section-title h1').css({
                                                        'opacity': '0'
                                                });
                                        }

                                });
                                });
                                $(document).ready(function () {
                                        $('.slider-item').css({
                                                'opacity': '1'
                                        });
                                        $('.slider-item').css({
                                                'transform': 'translateY(0)'
                                        });

                                        $(window).on('scroll', function () {
                                        if (($(document).scrollTop() > 100)) {
                                                $('.slider-item').css({
                                                        'opacity': '1'
                                                });
                                                $('.slider-item').css({
                                                        'transform': 'translateY(0)'
                                                });

                                        }
                                        else{
                                                $('.slider-item').css({
                                                        'opacity': '0'
                                                });
                                                $('.slider-item').css({
                                                        'transform': 'translateY(100px)'
                                                });

                                        }

                        });
                        });
                        $('#go_Home').on('click', function(event) {

                                // Make sure this.hash has a value before overriding default behavior
                                if (this.hash !== "") {
                                        // $(window).removeClass('active')

                                $('.navbar-nav a').removeClass('active');
                                      $('#go_Home').addClass('active');
                                      
                                  // Prevent default anchor click behavior
                                 event.preventDefault();
                            
                                  // Store hash
                                  var hash= this.hash;
                            var home=  $(document)
                                  // Using jQuery's animate() method to add smooth page scroll
                                  home.scrollTop(0)

                                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                                  $('html, body').animate({
                                  }, 600, function(){
                               
                                    // Add hash (#) to URL when done scrolling (default click behavior)
                                    window.location.hash = hash;
                                  });
                                } // End if
                              });


                        $("#go_courses").on('click', function(event) {

                                // Make sure this.hash has a value before overriding default behavior
                                if (this.hash !== "") {
                                       
                                $('.navbar-nav a').removeClass('active');
                                $('#go_courses').addClass('active');


                                  // Prevent default anchor click behavior
                                  event.preventDefault();
                            
                                  // Store hash
                                  var hash = this.hash;
                            
                                  // Using jQuery's animate() method to add smooth page scroll
                                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                                  $('html, body').animate({
                                    scrollTop: $(hash).offset().top
                                  }, 500, function(){
                               
                                    // Add hash (#) to URL when done scrolling (default click behavior)
                                    window.location.hash = hash;
                                  });
                                } // End if
                              });
                            


                        });
                        $(document).ready(function () {
                                $(".owl-carousel").owlCarousel();
                        });
                        $(document).ready(function () {
                                $(document).scrollTop(0);
                        });
