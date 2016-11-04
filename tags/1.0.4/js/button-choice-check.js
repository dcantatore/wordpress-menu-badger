jQuery(window).load(function(){
// buttonChoice is variable passed from php that is database check for entry text
var pointAt = 'input[value="' + buttonChoice + '"]';
jQuery(pointAt).prop("checked", true);       
})