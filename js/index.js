$(function(){
	var $control_cats = $('.control_cats'),
		$container = $('.container'),
		$control_wrapper = $('.control_wrapper'),
		$my_icon_box = $('.my_icon_box'),
		$my_photo = $('.my_photo'),
		$my_name_box = $('.my_name_box'),
		$tap_1 = $('.tap_1'),
		$tap_2 = $('.tap_2'),
		$tap_3 = $('.tap_3'),
		$tap_4 = $('.tap_4'),
		$hover_me = $('.hover_me'),
		$my_skill = $('.my_skill'),
		$my_skill_row_div = $('.my_skill_row>div'),
		$my_intern = $('.my_intern'),
		$my_intern_cont = $('.my_intern_cont'),
		$my_exp = $('.my_exp'),
		$my_exp_box = $('.my_exp_box'),
		$tv_btn = $('.tv_btn'),
		$tv_blank = $('.tv_blank'),
		$tv_blank_up = $('.tv_blank_up'),
		$tv_blank_down = $('.tv_blank_down'),
		$control_btn = $('.control_btn'),
		$works = $('.works'),
		$wrapper = $('.wrapper'),
		$work_wrapper = $('.work_wrapper'),
		$tv_hand = $('.tv_hand'),
		$work_header = $('.work_header'),
		$back_btn = $('.back_btn'),
		$q_list = $('.q_list'),
		$q_list_1 = $('.q_list_1'),
		$q_list_2 = $('.q_list_2'),
		$q_list_3 = $('.q_list_3'),
		$q_list_4 = $('.q_list_4'),
		$q_list_5 = $('.q_list_5'),
		$q_list_cont = $('.q_list_cont'),
		$a_pre = $('.a_pre'),
		$view_off = $('.view_off'),
		$welcome_work_p = $('.welcome_work_p'),
		$my_pic_work = $('.my_pic_work'),
		$my_pic = $('.my_pic_box>.my_pic'),
		$my_a_box = $('.my_a_box'),
		$view = $('.view'),
		$welcome_work_p = $('.welcome_work_p'),
		$q_list_num = $('.q_list_num'),
		$a_1 = $('.a_1'),
		$a_2 = $('.a_2'),
		$a_3 = $('.a_3'),
		$a_4 = $('.a_4'),
		$a_5 = $('.a_5'),
		$a_1_p = $('.a_1_p'),
		$a_2_p = $('.a_2_p'),
		$a_3_p = $('.a_3_p'),
		$a_4_p = $('.a_4_p'),
		$a_5_p = $('.a_5_p'),
		$a_2_img = $('.a_2_img'),
		$a_2_img_img = $('.a_2_img_img'),
		$a_4_img_cry = $('.a_4_img_cry'),
		$a_4_img_flash = $('.a_4_img_flash'),
		$gototop = $('#gototop'),
		$gototop_on = $('#gototop_on'),
		$body = $('body'),
		$gototop_p = $('#gototop>p'),
		$gototop_arrow = $('#gototop>.arrow'),
		$gototop_bow = $('#gototop>.bow'),
		$gototop_on_arrow = $('#gototop_on>.arrow'),
		$tv_ps = $('.tv_ps'),
		$control_view = $('.control_view');


	// 电视垂直居中
	function tvMiddle(){
		var v_height = $('.tv_wrapper').height();
		var w_height = $(window).height();		
		var padding_top_num = (w_height - v_height)/2 ; 
		if (padding_top_num<75) {
			padding_top_num = 75;
		};
		console.log(w_height +"/" +v_height +"/" +padding_top_num);
		var padding_top = "padding-top:" + padding_top_num + "px"; 
		$container.attr('style',padding_top);
		console.log('暂不支持低版本IE，后续更新！--From Apollozz')
	}
	tvMiddle();

	$my_pic.hover(function(){
		$my_pic.attr('data-status','hover');
	},function(){
		removeHoverMe();
	});

	// 提醒hover me
	function hoverMe(){
		$hover_me.show();
		setTimeout(function(){
			$hover_me.addClass('hover_me_move');
		},500);
	}
	hoverMe();

	// hover me消失
	function removeHoverMe(){
		$hover_me.hide();
		setTimeout(function(){
			$hover_me.removeClass('hover_me_move');
		},100);
	}
	

	// 把个人资料移到左侧
	function fileLeft(){
		removeHoverMe();
		$my_icon_box.fadeOut(200);
		setTimeout(function(){
			$my_photo.addClass('my_photo_move');
			$my_name_box.addClass('my_name_box_move');
			$tap_1.addClass('tap_1_move');
			$tap_2.addClass('tap_2_move');
			$tap_3.addClass('tap_3_move');
			$tap_4.addClass('tap_4_move');
		},200);
	}

	// 点击时去掉所有的动画
	function tvContChange(){
		$my_skill.hide();
		$my_intern.hide();
		$my_exp.hide();
		setTimeout(function(){
			$my_skill_row_div.removeClass('my_skill_move');
			$my_intern_cont.removeClass('my_intern_cont_move');
			$my_exp_box.eq(0).removeClass('my_exp_box_1_move');
			$my_exp_box.eq(1).removeClass('my_exp_box_2_move');
			$my_exp_box.eq(2).removeClass('my_exp_box_3_move');
		},100);
	}

	// 遥控器上点击不同资料按钮，电视内容切换
	$control_cats.click(function(){	
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {
			$control_cats.removeClass('cats_active').addClass('cats_negative');
			$(this).addClass('cats_active').removeClass('cats_negative');
			var cats_index = $(this).index();
			// 点击个人资料
			if (cats_index == 0) {
				var my_pic_hover = $my_pic.attr('data-status');
				if (my_pic_hover != "hover") {
					hoverMe();
				};
				$my_intern.removeClass('my_intern_move');
				$my_photo.removeClass('my_photo_move');
				$my_name_box.removeClass('my_name_box_move');
				$tap_1.removeClass('tap_1_move');
				$tap_2.removeClass('tap_2_move');
				$tap_3.removeClass('tap_3_move');
				$tap_4.removeClass('tap_4_move');
				$my_icon_box.delay(500).fadeIn(500);
				tvContChange();
			}
			// 点击掌握技能
			else if(cats_index == 1){
				tvContChange();
				fileLeft();
				$my_skill.show();
				setTimeout(function(){
					$my_skill_row_div.addClass('my_skill_move');
				},200);
				
			}
			// 点击前端实习
			else if(cats_index == 2){
				tvContChange();
				fileLeft();
				$my_intern.show();
				setTimeout(function(){
					$my_intern_cont.addClass('my_intern_cont_move');
				},200);
			}
			// 点击其他经历
			else if (cats_index == 3) {
				tvContChange();
				fileLeft();
				$my_exp.show();
				setTimeout(function(){
					$my_exp_box.eq(0).addClass('my_exp_box_1_move');
					$my_exp_box.eq(1).addClass('my_exp_box_2_move');
					$my_exp_box.eq(2).addClass('my_exp_box_3_move');
				},200);	
			}
		}
		else{
			$tv_ps.addClass('tv_ps_move');
		}
		
	});

	// 电视开关控制
	function tv_on_off(){
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {
			$tv_blank.show();
			$tv_btn.data('status','off');
			setTimeout(function(){
				$tv_blank_up.addClass('tv_blank_up_move');
				$tv_blank_down.addClass('tv_blank_down_move');
			},100);
		}
		else if(data_status == "off"){
			$tv_ps.removeClass('tv_ps_move');
			$tv_blank.fadeOut(400);
			$tv_btn.data('status','on');
			setTimeout(function(){
				$tv_blank_up.removeClass('tv_blank_up_move');
				$tv_blank_down.removeClass('tv_blank_down_move');			
			},500);
		}
	}

	// 点击电视上的开关
	$tv_btn.click(function(){
		tv_on_off();
	});

	// 点击遥控器上的开关
	$control_btn.click(function(){
		tv_on_off();
	});

	// 点击“更多作品展示”按钮
	$works.click(function(){
		var data_status = $tv_btn.data('status');
		if (data_status == "on") {
			
			$tv_hand.addClass('tv_hand_move');
			$work_header.show();
			setTimeout(function(){
				tv_on_off();
				$work_wrapper.show();					
			},800);
			setTimeout(function(){
				$wrapper.addClass('wrapper_move');
				$tv_hand.removeClass('tv_hand_move');
				$work_header.addClass('work_header_move');
			},1500);
			setTimeout(function(){
				$body.addClass('body_move');
				$work_header.addClass('work_header_now');
			},2500);
		}
		else{			
			$work_wrapper.show();
			$work_header.show();
			setTimeout(function(){				
				$wrapper.addClass('wrapper_move');
				$tv_hand.removeClass('tv_hand_move');
				$work_header.addClass('work_header_move');
			},200);
			setTimeout(function(){
				$work_header.addClass('work_header_now');
				$body.addClass('body_move');
			},1200);
		}
	});

	// 点击“回看电视”按钮
	$back_btn.click(function(){		
		$work_header.removeClass('work_header_now');
		setTimeout(function(){
			$wrapper.removeClass('wrapper_move');
			$work_header.removeClass('work_header_move');
		},200);
		setTimeout(function(){
			$body.removeClass('body_move');
			$work_wrapper.hide();
			$work_header.hide();
			$tv_hand.addClass('tv_hand_move');
		},1200);
		setTimeout(function(){
			tv_on_off();
		},2000);
		setTimeout(function(){
			$tv_hand.removeClass('tv_hand_move');
		},2200);
	});

	// 一键面试-标题出现
	function showQList(){
		$view.show();
		var time = new Date().getHours();
		if (time > 5 && time < 12){
			$welcome_work_p.text('亲爱的面试官，早上好！');
		}
		else if (time >= 12 && time <14){
			$welcome_work_p.text('面试官中午好，吃饭了吗？');
		}
		else if (time >= 14 && time < 19){
			$welcome_work_p.text('亲爱的面试官，下午好！');
		}
		else if (time >= 19 && time < 24){
			$welcome_work_p.text('亲爱的面试官，晚上好！');
		}
		else {
			$welcome_work_p.text('夜猫子面试官，你好！');
		}
		setTimeout(function(){
			$welcome_work_p.addClass('welcome_work_p_move');
		},100);
		setTimeout(function(){
			$welcome_work_p.fadeOut(100);
			$my_pic_work.addClass('my_pic_work_move');
			$my_a_box.addClass('my_a_box_move');
		},2200)
		setTimeout(function(){
			$q_list.addClass('q_list_move');
		},3200);
		setTimeout(function(){
			$q_list_1.addClass('q_list_1_move');
			$q_list_2.addClass('q_list_2_move');
			$q_list_3.addClass('q_list_3_move');
			$q_list_4.addClass('q_list_4_move');
			$q_list_5.addClass('q_list_5_move');
		},3700);
		setTimeout(function(){
			$q_list_cont.eq(0).fadeIn(300);
			$q_list_cont.eq(1).delay(200).fadeIn(300);
			$q_list_cont.eq(2).delay(400).fadeIn(300);
			$q_list_cont.eq(3).delay(600).fadeIn(300);
			$q_list_cont.eq(4).delay(800).fadeIn(300);
			$a_pre.addClass('a_pre_move');
		},4700);
		setTimeout(function(){
			$view_off.addClass('view_off_move');
		},5400);
	}


	
	// 点击一键面试
	$control_view.click(function(){
		showQList();
	});

	// 关闭一键面试
	$view_off.click(function(){
		// 隐藏view
		$view.hide();
		$welcome_work_p.removeClass('welcome_work_p_move');
		$welcome_work_p.show();
		$my_pic_work.removeClass('my_pic_work_move');
		$my_a_box.removeClass('my_a_box_move');
		$q_list.removeClass('q_list_move');
		$q_list_1.removeClass('q_list_1_move');
		$q_list_2.removeClass('q_list_2_move');
		$q_list_3.removeClass('q_list_3_move');
		$q_list_4.removeClass('q_list_4_move');
		$q_list_5.removeClass('q_list_5_move');
		$q_list_cont.hide();
		$a_pre.removeClass('a_pre_move');
		$view_off.removeClass('view_off_move');
		$a_pre.show();
		qListMoveOut();
	});

	// 去掉所有问题的动画
	function qListMoveOut(){
		$a_pre.hide();
		$a_1.hide();
		$a_2.hide();
		$a_3.hide();
		$a_4.hide();
		$a_5.hide();

		$a_1_p.eq(0).removeClass('a_1_p_1');
		$a_1_p.eq(1).removeClass('a_1_p_2');
		$a_1_p.eq(2).removeClass('a_1_p_3');
		$a_1_p.eq(3).removeClass('a_1_p_4');
		$a_1_p.eq(4).removeClass('a_1_p_5');
		$a_1_p.eq(5).removeClass('a_1_p_6');
		$a_1_p.eq(6).removeClass('a_1_p_7');
		$a_1_p.eq(7).removeClass('a_1_p_8');

		$a_2_p.eq(0).removeClass('a_2_p_1');
		$a_2_p.eq(1).removeClass('a_2_p_2');
		$a_2_p.eq(2).removeClass('a_2_p_3');
		$a_2_p.eq(3).removeClass('a_2_p_4');
		$a_2_p.eq(4).removeClass('a_2_p_5');
		$a_2_img.removeClass('a_2_img_show');
		$a_2_img_img.removeClass('a_2_img_img_move');

		$a_3_p.eq(0).removeClass('a_3_p_1');
		$a_3_p.eq(1).removeClass('a_3_p_2');
		$a_3_p.eq(2).removeClass('a_3_p_3');
		$a_3_p.eq(3).removeClass('a_3_p_4');
		$a_3_p.eq(4).removeClass('a_3_p_5');
		$a_3_p.eq(5).removeClass('a_3_p_6');

		$a_4_p.eq(0).removeClass('a_4_p_1');
		$a_4_p.eq(1).removeClass('a_4_p_2');
		$a_4_p.eq(2).removeClass('a_4_p_3');
		$a_4_p.eq(3).removeClass('a_4_p_4');
		$a_4_p.eq(4).removeClass('a_4_p_5');
		$a_4_p.eq(5).removeClass('a_4_p_6');
		$a_4_img_cry.removeClass('a_4_img_cry_move');
		$a_4_img_flash.removeClass('a_4_img_flash_move');

		$a_5_p.eq(0).removeClass('a_5_p_1');
		$a_5_p.eq(1).removeClass('a_5_p_2');
		$a_5_p.eq(2).removeClass('a_5_p_3');
		$a_5_p.eq(3).removeClass('a_5_p_4');
		$a_5_p.eq(4).removeClass('a_5_p_5');
		$a_5_p.eq(5).removeClass('a_5_p_6');
		$a_5_p.eq(6).removeClass('a_5_p_7');
		$a_5_p.eq(7).removeClass('a_5_p_8');
	}

	// 第一个问题答案出现
	$q_list_num.eq(0).click(function(){
		qListMoveOut();
		$a_1.show();
		setTimeout(function(){
			$a_1_p.eq(0).addClass('a_1_p_1');
			$a_1_p.eq(1).addClass('a_1_p_2');
			$a_1_p.eq(2).addClass('a_1_p_3');
			$a_1_p.eq(3).addClass('a_1_p_4');
			$a_1_p.eq(4).addClass('a_1_p_5');
			$a_1_p.eq(5).addClass('a_1_p_6');
			$a_1_p.eq(6).addClass('a_1_p_7');
			$a_1_p.eq(7).addClass('a_1_p_8');
		},100);
	})

	//第二个问题答案出现
	$q_list_num.eq(1).click(function(){
		qListMoveOut();
		$a_2.show();
		setTimeout(function(){
			$a_2_p.eq(0).addClass('a_2_p_1');
			$a_2_p.eq(1).addClass('a_2_p_2');
			$a_2_p.eq(2).addClass('a_2_p_3');
			$a_2_p.eq(3).addClass('a_2_p_4');
			$a_2_p.eq(4).addClass('a_2_p_5');
			$a_2_img.addClass('a_2_img_show');
			$a_2_img_img.addClass('a_2_img_img_move');
		},100);
	});

	// 第三个问题答案出现
	$q_list_num.eq(2).click(function(){
		qListMoveOut();
		$a_3.show();
		setTimeout(function(){
			$a_3_p.eq(0).addClass('a_3_p_1');
			$a_3_p.eq(1).addClass('a_3_p_2');
			$a_3_p.eq(2).addClass('a_3_p_3');
			$a_3_p.eq(3).addClass('a_3_p_4');
			$a_3_p.eq(4).addClass('a_3_p_5');
			$a_3_p.eq(5).addClass('a_3_p_6');
		},100);
	});

	// 第四个问题答案出现
	$q_list_num.eq(3).click(function(){
		qListMoveOut();
		$a_4.show();
		setTimeout(function(){
			$a_4_p.eq(0).addClass('a_4_p_1');
			$a_4_p.eq(1).addClass('a_4_p_2');
			$a_4_p.eq(2).addClass('a_4_p_3');
			$a_4_p.eq(3).addClass('a_4_p_4');
			$a_4_p.eq(4).addClass('a_4_p_5');
			$a_4_p.eq(5).addClass('a_4_p_6');
			$a_4_img_cry.addClass('a_4_img_cry_move');
			$a_4_img_flash.addClass('a_4_img_flash_move');
		},100);
	});

	// 第五个问题答案出现
	$q_list_num.eq(4).click(function(){
		qListMoveOut();
		$a_5.show();
		setTimeout(function(){
			$a_5_p.eq(0).addClass('a_5_p_1');
			$a_5_p.eq(1).addClass('a_5_p_2');
			$a_5_p.eq(2).addClass('a_5_p_3');
			$a_5_p.eq(3).addClass('a_5_p_4');
			$a_5_p.eq(4).addClass('a_5_p_5');
			$a_5_p.eq(5).addClass('a_5_p_6');
			$a_5_p.eq(6).addClass('a_5_p_7');
			$a_5_p.eq(7).addClass('a_5_p_8');
		},100);
	});


	// 回到顶部
	function gotoTop(min_height,more_height){
		$gototop.hover(function(){
			$gototop_p.text('不如回到顶部再看一遍');
		},function(){
			$gototop_p.text('哎呀！已經沒有啦');
		});
		// 回到顶部按钮点击后向上平滑滚动
		$gototop.click(function(){
			$gototop_on.show();
			$('body,html').animate({scrollTop:0},400);
			$gototop_on.show();
			$gototop_on_arrow.addClass('arrow_move');
			$gototop_on.fadeOut(1000);
			$gototop_arrow.hide();
			$gototop_bow.hide();
			$gototop_p.hide();
			setTimeout(function(){
				$gototop_on_arrow.removeClass('arrow_move');
				$gototop_arrow.show();
				$gototop_bow.show();
				$gototop_p.show();
			},1400);
		});

		$(window).scroll(function(){
			// 获取当前滚动条的垂直位置
			var cur_h = $(window).scrollTop();
			// 如果窗口的滚动条的垂直位置大于页面的最小高度时，让元素淡入，否则淡出
			if (cur_h <= min_height){
				$gototop.fadeOut(300);
				$gototop_p.text('哎呀！已經沒有啦');
			}else if (cur_h > min_height && cur_h <= more_height){
				$gototop.fadeIn(300);
				$gototop_p.text('要回到頂部嗎');
			}else if(cur_h > more_height){
				$gototop.fadeIn(300);
				$gototop_p.text('O(∩_∩)O谢谢你看到这');
			}
		});
	};

	gotoTop(300,600); 


});