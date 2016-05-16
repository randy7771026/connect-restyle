var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
    	  
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
/*test = new Date()
month = test.getMonth()
month = (month * 1) + 1
day = test.getDate()
year = test.getFullYear()
document.write(" ",month,"/",day,"/",year," ")*/

var elementPosition = $('#navbar-title').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
            $('#navbar-title').addClass('pastBanner')
        } else {
            $('#navbar-title').removeClass('pastBanner');
        }    
});