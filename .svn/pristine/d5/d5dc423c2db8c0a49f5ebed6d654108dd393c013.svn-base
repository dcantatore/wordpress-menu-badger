<?php

if ( ! defined( 'ABSPATH' ) ) exit;

function menuBadgeAdminPage(){
?> 

<h2>Menu Badge Settings</h2>        
<form method="post" action="options.php" id="mainForm"> 
     <?php settings_fields( 'mb-option-group' ); 
    
    wp_enqueue_style('admin-badge', plugin_dir_url( __FILE__ ) . 'css/admin-badge.css');

    ?>
     <?php do_settings_sections( 'mb-option-group' ); ?>
<table>
	<tr height="75" >
		<th width="170">Enable Badge</th>
		<td width="70"><input id="true" type="radio" name="mb-option-1" value="true" <?php checked( 'true', get_option( 'mb-option-1' ) ); ?> />Yes</td>
		<td><input id="false" type="radio" name="mb-option-1"  value="false" <?php checked( 'false', get_option( 'mb-option-1' ) ); ?> />No</td>
	</tr>
    </table>
    <hr>
    <table>
    <tr>
       <th width="170" >Pick Your Menu Item</th>
        <td id="menuLocation">
        </td>
	</tr>
    </table>
<hr>
    <table>
        <tr>
	<th width="170">Badge Choice</th>
        
<?php  
    $imageFiles = array_diff(scandir( plugin_dir_path( __FILE__ ) . 'img/badges/', 1), array('..', '.','.DS_Store'));
    $lineBreak = 0;
    foreach ($imageFiles as $fileName){
    $lineBreak++;
    echo '<td class="imageButtonAlign"><input id="'
        . $fileName .
        '" type="radio" name="mb-option-2"  value="' 
       . $fileName .
       '"/><img class="admin-badge" src="' .  plugin_dir_url( __FILE__ ) . 'img/badges/'
        . $fileName .
       '"></td>';

    if ($lineBreak == 6){
     echo '</tr></table><table><tr><th width="170";></th>';   
    };
     if ($lineBreak == 12){
     echo '</tr></table><table><tr><th width="170";></th>';   
    };
    
    }; 
                    

            
            ?>  
        
		<td> <input id="customImage" type="radio" name="mb-option-2"  value="customImage" <?php checked( 'customImage', get_option( 'mb-option-2' ) ); ?> />
        <input type="text" name="mb-option-4"  value="<?php echo esc_attr( get_option('mb-option-4') ); ?>" id="mb-option-2" >
        <input type="button" name="upload-btn" id="upload-btn" value="Upload Image">
		</td>
	    </tr>
    </table>
   <br> <hr>
    <table>
        <tr height="150">
		<th width="170">Adjust Badge Location</th>
		<td>   <input id="sideAdjust" type="range" min="-100" max="100" step="1" oninput="menuBadgePrintValue('sideAdjust','sideAdjustValue')" value="<?php echo esc_attr( get_option('mb-option-3') ); ?>">
			<input id="sideAdjustValue" name="mb-option-3" type="text" size="4" oninput="adjustSlider('sideAdjust','sideAdjustValue')" value="<?php echo esc_attr( get_option('mb-option-3') ); ?>" >px
		</td>
		<td>   <input id="vertAdjust" type="range" min="-100" max="100" step="1" oninput="menuBadgeprintValueInvert('vertAdjust','vertAdjustValue')" value="<?php $rawVert = get_option('mb-option-5'); $invertSlide = $rawVert * -1;  echo esc_attr($invertSlide); ?>" class="vertical" orient="vertical"></td>
			<td><input id="vertAdjustValue" name="mb-option-5" type="text" size="4" oninput="adjustSliderInvert('vertAdjust','vertAdjustValue')" value="<?php echo esc_attr( get_option('mb-option-5') ); ?>" >px
            </td>
		
	</tr>
       
    </table><hr><table>        
    <tr>
       <th class="centerCell" >Badge Size</th>
         <td class="centerCell"><input id="small" type="radio" name="mb-option-7" value="25" <?php checked( '25', get_option( 'mb-option-7' ) ); ?> />Small<img width="25" src="<?php echo plugin_dir_url( __FILE__ ); ?>img/new-red-menu.png"></td>
		<td class="centerCell"><input id="medium" type="radio" name="mb-option-7"  value="50" <?php checked( '50', get_option( 'mb-option-7' ) ); ?> />Medium<img width="50" src="<?php echo plugin_dir_url( __FILE__ ); ?>img/new-red-menu.png"></td>   
        <td class="centerCell" ><input id="large" type="radio" name="mb-option-7"  value="80" <?php checked( '80', get_option( 'mb-option-7' ) ); ?> />Large<img width="80" src="<?php echo plugin_dir_url( __FILE__ ); ?>img/new-red-menu.png"></td>   
	</tr>    
        
</table>
    <?php submit_button(); ?>
</form>

<div >
<?php                               
//style="display:none;" get array of all menu locations & check for duplicates         
function menuFindOutput(){
	$menuItemLocations = get_nav_menu_locations();
	// define empty arrays to stuff data into
    $dchecked = array();
    $valCheck = array();
    foreach($menuItemLocations as $key => $value) {
		// add each value to the array
        $valCheck[] = $value;
		foreach($valCheck as $curVal) {
            // check each value in new empty array until it is no longer empty and contains them
			if (in_array($curVal, $dchecked)) {
			}
            // if it doesn't contain the  in the array put them in it and output 
            // that key currently associated with it into the menu
			else {
				$dchecked[] = $curVal;
				wp_nav_menu(array('theme_location' => $key));
			}
		}
	}
}
                              
menuFindOutput();
?>    
    

</div>


<script type="text/javascript">
// Makes the text box mirror the sliders value,location    
   function menuBadgePrintValue(sliderID, textbox) {
        var x = document.getElementById(textbox);
        var y = document.getElementById(sliderID);
        x.value = y.value;
      
    }
    
    function menuBadgeprintValueInvert(sliderID, textbox) {
        var x = document.getElementById(textbox);
        var y = document.getElementById(sliderID);
        x.value = y.value * -1;
      
    }
// Makes the slider mirror the text box value    
    
     function adjustSlider(sliderID, textbox) {
        var x = document.getElementById(textbox);
        var y = document.getElementById(sliderID); 
        y.value = x.value;
    }
    function adjustSliderInvert(sliderID, textbox) {
        var x = document.getElementById(textbox);
        var y = document.getElementById(sliderID); 
        y.value = x.value * -1;
    }  
</script>                         


<?php                        
wp_register_script( 'radio_menu', plugin_dir_url( __FILE__ ) . 'js/radio-menu.js');
$currentMenuItem = get_option('mb-option-6')  ;                    
wp_localize_script( 'radio_menu', 'currentMenuItem', $currentMenuItem);                         
wp_enqueue_script( 'radio_menu' );
                        }