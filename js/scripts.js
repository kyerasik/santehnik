jQuery(document).ready(function(){
	jQuery("#fon").css("width", jQuery(document).width());
	jQuery("#fon").css("height", jQuery(document).height());
    jQuery(".jcarousel").jcarousel({vertical: true});
	jQuery('.jcarousel').jcarouselAutoscroll({
		autostart: true,
		interval: 7000
	});
    jQuery(".jcarousel-control-prev")
        .on("jcarouselcontrol:active", function() {
            jQuery(this).removeClass("inactive");
        })
        .on("jcarouselcontrol:inactive", function() {
            jQuery(this).addClass("inactive");
        })
        .jcarouselControl({
            target: "-=1"
        });
    jQuery(".jcarousel-control-next")
        .on("jcarouselcontrol:active", function() {
            jQuery(this).removeClass("inactive");
        })
        .on("jcarouselcontrol:inactive", function() {
            jQuery(this).addClass("inactive");
        })
        .jcarouselControl({
            target: "+=1"
        });
    jQuery(".jcarousel-pagination")
        .on("jcarouselpagination:active", "a", function() {
            jQuery(this).addClass('active');
        })
        .on("jcarouselpagination:inactive", "a", function() {
            jQuery(this).removeClass("active");
        })
        .jcarouselPagination();
	jQuery(".mainmenu .body div ul li:last").addClass("last-child");
	jQuery("#phone form .right .time .item").click(function(){
		jQuery("#phone form .right .time .item").removeClass("active");
		jQuery(this).addClass("active");
	});
	jQuery(".content table").each(function(){ var tabletr=0;
		jQuery(this).find("tr").each(function(){ tabletr++;
			if (tabletr == 2) { jQuery(this).addClass("fon"); tabletr=0; }
			jQuery(this).find("td:last").addClass("last-child");
			jQuery(this).find("td:first").addClass("first-child");
		});
	});
	jQuery(".header .zakaz img").click(function(){
		jQuery("#fon").fadeIn(300);
		jQuery("#phone").fadeIn(300);
	});	
	
	
	jQuery(".content .specvyz img").click(function(){		jQuery("#fon").fadeIn(300);		jQuery("#phone").fadeIn(300);	});
	jQuery(".main_mobile_text_blk .specvyz2 a").click(function(){		jQuery("#fon").fadeIn(300);		jQuery("#phone").fadeIn(300);	});
	jQuery("#footer-forms").click(function(){		jQuery("#fon").fadeIn(300);		jQuery("#phone").fadeIn(300);	});
	
	
	
	jQuery(".callorder a").click(function(){
		jQuery("#fon").fadeIn(300);
		jQuery("#phone").fadeIn(300);
	});
	jQuery(".footer .body .col2 img").click(function(){
		jQuery("#fon").fadeIn(300);
		jQuery("#phone").fadeIn(300);
	});
	jQuery("#phone .close").click(function(){
		jQuery(this).parent("#phone").fadeOut(300);
		jQuery("body").find("#fon").fadeOut(300);
	});
	jQuery("#phone form .right .time .item").click(function(){
		jQuery(this).parent(".time").find("input").attr("value", jQuery(this).attr("data-text"));
	});
	jQuery("#phone form .right input[type=\"submit\"]").click(function(){
		if (jQuery("#phone form .right input[type=\"text\"]").eq(0).attr("value") == "Введите Ваше Имя") { jQuery("#phone form .right input[type=\"text\"]").eq(0).attr("value", ""); }
		if (jQuery("#phone form .right input[type=\"text\"]").eq(1).attr("value") == "Введите Ваш телефон") { jQuery("#phone form .right input[type=\"text\"]").eq(1).attr("value", ""); }
	});
	jQuery(".contact form input[type=\"submit\"]").click(function(){
		if (jQuery(".contact form input[type=\"text\"]").eq(0).attr("value") == "Введите Ваше Имя") { jQuery(".contact form input[type=\"text\"]").eq(0).attr("value", ""); }
		if (jQuery(".contact form input[type=\"text\"]").eq(1).attr("value") == "Введите Ваш телефон") { jQuery(".contact form input[type=\"text\"]").eq(1).attr("value", ""); }
	});

	jQuery('.outer-link').click(function () {
		window.open(jQuery(this).data('src'));
	})
	
	
	/* catalog new big */
	jQuery(".catalog_sb .left_sb_button").click(function(){
		if(jQuery('.c_sb_2').css('display') == 'none') {
			jQuery('.c_sb_2').show();
			jQuery('.c_sb_1').hide();
		} else {
			jQuery('.c_sb_1').show();
			jQuery('.c_sb_2').hide();
		}
	});
	jQuery(".catalog_sb .right_sb_button").click(function(){
		if(jQuery('.c_sb_2').css('display') == 'none') {
			jQuery('.c_sb_2').show();
			jQuery('.c_sb_1').hide();
		} else {
			jQuery('.c_sb_1').show();
			jQuery('.c_sb_2').hide();
		}
	});
	
	/* catalog new small */
	/*jQuery(".category_sb .left_sb_button_small").click(function(){
		if(jQuery('.c_sb_2').css('display') == 'none') {
			jQuery('.c_sb_2').show();
			jQuery('.c_sb_1').hide();
		} else {
			jQuery('.c_sb_1').show();
			jQuery('.c_sb_2').hide();
		}
	});
	jQuery(".category_sb .right_sb_button_small").click(function(){
		if(jQuery('.c_sb_2').css('display') == 'none') {
			jQuery('.c_sb_2').show();
			jQuery('.c_sb_1').hide();
		} else {
			jQuery('.c_sb_1').show();
			jQuery('.c_sb_2').hide();
		}
	});*/
	
});