<?php
/**
 * Initializes the theme's input example by registering the Sections,
 * Fields, and Settings. This particular group of options is used to demonstration
 * validation and sanitization.
 *
 * This function is registered with the 'admin_init' hook.
 */ 
function tb_longwave_theme_initialize_header_options() {

	if( false == get_option( 'tb_longwave_theme_header_options' ) ) {	
		add_option( 'tb_longwave_theme_header_options' );
	} // end if

	add_settings_section(
		'tb_longwave_header_options_section',
		'Header Options',
		'tb_longwave_header_options_callback',
		'tb_longwave_theme_header_options'
	);
	
	add_settings_field(	
		'tb_longwave_header_logo',						
		'Logo',
		'tb_longwave_image_callback',	
		'tb_longwave_theme_header_options',	
		'tb_longwave_header_options_section',
		array(
			'tb_longwave_header_logo','tb_longwave_theme_header_options','The site logo used in the header area.'
		)			
	);
	
	add_settings_field(	
		'tb_longwave_header_logo_responsive',						
		'Retina Logo @2x',
		'tb_longwave_image_callback',	
		'tb_longwave_theme_header_options',	
		'tb_longwave_header_options_section',
		array(
			'tb_longwave_header_logo_responsive','tb_longwave_theme_header_options','The site logo used in the header area(please name exactly like the logo but with an "@2x" in the base name, example logo.png -> logo@2x.png , and size it exactly twice as big as the normal logo).'
		)			
	);
		
	register_setting(
		'tb_longwave_theme_header_options',
		'tb_longwave_theme_header_options',
		'tb_longwave_theme_validate_header_options'
	);

} // end tb_longwave_theme_initialize_header_options
add_action( 'admin_init', 'tb_longwave_theme_initialize_header_options' );


/* ------------------------------------------------------------------------ *
 * Section Callbacks
 * ------------------------------------------------------------------------ */ 
/**
 * This function provides a simple description for the Input Examples page.
 *
 * It's called from the 'tb_longwave_theme_intialize_header_options_options' function by being passed as a parameter
 * in the add_settings_section function.
 */
function tb_longwave_header_options_callback() {
	echo '<p>Settings for things visible in the Head of the theme.</p>';
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
function tb_longwave_theme_validate_header_options( $input ) {

	// Create our array for storing the validated options
	$output = array();
	
	// Loop through each of the incoming options
	foreach( $input as $key => $value ) {
		
		// Check to see if the current option has a value. If so, process it.
		if( isset( $input[$key] ) ) {
		
			// Strip all HTML and PHP tags and properly handle quoted strings
			$output[$key] = strip_tags( stripslashes( $input[ $key ] ) );
			
		} // end if
		
	} // end foreach
	
	// Return the array processing any additional functions filtered by this action
	return apply_filters( 'tb_longwave_theme_validate_header_options', $output, $input );

} // end tb_longwave_theme_validate_header_options
