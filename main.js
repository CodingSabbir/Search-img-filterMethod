function myFunction(){
    var search=document.querySelector("#search");
    var image=document.querySelectorAll(".image");
    for(i=0; i<image.length;i++){
        image[i].style.display='none'; 
    }
    for(index=0; index<image.length;index++){
     var title=   image[index].getAttribute('data-title');
        if(search.value==title){
            image[index].style.display='block' ; 
        }else if(search.value==' '){
            image[index].style.display='block' ; 
        }
    }

}
