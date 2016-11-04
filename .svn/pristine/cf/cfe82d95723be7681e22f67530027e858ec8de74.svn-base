<?php
/*
Plugin Name: Menu Badger
Plugin URI: http://wordpress.org/menu-badger
Description: The easiest to use plugin for adding badges to your menus. 
Version: 1.0.3
Author: Dario Cantatore @ Squid Stack
Author URI: http://squidstack.com
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: menu-badger
*/

if ( ! defined( 'ABSPATH' ) ) exit;

wp_enqueue_script('jquery');
$pluginURL = plugin_dir_url( __FILE__ );
$pluginDir = plugin_dir_path( __FILE__ );


//sets up media file uploader                         
function menuBadgeLoadMediaFiles() {
    wp_enqueue_media();
}


// make buttonTotal 0,7,7,7... on add button click
foreach($buttonTotal as $button){
$all-mb-option[] = mb-option . 1 + $button;
$all-mb-option[] = mb-option . 2 + $button;
$all-mb-option[] = mb-option . 3 + $button;
$all-mb-option[] = mb-option . 4 + $button;
$all-mb-option[] = mb-option . 5 + $button;    
$all-mb-option[] = mb-option . 6 + $button;
$all-mb-option[] = mb-option . 7 + $button;

wp_register_script( 'badgeDisplay',  plugin_dir_url( __FILE__ ) . 'js/badge.js');
$sideAdjust = get_option( $all-mb-option[2] );
$vertAdjust = get_option( $all-mb-option[4] );
$menuItem = get_option( $all-mb-option[5] );
$badgeSize = get_option( $all-mb-option[6] );
if (get_option($all-mb-option[1]) == customImage){
    $badgeImage = get_option( $all-mb-option[3]);
}
    else{   
        $badgeImage =  plugin_dir_url( __FILE__ ) . "img/badges/" . get_option( $all-mb-option[1]);
}
$badgeArray = array($badgeImage,$sideAdjust,$vertAdjust,$menuItem,$badgeSize);                

    
// If button enabled, load javascript to execute function
function menuBadgeApplyBadge($badgeArray){
$optionNameOne = get_option( $all-mb-option[0] );
 if( $optionNameOne == 'true'){ 
     wp_localize_script( 'badgeDisplay', 'badgeArray', $badgeArray); 
     wp_enqueue_script('badgeDisplay');
     wp_enqueue_script('jquery');
    wp_enqueue_style('badge', plugin_dir_url( __FILE__ ) . 'css/badge.css');
    }
}
    
    
    function menuBadgeButtonChoiceCheck(){
wp_register_script( 'menuBadgeButtonChoiceCheck',  plugin_dir_url( __FILE__ ) . 'js/button-choice-check.js');
$buttonChoice = get_option( $all-mb-option[0] );
wp_localize_script( 'menuBadgeButtonChoiceCheck', 'buttonChoice', $buttonChoice); 
wp_enqueue_script('menuBadgeButtonChoiceCheck');
}
    

}





    

    
    
    
    
    
    
    
    
    






include 'register-settings.php';

//creates admin menu
add_action('admin_menu', 'mb_admin_menus');
//registers my options to be saved
add_action( 'admin_init', 'menuBadgeRegSettings' );
// loads main function if enabled
add_action( 'wp_head', 'menuBadgeApplyBadge' );
// load media uploader for custom image 
add_action( 'admin_enqueue_scripts', 'menuBadgeLoadMediaFiles' );
// load check for button from database for generated buttons from image directory
add_action('admin_menu', 'menuBadgeButtonChoiceCheck');
// loads script for image uploader
add_action('admin_menu', 'menuBadgeImageUploader');


function menuBadgeImageUploader(){
wp_enqueue_script(image-uploader, plugin_dir_url( __FILE__ ) . 'js/image-uploader.js');
}

//admin page
include 'admin-page.php';
function mb_admin_menus(){
    add_menu_page('Menu Badge Options','Menu Badges','administrator','mb_admin_page','menuBadgeAdminPage',  plugin_dir_url( __FILE__ ) . 'img/new-red-ico.png');
}

           
                         
                         
                         
                         
                         
                      




/* 9 Settings */