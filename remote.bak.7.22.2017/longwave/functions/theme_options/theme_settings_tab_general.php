<?php
/* ------------------------------------------------------------------------ *
 * Setting Registration
 * ------------------------------------------------------------------------ */ 
/**
 * Initializes the theme's display options page by registering the Sections,
 * Fields, and Settings.
 *
 * This function is registered with the 'admin_init' hook.
 */ 
function tb_longwave_initialize_theme_options() {

	// If the theme options don't exist, create them.
	if( false == get_option( 'tb_longwave_theme_general_options' ) ) {	
		add_option( 'tb_longwave_theme_general_options' );
	} // end if

	// First, we register a section. This is necessary since all future options must belong to a 
	add_settings_section(
		'tb_longwave_general_settings_section',			// ID used to identify this section and with which to register options
		'General Options',					// Title to be displayed on the administration page
		'tb_longwave_general_options_callback',	// Callback used to render the description of the section
		'tb_longwave_theme_general_options'		// Page on which to add this section of options
	);
	
	// Next, we'll introduce the fields for toggling the visibility of content elements.
	add_settings_field(	
		'tb_longwave_responsive_active',						// ID used to identify the field throughout the theme
		'Responsive Active?',							// The label to the left of the option interface element
		'tb_longwave_checkbox_callback',	// The name of the function responsible for rendering the option interface
		'tb_longwave_theme_general_options',	// The page on which this option will be displayed
		'tb_longwave_general_settings_section',			// The name of the section to which this field belongs
		array(								// The array of arguments to pass to the callback. In this case, just a description.
			'tb_longwave_responsive_active','tb_longwave_theme_general_options','Turn on responsive behaviour'
		)
	);
	
	add_settings_field(	
		'tb_longwave_full_active',						// ID used to identify the field throughout the theme
		'Full Layout?',							// The label to the left of the option interface element
		'tb_longwave_checkbox_callback',	// The name of the function responsible for rendering the option interface
		'tb_longwave_theme_general_options',	// The page on which this option will be displayed
		'tb_longwave_general_settings_section',			// The name of the section to which this field belongs
		array(								// The array of arguments to pass to the callback. In this case, just a description.
			'tb_longwave_full_active','tb_longwave_theme_general_options','Turn on the full view of the theme?'
		)
	);
	
	add_settings_field(	
		'tb_longwave_main_style',						
		'Theme Main Style',							
		'tb_longwave_select_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_main_style','tb_longwave_theme_general_options','The basic theme style.',array(array('light','light'),array('dark','dark'))
		)			
	);
	
	add_settings_field(	
		'tb_longwave_highlight_color',						
		'Theme Highlight Color',							
		'tb_longwave_color_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_highlight_color','tb_longwave_theme_general_options','The highlight color used throughout the theme.'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_highlight_hover_color',						
		'Theme Highlight Hover Color',							
		'tb_longwave_color_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_highlight_hover_color','tb_longwave_theme_general_options','The highlight hover color used throughout the theme.'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_main_font',						
		'Main Google Web Font URL',							
		'tb_longwave_input_url_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_main_font','tb_longwave_theme_general_options','The url of the google web font you would like to use throughout the theme(<a href=http://www.version-four.com/themeforest/onetouch/wp-content/uploads/2012/09/google_web_fonts.jpg target=_blank>Quick Help </a>).'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_main_fontfamily',						
		'Main Font Family',							
		'tb_longwave_input_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_main_fontfamily','tb_longwave_theme_general_options','The font family of the font used for the main menu (<a href=http://www.version-four.com/themeforest/onetouch/wp-content/uploads/2012/09/google_web_fonts.jpg target=_blank>Quick Help if you use Google Fonts</a>).'
		)			
	);

	add_settings_field(	
		'tb_longwave_favicon_icon',						
		'Shortcut/FavIcon',
		'tb_longwave_image_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_favicon_icon','tb_longwave_theme_general_options','The URL to your shortcut png file.'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_css',						
		'Custom CSS',							
		'tb_longwave_textarea_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_css','tb_longwave_theme_general_options','Add Custom CSS here that will work in the theme. We recommend using a child theme anyway, this is only a quick workaround.'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_analytics',						
		'Google Analytics',							
		'tb_longwave_textarea_callback',	
		'tb_longwave_theme_general_options',	
		'tb_longwave_general_settings_section',
		array(
			'tb_longwave_analytics','tb_longwave_theme_general_options','Insert your Google Analytics code here, it will be put in the footer. But we recommend using a plugin for doing that, this is only a quick workaround!'
		)			
	);

		
	// Finally, we register the fields with WordPress
	register_setting(
		'tb_longwave_theme_general_options',
		'tb_longwave_theme_general_options'
	);
	
} // end tb_longwave_initialize_theme_options
add_action( 'admin_init', 'tb_longwave_initialize_theme_options' );

/* ------------------------------------------------------------------------ *
 * Section Callbacks
 * ------------------------------------------------------------------------ */ 
function tb_longwave_general_options_callback() {
	echo '<p>Some options that have effect throughout the theme.</p>';
} // end tb_longwave_general_options_callback

/* ------------------------------------------------------------------------ *
 * Setting Callbacks
 * ------------------------------------------------------------------------ */ 
 
 /**
 * Sanitization callback for the social options. Since each of the social options are text inputs,
 * this function loops through the incoming option and strips all tags and slashes from the value
 * before serializing it.
 *	
 * @params	$input	The unsanitized collection of options.
 *
 * @returns			The collection of sanitized values.
 */
function tb_longwave_theme_sanitize_general_options( $input ) {
	
	// Define the array for the updated options
	$output = array();

	// Loop through each of the options sanitizing the data
	foreach( $input as $key => $val ) {
	
		if( isset ( $input[$key] ) ) {
			$output[$key] = esc_url_raw( strip_tags( stripslashes( $input[$key] ) ) );
		} // end if	
	
	} // end foreach
	
	// Return the new collection
	return apply_filters( 'tb_longwave_theme_sanitize_general_options', $output, $input );

} // end tb_longwave_theme_sanitize_header_options
?>