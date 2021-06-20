var images=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deliuxe Veg Pizza"];

function getmenu()
{
    var htmldata;
    htmldata="<ol class='menulist'>"
    images.sort();
    for(var i=0; i<images.length; i++)
    {
        htmldata=htmldata+'<li>'+images[i]+'</li>';
        
    }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;


}
function add_item()
{
    var htmldata;
    var item=document.getElementById("add_item").value;
    images.push(item);
    images.sort();
    htmldata="<section class=card>";
    for(var i=0; i<images.length;i++)
    {
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png">'+images[i]+'</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;

}