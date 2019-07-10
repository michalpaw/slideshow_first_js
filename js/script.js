
//Globalne

//"use strict";




var allImages = ["zdjecie (1).jpg", // Dowolna tablica ze zdjeciami
"Zdjecie (2).jpg",
"Zdjecie (3).jpg",
"Zdjecie (4).jpg",
"Zdjecie (5).jpg",
"Zdjecie (6).jpg",
"Zdjecie (7).jpg",
"Zdjecie (8).jpg",
"Zdjecie (9).jpg"
 ];

    var i_shift_count=0;// zmienna globalna kontrolujaca numery indeksow zdjęć
    var images_count = allImages.length;


function createMainImage(){

    var main_image = new Image();
 main_image.src = "images/" + allImages[0];
 main_image.width =400;
 main_image.className ="main_image";

 var mainSlide = document.getElementById("main_slide");
 mainSlide.appendChild(main_image);

 return main_image;

}




 


function isImageExist(image_url){

    var exist =0;
    var image = new Image(); // sprawdzam czy zdjęcie istenieje

        image.onload = function() {
                exist=1;
        }
        image.onerror = function() {
            // image did not load

                exist=0;
        }

        image.src = image_url;


  return exist;
}


function timeoutOpacityTransition(mainImage_img){

    
    // var mainImage_div = document.getElementById("main_slide");                   
    // var mainImage_img = mainImage_div.firstChild.nextElementSibling;
    mainImage_img.className= "main_image";
    setTimeout(function(){

        mainImage_img.className= "main_image_tr";
    
    },100);



}

function loadThreeMiniatures(i_shift){

 
 var miniature_div=""; 
 var miniature_html="";
 var miniature_div_id ="";

 var i_minus=0;
 var i_plus=0;
 
 
    var miniature_0_div=document.getElementById("miniature_0");
    var index =0;

    if(i_shift == 0){
    
        index = images_count-1;


    }else{


        index =  i_shift-1;
    }

    
    miniature_0_div.innerHTML = '<img src="images/'+ allImages[index] +'"  >';
  


 for(var i=1;i<=3;i++){
    
    i_minus = i;
    i_plus = i+i_shift;

    if(i_plus>images_count-1){

       i_plus = i_plus-images_count;
       
    }else if(i_plus<0){


        i_plus = images_count-i_plus;
    }

     
        miniature_div_id = "miniature_"+ i_minus;
        miniature_div=document.getElementById(miniature_div_id);
        miniature_html = '<img id="image_'+i+'"  src="images/'+ allImages[i_plus]  +'" class="thumbnail" >';
        miniature_div.innerHTML = miniature_html; 
      
    


 }




}



function changeImegeNext(){


    var nextButton = document.getElementById("next");

            nextButton.onclick=function(){

              

                        var mainImage_div = document.getElementById("main_slide");
                        var mainImage_img = mainImage_div.firstChild.nextElementSibling;
                        timeoutOpacityTransition(mainImage_img);
                   

                     if(i_shift_count<images_count-1){


                               
                                i_shift_count++;
                                var firstMiniature = document.getElementById("miniature_1");
                                var firstMiniatureImage = firstMiniature.firstChild;
                                mainImage_img.src = firstMiniatureImage.getAttribute("src");
                                loadThreeMiniatures(i_shift_count);// Załadowujemy kolejne miniatury przesunięte o ilość kliknięć w button next

                        
                        


                     }else{

                                i_shift_count=0;
                                var firstMiniature = document.getElementById("miniature_1");
                                var firstMiniatureImage = firstMiniature.firstChild;
                                mainImage_img.src = firstMiniatureImage.getAttribute("src");
                              // console.log(i_shift_count);
                                loadThreeMiniatures(i_shift_count);// Załadowujemy kolejne miniatury przesunięte o ilość kliknięć w button next
                     }
                     
              



            }



}


function changeImegePrev(){

    var prevButton = document.getElementById("prev");

            prevButton.onclick=function(){


                        var mainImage_div = document.getElementById("main_slide");
                        var mainImage_img = mainImage_div.firstChild.nextElementSibling;
                        timeoutOpacityTransition(mainImage_img);
                       
                
                if(i_shift_count>0){

                             
                            i_shift_count--;
                            var firstMiniature = document.getElementById("miniature_0");
                            var firstMiniatureImage = firstMiniature.firstChild;
                            mainImage_img.src = firstMiniatureImage.getAttribute("src");
                            loadThreeMiniatures(i_shift_count);// Załadowujemy kolejne miniatury przesunięte o ilość kliknięć w button prev
                            


                }else{
                   
                             i_shift_count=images_count-1;
                            var firstMiniature = document.getElementById("miniature_0");
                            var firstMiniatureImage = firstMiniature.firstChild;
                            mainImage_img.src = firstMiniatureImage.getAttribute("src");
                            loadThreeMiniatures(i_shift_count);// Załadowujemy kolejne miniatury przesunięte o ilość kliknięć w button prev
                  


                }
                }
                

            


    
}



function imageOnmouseover(){

     var miniaturDiv1 = document.getElementById("miniature_1");
     var miniaturDiv2 = document.getElementById("miniature_2");
     var miniaturDiv3 = document.getElementById("miniature_3");
        
    var mainImage_div = document.getElementById("main_slide");                   
    var mainImage_img = mainImage_div.firstChild.nextElementSibling;
    

    miniaturDiv1.onmouseover = function(){

      
        mainImage_img.src = this.firstChild.getAttribute("src");

    }

    miniaturDiv2.onmouseover = function(){

         mainImage_img.src = this.firstChild.getAttribute("src");

    }

    miniaturDiv3.onmouseover = function(){

        mainImage_img.src = this.firstChild.getAttribute("src");

    }






}



window.onload =function(){

    var mainImage = createMainImage();
    timeoutOpacityTransition(mainImage);
  

    loadThreeMiniatures(i_shift_count);
    changeImegeNext(mainImage);
    changeImegePrev();
    imageOnmouseover();



 
   


}
