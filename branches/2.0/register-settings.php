<?php

if ( ! defined( 'ABSPATH' ) ) exit;

// make buttonTotal 0,7,7,7... on add button click
foreach($buttonTotal as $button){
function menuBadgeRegSettings(){ 
$all-mb-option[] = mb-option . 1 + $button;
$all-mb-option[] = mb-option . 2 + $button;
$all-mb-option[] = mb-option . 3 + $button;
$all-mb-option[] = mb-option . 4 + $button;
$all-mb-option[] = mb-option . 5 + $button;    
$all-mb-option[] = mb-option . 6 + $button;
$all-mb-option[] = mb-option . 7 + $button;
    
register_setting( 'mb-option-group', $all-mb-option[0] );
register_setting( 'mb-option-group', $all-mb-option[1] );
register_setting( 'mb-option-group', $all-mb-option[2] );
register_setting( 'mb-option-group', $all-mb-option[3] );
register_setting( 'mb-option-group', $all-mb-option[4] );
register_setting( 'mb-option-group', $all-mb-option[5] );
register_setting( 'mb-option-group', $all-mb-option[6] );    
}
};

?>