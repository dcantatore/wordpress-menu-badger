jQuery(window).load(function() {
	menuBadgeApplyBadge();
    	var menuItemC = "#" + badgeArray[3];

    //console.log(jQuery(menuItemC).position(), jQuery(menuItemC).offset());

});

function menuBadgeApplyBadge() {
	var menuItemC = "#" + badgeArray[3];
	var itemLocation = jQuery(menuItemC).offset();

    if (badgeArray[1] == ""){
        var leftBadgeLocation = itemLocation.left;
    } else {
     	var leftBadgeLocation = itemLocation.left + parseInt(badgeArray[1]);   
    };
    if (badgeArray[2] == ""){
        var topBadgeLocation = itemLocation.top;
    } else {
        var topBadgeLocation = itemLocation.top + parseInt(badgeArray[2]);
    };


	jQuery('body').append('<div id="divBadge"><img class="menuBadge" width="' + badgeArray[4] + '" height="' + badgeArray[4] + ' " src="' + badgeArray[0] + '"></div>');
	jQuery('.menuBadge').css("left", leftBadgeLocation);
	jQuery('.menuBadge').css("top", topBadgeLocation);
	if (itemLocation.left <= 0) {
		jQuery('.menuBadge').hide();

	}


}


function menuBadgeRelocateBadge() {
	var menuItemC = "#" + badgeArray[3];
	var itemLocation = jQuery(menuItemC).offset();
   if (badgeArray[1] == ""){
        var leftBadgeLocation = itemLocation.left;
    } else {
     	var leftBadgeLocation = itemLocation.left + parseInt(badgeArray[1]);   
    };
    if (badgeArray[2] == ""){
        var topBadgeLocation = itemLocation.top;
    } else {
        var topBadgeLocation = itemLocation.top + parseInt(badgeArray[2]);
    };
	jQuery('.menuBadge').css("left", leftBadgeLocation);
	jQuery('.menuBadge').css("top", topBadgeLocation);
	if (itemLocation.left <= 0) {
		jQuery('.menuBadge').hide();
    }
    if (itemLocation.left > 0) {
			jQuery('.menuBadge').show();
		}


}






var menuItemC = "#" + badgeArray[3];
var menuParentOne = "." + jQuery(menuItemC).parent().prop('className').split(" ").slice(0,1);
var menuParentTwo = "." + jQuery(menuItemC).parent().parent().prop('className').split(" ").slice(0,1);

if(menuParentTwo.length > 0){
jQuery(menuParentTwo).click(function(){
		
    setTimeout(function() {
		menuBadgeRelocateBadge();
	}, 500);
    jQuery('.menuBadge').fadeOut(500);
});
}

if(menuParentOne.length > 0){
jQuery(menuParentOne).click(function(){
		
    setTimeout(function() {
		menuBadgeRelocateBadge();
	}, 500);
    jQuery('.menuBadge').fadeOut(500);
});
}

jQuery(window).resize(function() {
	menuBadgeRelocateBadge()
});

jQuery(window).scroll(function() {
	menuBadgeRelocateBadge()
});
