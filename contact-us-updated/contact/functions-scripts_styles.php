<?php

 // -----------------------------------------------------------------------------
 //! Scripts
 // -----------------------------------------------------------------------------

if (!is_admin()) add_action("wp_enqueue_scripts", "my_jquery_enqueue", 11);

function my_jquery_enqueue() {
	wp_deregister_script('jquery');
	wp_register_script('jquery', get_template_directory_uri() . '/build/js/jquery.min.js', false, null);
	wp_enqueue_script('jquery');
}


// -----------------------------------------------------------------------------
//! Load Scripts
// -----------------------------------------------------------------------------

function atmo_load_scripts() {
	

	wp_register_script( 'atmo_scripts', get_template_directory_uri() . '/build/js/theme.min.js', array('jquery'), filemtime(get_theme_file_path('/build/js/theme.min.js')), true  );
	wp_enqueue_script( 'atmo_scripts' );
	
	
	// -----------------------------------------------------------------------------
	//! Set Ajax Localized Variable
	// -----------------------------------------------------------------------------
	
	$localized = [
			'ajaxUrl' => admin_url( 'admin-ajax.php' ),
			'siteUrl' => get_site_url(),
			'themeDir' => get_bloginfo('template_url')
	];
	
	//Products Pages
	wp_register_script( 'restAPI-products-js', get_template_directory_uri() . '/build/js/restAPI-products.js', array( 'jquery' ), filemtime(get_theme_file_path('/build/js/restAPI-products.js')), true );
	wp_localize_script( 'restAPI-products-js', 'localized', $localized );
	if(is_page_template( 'template-research.php' )){
		wp_enqueue_script('restAPI-products-js', get_template_directory_uri() . '/build/js/restAPI-products.js', array('jquery'), '3', true);
	}
	
	//Reps Pages
	wp_register_script( 'restAPI-reps-js', get_template_directory_uri() . '/build/js/restAPI-reps.js', array( 'jquery' ), filemtime(get_theme_file_path('/build/js/restAPI-reps.js')), true );
	wp_localize_script( 'restAPI-reps-js', 'localized', $localized );
	if(is_page( 'institutional-sales-contacts' )){
		wp_enqueue_script('restAPI-reps-js', get_template_directory_uri() . '/build/js/restAPI-reps.js', array('jquery'), '3', true);
	}
	
}
add_action( 'wp_enqueue_scripts', 'atmo_load_scripts' );

// -----------------------------------------------------------------------------
//! Styles
// -----------------------------------------------------------------------------

function atmo_load_styles() {
	wp_register_style( 'atmo_styles', get_template_directory_uri() . '/build/css/theme.min.css', false, filemtime(get_theme_file_path('/build/css/theme.min.css')), 'all' );
	wp_enqueue_style( 'atmo_styles' );
	
	wp_register_style( 'custom_styles', get_template_directory_uri() . '/custom.css', false, filemtime(get_theme_file_path('/custom.css')), 'all' );
	wp_enqueue_style( 'custom_styles' );
}
add_action( 'wp_enqueue_scripts', 'atmo_load_styles' );


// -----------------------------------------------------------------------------
//! Remove Gutenberg Block Library CSS from loading on the frontend
// -----------------------------------------------------------------------------
function remove_wp_block_library_css(){
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
}
add_action( 'wp_enqueue_scripts', 'remove_wp_block_library_css', 100 );



// -----------------------------------------------------------------------------
//! Connect with us contact form 
// -----------------------------------------------------------------------------

function my_custom_scripts() {
    // Enqueue contact-scripts.js
    wp_enqueue_script('contact-scripts', get_template_directory_uri() . '/src/js/components/contact-scripts.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'my_custom_scripts');


// -----------------------------------------------------------------------------
//! Subsriber support page
// -----------------------------------------------------------------------------

function enqueue_support_script() {
    wp_enqueue_script('support-script', get_template_directory_uri() . '/src/js/components/contact-scripts.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_support_script');



