//Creates Dynamic Menu from users menu items that then makes them into radio box selection

//Make menu items into parts 
jQuery(document).ready(function($){
function menuBadgeMakeMenu(){
//makes array of data
var menuItems = jQuery(".menu-item").toArray();

for(x in menuItems){ 
// Function to ignore element types when named
jQuery.fn.ignore = function(sel){
  return this.clone().find(sel||">*").remove().end();
};

var menuAttrib = menuItems[x].getAttribute("id");
// hides ul elements that are submenu items and complicate text
var menuWords = jQuery(menuItems[x]).ignore("ul").text();
  
jQuery("#menuLocation").append('<tr><td><input type="radio" id="' 
                               + menuAttrib  + 
                               '" name="mb-option-6" value="' 
                               + menuAttrib + 
                               '" if('
                               + currentMenuItem +
                               '= '
                              + menuAttrib +
                               '"){checked};/><b>'
                              + menuWords +
                               '</b></td></tr>'
                              );
// Check box with variable passed from PHP plus # to find the ID
var menuId = "#" + menuAttrib;
if(currentMenuItem == menuAttrib){
    jQuery(menuId).prop("checked", true);

}
}}
     
    
    
 menuBadgeMakeMenu()   
});
    