(function() {
    tinymce.create('tinymce.plugins.columnThird', {
        init : function(ed, url) {
            ed.addButton('columnThird', {
                title : 'ThunderIcons Retina',
                image : url+'/icon.png',
                onclick : function() {
                     writeIcons();

                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
    });
    tinymce.PluginManager.add('columnThird', tinymce.plugins.columnThird);
})();

function writeIcons(){
		var form = jQuery('<div id="thundercodes-form" class="thundercodes-form"><table id="thundercodes-table" class="form-table">\
							<th><label for="thundercodes-target">Type</label></th>\
							<td><input type="radio" checked name="thundericon-type" onclick="jQuery(\'#sizetr\').fadeIn();jQuery(\'#sizetr_special\').fadeOut();" id="thundericon-type" value=""> Standalone<br>\
							<input type="radio" name="thundericon-type" id="thundericon-type" onclick="jQuery(\'#sizetr\').fadeOut();jQuery(\'#sizetr_special\').fadeIn();" value="special"> Special Circle<br />\
							</td>\
							<tr id="sizetr">\
							<th><label for="thundercodes-link">Icon Size</label></th>\
							<td><input type="text" id="thundericon-size" name="link" value="12px" /><br />\
							<small>The Size of the icon, Example 12px or 41px(circle)</small></td>\
							</tr>\
							<tr>\
							</tr>\
							<tr id="sizetr_special" style="display:none">\
							<th><label for="thundercodes-link">Icon Size</label></th>\
							<td><input type="radio" checked name="thundericon-size_special" id="thundericon-size_special" value=""> Default<br>\
							<input type="radio" name="thundericon-size_special" id="thundericon-size_special" value="large"> Large<br /><input type="radio" name="thundericon-size_special" id="thundericon-size_special" value="small"> Small<br />\</td>\
							</tr>\
							<tr>\
							<th><label for="thundercodes-color">Color</label></th>\
							<td><select name="color" id="thundericon-color">\ <option value="blue">blue</option><option value="pink">pink</option><option value="purple">purple</option><option value="black">black</option><option value="green">green</option><option value="red">red</option><option value="brown">brown</option><option value="yellow">yellow</option><option value="aqua">aqua</option><option value="orange">orange</option>		</select><br />\
							<small>Select the Color of the icon (alone) or the background (special circle)</small></td>\
							</tr>\
							</table><hr><style>.retina-icons li:hover span { color:#000 !important; cursor: pointer !important } .retina-icons li {width: 22%;display: block;margin-right: 3%;float: left;line-height: 30px;}.retina-icons li span{color:#aaa;};.retina-icons li span:before {content:"\a"}</style><ul class="retina-icons">\
      			<li><i class="icon-plus"></i> <span>icon-plus</span></li>\
				<li><i class="icon-plus-1"></i> <span>icon-plus-1</span></li>\
				<li><i class="icon-minus"></i> <span>icon-minus</span></li>\
				<li><i class="icon-minus-1"></i> <span>icon-minus-1</span></li>\
				<li><i class="icon-info"></i> <span>icon-info</span></li>\
				<li><i class="icon-left-thin"></i> <span>icon-left-thin</span></li>\
				<li><i class="icon-left-1"></i> <span>icon-left-1</span></li>\
				<li><i class="icon-up-thin"></i> <span>icon-up-thin</span></li>\
				<li><i class="icon-up-1"></i> <span>icon-up-1</span></li>\
				<li><i class="icon-right-thin"></i> <span>icon-right-thin</span></li>\
				<li><i class="icon-right-1"></i> <span>icon-right-1</span></li>\
				<li><i class="icon-down-thin"></i> <span>icon-down-thin</span></li>\
				<li><i class="icon-down-1"></i> <span>icon-down-1</span></li>\
				<li><i class="icon-level-up"></i> <span>icon-level-up</span></li>\
				<li><i class="icon-level-down"></i> <span>icon-level-down</span></li>\
				<li><i class="icon-switch"></i> <span>icon-switch</span></li>\
				<li><i class="icon-infinity"></i> <span>icon-infinity</span></li>\
				<li><i class="icon-plus-squared"></i> <span>icon-plus-squared</span></li>\
				<li><i class="icon-minus-squared"></i> <span>icon-minus-squared</span></li>\
				<li><i class="icon-home"></i> <span>icon-home</span></li>\
				<li><i class="icon-home-1"></i> <span>icon-home-1</span></li>\
				<li><i class="icon-keyboard"></i> <span>icon-keyboard</span></li>\
				<li><i class="icon-erase"></i> <span>icon-erase</span></li>\
				<li><i class="icon-pause"></i> <span>icon-pause</span></li>\
				<li><i class="icon-pause-1"></i> <span>icon-pause-1</span></li>\
				<li><i class="icon-fast-forward"></i> <span>icon-fast-forward</span></li>\
				<li><i class="icon-fast-fw"></i> <span>icon-fast-fw</span></li>\
				<li><i class="icon-fast-backward"></i> <span>icon-fast-backward</span></li>\
				<li><i class="icon-fast-bw"></i> <span>icon-fast-bw</span></li>\
				<li><i class="icon-to-end"></i> <span>icon-to-end</span></li>\
				<li><i class="icon-to-end-1"></i> <span>icon-to-end-1</span></li>\
				<li><i class="icon-to-start"></i> <span>icon-to-start</span></li>\
				<li><i class="icon-to-start-1"></i> <span>icon-to-start-1</span></li>\
				<li><i class="icon-hourglass"></i> <span>icon-hourglass</span></li>\
				<li><i class="icon-stop"></i> <span>icon-stop</span></li>\
				<li><i class="icon-stop-1"></i> <span>icon-stop-1</span></li>\
				<li><i class="icon-up-dir"></i> <span>icon-up-dir</span></li>\
				<li><i class="icon-up-dir-1"></i> <span>icon-up-dir-1</span></li>\
				<li><i class="icon-play"></i> <span>icon-play</span></li>\
				<li><i class="icon-play-1"></i> <span>icon-play-1</span></li>\
				<li><i class="icon-right-dir"></i> <span>icon-right-dir</span></li>\
				<li><i class="icon-right-dir-1"></i> <span>icon-right-dir-1</span></li>\
				<li><i class="icon-down-dir"></i> <span>icon-down-dir</span></li>\
				<li><i class="icon-down-dir-1"></i> <span>icon-down-dir-1</span></li>\
				<li><i class="icon-left-dir"></i> <span>icon-left-dir</span></li>\
				<li><i class="icon-left-dir-1"></i> <span>icon-left-dir-1</span></li>\
				<li><i class="icon-adjust"></i> <span>icon-adjust</span></li>\
				<li><i class="icon-cloud"></i> <span>icon-cloud</span></li>\
				<li><i class="icon-cloud-1"></i> <span>icon-cloud-1</span></li>\
				<li><i class="icon-umbrella"></i> <span>icon-umbrella</span></li>\
				<li><i class="icon-star"></i> <span>icon-star</span></li>\
				<li><i class="icon-star-1"></i> <span>icon-star-1</span></li>\
				<li><i class="icon-star-empty"></i> <span>icon-star-empty</span></li>\
				<li><i class="icon-star-empty-1"></i> <span>icon-star-empty-1</span></li>\
				<li><i class="icon-check-1"></i> <span>icon-check-1</span></li>\
				<li><i class="icon-cup"></i> <span>icon-cup</span></li>\
				<li><i class="icon-left-hand"></i> <span>icon-left-hand</span></li>\
				<li><i class="icon-up-hand"></i> <span>icon-up-hand</span></li>\
				<li><i class="icon-right-hand"></i> <span>icon-right-hand</span></li>\
				<li><i class="icon-down-hand"></i> <span>icon-down-hand</span></li>\
				<li><i class="icon-menu"></i> <span>icon-menu</span></li>\
				<li><i class="icon-th-list"></i> <span>icon-th-list</span></li>\
				<li><i class="icon-moon"></i> <span>icon-moon</span></li>\
				<li><i class="icon-heart-empty"></i> <span>icon-heart-empty</span></li>\
				<li><i class="icon-heart-empty-1"></i> <span>icon-heart-empty-1</span></li>\
				<li><i class="icon-heart"></i> <span>icon-heart</span></li>\
				<li><i class="icon-heart-1"></i> <span>icon-heart-1</span></li>\
				<li><i class="icon-note"></i> <span>icon-note</span></li>\
				<li><i class="icon-note-beamed"></i> <span>icon-note-beamed</span></li>\
				<li><i class="icon-music-1"></i> <span>icon-music-1</span></li>\
				<li><i class="icon-layout"></i> <span>icon-layout</span></li>\
				<li><i class="icon-th"></i> <span>icon-th</span></li>\
				<li><i class="icon-flag"></i> <span>icon-flag</span></li>\
				<li><i class="icon-flag-1"></i> <span>icon-flag-1</span></li>\
				<li><i class="icon-tools"></i> <span>icon-tools</span></li>\
				<li><i class="icon-cog"></i> <span>icon-cog</span></li>\
				<li><i class="icon-cog-1"></i> <span>icon-cog-1</span></li>\
				<li><i class="icon-attention"></i> <span>icon-attention</span></li>\
				<li><i class="icon-attention-1"></i> <span>icon-attention-1</span></li>\
				<li><i class="icon-flash"></i> <span>icon-flash</span></li>\
				<li><i class="icon-flash-1"></i> <span>icon-flash-1</span></li>\
				<li><i class="icon-record"></i> <span>icon-record</span></li>\
				<li><i class="icon-cloud-thunder"></i> <span>icon-cloud-thunder</span></li>\
				<li><i class="icon-cog-alt"></i> <span>icon-cog-alt</span></li>\
				<li><i class="icon-scissors"></i> <span>icon-scissors</span></li>\
				<li><i class="icon-tape"></i> <span>icon-tape</span></li>\
				<li><i class="icon-flight"></i> <span>icon-flight</span></li>\
				<li><i class="icon-flight-1"></i> <span>icon-flight-1</span></li>\
				<li><i class="icon-mail"></i> <span>icon-mail</span></li>\
				<li><i class="icon-mail-1"></i> <span>icon-mail-1</span></li>\
				<li><i class="icon-edit"></i> <span>icon-edit</span></li>\
				<li><i class="icon-pencil"></i> <span>icon-pencil</span></li>\
				<li><i class="icon-pencil-1"></i> <span>icon-pencil-1</span></li>\
				<li><i class="icon-feather"></i> <span>icon-feather</span></li>\
				<li><i class="icon-check"></i> <span>icon-check</span></li>\
				<li><i class="icon-ok"></i> <span>icon-ok</span></li>\
				<li><i class="icon-ok-circle"></i> <span>icon-ok-circle</span></li>\
				<li><i class="icon-cancel"></i> <span>icon-cancel</span></li>\
				<li><i class="icon-cancel-1"></i> <span>icon-cancel-1</span></li>\
				<li><i class="icon-cancel-circled"></i> <span>icon-cancel-circled</span></li>\
				<li><i class="icon-cancel-circle"></i> <span>icon-cancel-circle</span></li>\
				<li><i class="icon-asterisk"></i> <span>icon-asterisk</span></li>\
				<li><i class="icon-cancel-squared"></i> <span>icon-cancel-squared</span></li>\
				<li><i class="icon-help"></i> <span>icon-help</span></li>\
				<li><i class="icon-attention-circle"></i> <span>icon-attention-circle</span></li>\
				<li><i class="icon-quote"></i> <span>icon-quote</span></li>\
				<li><i class="icon-plus-circled"></i> <span>icon-plus-circled</span></li>\
				<li><i class="icon-plus-circle"></i> <span>icon-plus-circle</span></li>\
				<li><i class="icon-minus-circled"></i> <span>icon-minus-circled</span></li>\
				<li><i class="icon-minus-circle"></i> <span>icon-minus-circle</span></li>\
				<li><i class="icon-right"></i> <span>icon-right</span></li>\
				<li><i class="icon-direction"></i> <span>icon-direction</span></li>\
				<li><i class="icon-forward"></i> <span>icon-forward</span></li>\
				<li><i class="icon-forward-1"></i> <span>icon-forward-1</span></li>\
				<li><i class="icon-ccw"></i> <span>icon-ccw</span></li>\
				<li><i class="icon-cw"></i> <span>icon-cw</span></li>\
				<li><i class="icon-cw-1"></i> <span>icon-cw-1</span></li>\
				<li><i class="icon-left"></i> <span>icon-left</span></li>\
				<li><i class="icon-up"></i> <span>icon-up</span></li>\
				<li><i class="icon-down"></i> <span>icon-down</span></li>\
				<li><i class="icon-resize-vertical"></i> <span>icon-resize-vertical</span></li>\
				<li><i class="icon-resize-horizontal"></i> <span>icon-resize-horizontal</span></li>\
				<li><i class="icon-eject"></i> <span>icon-eject</span></li>\
				<li><i class="icon-list-add"></i> <span>icon-list-add</span></li>\
				<li><i class="icon-list"></i> <span>icon-list</span></li>\
				<li><i class="icon-left-bold"></i> <span>icon-left-bold</span></li>\
				<li><i class="icon-right-bold"></i> <span>icon-right-bold</span></li>\
				<li><i class="icon-up-bold"></i> <span>icon-up-bold</span></li>\
				<li><i class="icon-down-bold"></i> <span>icon-down-bold</span></li>\
				<li><i class="icon-user-add"></i> <span>icon-user-add</span></li>\
				<li><i class="icon-star-half"></i> <span>icon-star-half</span></li>\
				<li><i class="icon-ok-circle2"></i> <span>icon-ok-circle2</span></li>\
				<li><i class="icon-cancel-circle2"></i> <span>icon-cancel-circle2</span></li>\
				<li><i class="icon-help-circled"></i> <span>icon-help-circled</span></li>\
				<li><i class="icon-help-circle"></i> <span>icon-help-circle</span></li>\
				<li><i class="icon-info-circled"></i> <span>icon-info-circled</span></li>\
				<li><i class="icon-info-circle"></i> <span>icon-info-circle</span></li>\
				<li><i class="icon-th-large"></i> <span>icon-th-large</span></li>\
				<li><i class="icon-eye"></i> <span>icon-eye</span></li>\
				<li><i class="icon-eye-1"></i> <span>icon-eye-1</span></li>\
				<li><i class="icon-eye-off"></i> <span>icon-eye-off</span></li>\
				<li><i class="icon-tag"></i> <span>icon-tag</span></li>\
				<li><i class="icon-tag-1"></i> <span>icon-tag-1</span></li>\
				<li><i class="icon-tags"></i> <span>icon-tags</span></li>\
				<li><i class="icon-camera-alt"></i> <span>icon-camera-alt</span></li>\
				<li><i class="icon-upload-cloud"></i> <span>icon-upload-cloud</span></li>\
				<li><i class="icon-reply"></i> <span>icon-reply</span></li>\
				<li><i class="icon-reply-all"></i> <span>icon-reply-all</span></li>\
				<li><i class="icon-code"></i> <span>icon-code</span></li>\
				<li><i class="icon-export"></i> <span>icon-export</span></li>\
				<li><i class="icon-export-1"></i> <span>icon-export-1</span></li>\
				<li><i class="icon-print"></i> <span>icon-print</span></li>\
				<li><i class="icon-print-1"></i> <span>icon-print-1</span></li>\
				<li><i class="icon-retweet"></i> <span>icon-retweet</span></li>\
				<li><i class="icon-retweet-1"></i> <span>icon-retweet-1</span></li>\
				<li><i class="icon-comment"></i> <span>icon-comment</span></li>\
				<li><i class="icon-comment-1"></i> <span>icon-comment-1</span></li>\
				<li><i class="icon-chat"></i> <span>icon-chat</span></li>\
				<li><i class="icon-chat-1"></i> <span>icon-chat-1</span></li>\
				<li><i class="icon-vcard"></i> <span>icon-vcard</span></li>\
				<li><i class="icon-address"></i> <span>icon-address</span></li>\
				<li><i class="icon-location"></i> <span>icon-location</span></li>\
				<li><i class="icon-location-1"></i> <span>icon-location-1</span></li>\
				<li><i class="icon-map"></i> <span>icon-map</span></li>\
				<li><i class="icon-compass"></i> <span>icon-compass</span></li>\
				<li><i class="icon-trash"></i> <span>icon-trash</span></li>\
				<li><i class="icon-trash-1"></i> <span>icon-trash-1</span></li>\
				<li><i class="icon-doc"></i> <span>icon-doc</span></li>\
				<li><i class="icon-doc-text-inv"></i> <span>icon-doc-text-inv</span></li>\
				<li><i class="icon-docs"></i> <span>icon-docs</span></li>\
				<li><i class="icon-doc-landscape"></i> <span>icon-doc-landscape</span></li>\
				<li><i class="icon-archive"></i> <span>icon-archive</span></li>\
				<li><i class="icon-rss"></i> <span>icon-rss</span></li>\
				<li><i class="icon-share"></i> <span>icon-share</span></li>\
				<li><i class="icon-basket"></i> <span>icon-basket</span></li>\
				<li><i class="icon-basket-1"></i> <span>icon-basket-1</span></li>\
				<li><i class="icon-shareable"></i> <span>icon-shareable</span></li>\
				<li><i class="icon-login"></i> <span>icon-login</span></li>\
				<li><i class="icon-login-1"></i> <span>icon-login-1</span></li>\
				<li><i class="icon-logout"></i> <span>icon-logout</span></li>\
				<li><i class="icon-logout-1"></i> <span>icon-logout-1</span></li>\
				<li><i class="icon-volume"></i> <span>icon-volume</span></li>\
				<li><i class="icon-resize-full"></i> <span>icon-resize-full</span></li>\
				<li><i class="icon-resize-full-1"></i> <span>icon-resize-full-1</span></li>\
				<li><i class="icon-resize-small"></i> <span>icon-resize-small</span></li>\
				<li><i class="icon-resize-small-1"></i> <span>icon-resize-small-1</span></li>\
				<li><i class="icon-popup"></i> <span>icon-popup</span></li>\
				<li><i class="icon-publish"></i> <span>icon-publish</span></li>\
				<li><i class="icon-window"></i> <span>icon-window</span></li>\
				<li><i class="icon-arrow-combo"></i> <span>icon-arrow-combo</span></li>\
				<li><i class="icon-zoom-in"></i> <span>icon-zoom-in</span></li>\
				<li><i class="icon-chart-pie"></i> <span>icon-chart-pie</span></li>\
				<li><i class="icon-zoom-out"></i> <span>icon-zoom-out</span></li>\
				<li><i class="icon-language"></i> <span>icon-language</span></li>\
				<li><i class="icon-air"></i> <span>icon-air</span></li>\
				<li><i class="icon-database"></i> <span>icon-database</span></li>\
				<li><i class="icon-drive"></i> <span>icon-drive</span></li>\
				<li><i class="icon-bucket"></i> <span>icon-bucket</span></li>\
				<li><i class="icon-thermometer"></i> <span>icon-thermometer</span></li>\
				<li><i class="icon-down-circled"></i> <span>icon-down-circled</span></li>\
				<li><i class="icon-down-circle2"></i> <span>icon-down-circle2</span></li>\
				<li><i class="icon-left-circled"></i> <span>icon-left-circled</span></li>\
				<li><i class="icon-right-circled"></i> <span>icon-right-circled</span></li>\
				<li><i class="icon-up-circled"></i> <span>icon-up-circled</span></li>\
				<li><i class="icon-up-circle2"></i> <span>icon-up-circle2</span></li>\
				<li><i class="icon-down-open"></i> <span>icon-down-open</span></li>\
				<li><i class="icon-down-open-1"></i> <span>icon-down-open-1</span></li>\
				<li><i class="icon-left-open"></i> <span>icon-left-open</span></li>\
				<li><i class="icon-left-open-1"></i> <span>icon-left-open-1</span></li>\
				<li><i class="icon-right-open"></i> <span>icon-right-open</span></li>\
				<li><i class="icon-right-open-1"></i> <span>icon-right-open-1</span></li>\
				<li><i class="icon-up-open"></i> <span>icon-up-open</span></li>\
				<li><i class="icon-up-open-1"></i> <span>icon-up-open-1</span></li>\
				<li><i class="icon-down-open-mini"></i> <span>icon-down-open-mini</span></li>\
				<li><i class="icon-arrows-cw"></i> <span>icon-arrows-cw</span></li>\
				<li><i class="icon-left-open-mini"></i> <span>icon-left-open-mini</span></li>\
				<li><i class="icon-play-circle2"></i> <span>icon-play-circle2</span></li>\
				<li><i class="icon-right-open-mini"></i> <span>icon-right-open-mini</span></li>\
				<li><i class="icon-to-end-alt"></i> <span>icon-to-end-alt</span></li>\
				<li><i class="icon-up-open-mini"></i> <span>icon-up-open-mini</span></li>\
				<li><i class="icon-to-start-alt"></i> <span>icon-to-start-alt</span></li>\
				<li><i class="icon-down-open-big"></i> <span>icon-down-open-big</span></li>\
				<li><i class="icon-left-open-big"></i> <span>icon-left-open-big</span></li>\
				<li><i class="icon-right-open-big"></i> <span>icon-right-open-big</span></li>\
				<li><i class="icon-up-open-big"></i> <span>icon-up-open-big</span></li>\
				<li><i class="icon-progress-0"></i> <span>icon-progress-0</span></li>\
				<li><i class="icon-progress-1"></i> <span>icon-progress-1</span></li>\
				<li><i class="icon-progress-2"></i> <span>icon-progress-2</span></li>\
				<li><i class="icon-progress-3"></i> <span>icon-progress-3</span></li>\
				<li><i class="icon-back-in-time"></i> <span>icon-back-in-time</span></li>\
				<li><i class="icon-network"></i> <span>icon-network</span></li>\
				<li><i class="icon-inbox"></i> <span>icon-inbox</span></li>\
				<li><i class="icon-inbox-1"></i> <span>icon-inbox-1</span></li>\
				<li><i class="icon-install"></i> <span>icon-install</span></li>\
				<li><i class="icon-font"></i> <span>icon-font</span></li>\
				<li><i class="icon-bold"></i> <span>icon-bold</span></li>\
				<li><i class="icon-italic"></i> <span>icon-italic</span></li>\
				<li><i class="icon-text-height"></i> <span>icon-text-height</span></li>\
				<li><i class="icon-text-width"></i> <span>icon-text-width</span></li>\
				<li><i class="icon-align-left"></i> <span>icon-align-left</span></li>\
				<li><i class="icon-align-center"></i> <span>icon-align-center</span></li>\
				<li><i class="icon-align-right"></i> <span>icon-align-right</span></li>\
				<li><i class="icon-align-justify"></i> <span>icon-align-justify</span></li>\
				<li><i class="icon-list-1"></i> <span>icon-list-1</span></li>\
				<li><i class="icon-indent-left"></i> <span>icon-indent-left</span></li>\
				<li><i class="icon-indent-right"></i> <span>icon-indent-right</span></li>\
				<li><i class="icon-lifebuoy"></i> <span>icon-lifebuoy</span></li>\
				<li><i class="icon-mouse"></i> <span>icon-mouse</span></li>\
				<li><i class="icon-dot"></i> <span>icon-dot</span></li>\
				<li><i class="icon-dot-2"></i> <span>icon-dot-2</span></li>\
				<li><i class="icon-dot-3"></i> <span>icon-dot-3</span></li>\
				<li><i class="icon-suitcase"></i> <span>icon-suitcase</span></li>\
				<li><i class="icon-off"></i> <span>icon-off</span></li>\
				<li><i class="icon-road"></i> <span>icon-road</span></li>\
				<li><i class="icon-flow-cascade"></i> <span>icon-flow-cascade</span></li>\
				<li><i class="icon-list-alt"></i> <span>icon-list-alt</span></li>\
				<li><i class="icon-flow-branch"></i> <span>icon-flow-branch</span></li>\
				<li><i class="icon-qrcode"></i> <span>icon-qrcode</span></li>\
				<li><i class="icon-flow-tree"></i> <span>icon-flow-tree</span></li>\
				<li><i class="icon-barcode"></i> <span>icon-barcode</span></li>\
				<li><i class="icon-flow-line"></i> <span>icon-flow-line</span></li>\
				<li><i class="icon-ajust"></i> <span>icon-ajust</span></li>\
				<li><i class="icon-flow-parallel"></i> <span>icon-flow-parallel</span></li>\
				<li><i class="icon-tint"></i> <span>icon-tint</span></li>\
				<li><i class="icon-brush"></i> <span>icon-brush</span></li>\
				<li><i class="icon-paper-plane"></i> <span>icon-paper-plane</span></li>\
				<li><i class="icon-magnet"></i> <span>icon-magnet</span></li>\
				<li><i class="icon-magnet-1"></i> <span>icon-magnet-1</span></li>\
				<li><i class="icon-gauge"></i> <span>icon-gauge</span></li>\
				<li><i class="icon-traffic-cone"></i> <span>icon-traffic-cone</span></li>\
				<li><i class="icon-cc"></i> <span>icon-cc</span></li>\
				<li><i class="icon-cc-by"></i> <span>icon-cc-by</span></li>\
				<li><i class="icon-cc-nc"></i> <span>icon-cc-nc</span></li>\
				<li><i class="icon-cc-nc-eu"></i> <span>icon-cc-nc-eu</span></li>\
				<li><i class="icon-cc-nc-jp"></i> <span>icon-cc-nc-jp</span></li>\
				<li><i class="icon-cc-sa"></i> <span>icon-cc-sa</span></li>\
				<li><i class="icon-cc-nd"></i> <span>icon-cc-nd</span></li>\
				<li><i class="icon-cc-pd"></i> <span>icon-cc-pd</span></li>\
				<li><i class="icon-cc-zero"></i> <span>icon-cc-zero</span></li>\
				<li><i class="icon-cc-share"></i> <span>icon-cc-share</span></li>\
				<li><i class="icon-cc-remix"></i> <span>icon-cc-remix</span></li>\
				<li><i class="icon-move"></i> <span>icon-move</span></li>\
				<li><i class="icon-link-ext"></i> <span>icon-link-ext</span></li>\
				<li><i class="icon-check-empty"></i> <span>icon-check-empty</span></li>\
				<li><i class="icon-bookmark-empty"></i> <span>icon-bookmark-empty</span></li>\
				<li><i class="icon-phone-squared"></i> <span>icon-phone-squared</span></li>\
				<li><i class="icon-twitter"></i> <span>icon-twitter</span></li>\
				<li><i class="icon-facebook"></i> <span>icon-facebook</span></li>\
				<li><i class="icon-github"></i> <span>icon-github</span></li>\
				<li><i class="icon-rss-1"></i> <span>icon-rss-1</span></li>\
				<li><i class="icon-hdd"></i> <span>icon-hdd</span></li>\
				<li><i class="icon-certificate"></i> <span>icon-certificate</span></li>\
				<li><i class="icon-left-circled-1"></i> <span>icon-left-circled-1</span></li>\
				<li><i class="icon-right-circled-1"></i> <span>icon-right-circled-1</span></li>\
				<li><i class="icon-up-circled-1"></i> <span>icon-up-circled-1</span></li>\
				<li><i class="icon-down-circled-1"></i> <span>icon-down-circled-1</span></li>\
				<li><i class="icon-tasks"></i> <span>icon-tasks</span></li>\
				<li><i class="icon-filter"></i> <span>icon-filter</span></li>\
				<li><i class="icon-resize-full-alt"></i> <span>icon-resize-full-alt</span></li>\
				<li><i class="icon-beaker"></i> <span>icon-beaker</span></li>\
				<li><i class="icon-docs-1"></i> <span>icon-docs-1</span></li>\
				<li><i class="icon-blank"></i> <span>icon-blank</span></li>\
				<li><i class="icon-menu-1"></i> <span>icon-menu-1</span></li>\
				<li><i class="icon-list-bullet"></i> <span>icon-list-bullet</span></li>\
				<li><i class="icon-list-numbered"></i> <span>icon-list-numbered</span></li>\
				<li><i class="icon-strike"></i> <span>icon-strike</span></li>\
				<li><i class="icon-underline"></i> <span>icon-underline</span></li>\
				<li><i class="icon-table"></i> <span>icon-table</span></li>\
				<li><i class="icon-magic"></i> <span>icon-magic</span></li>\
				<li><i class="icon-pinterest-circled-1"></i> <span>icon-pinterest-circled-1</span></li>\
				<li><i class="icon-pinterest-squared"></i> <span>icon-pinterest-squared</span></li>\
				<li><i class="icon-gplus-squared"></i> <span>icon-gplus-squared</span></li>\
				<li><i class="icon-gplus"></i> <span>icon-gplus</span></li>\
				<li><i class="icon-money"></i> <span>icon-money</span></li>\
				<li><i class="icon-columns"></i> <span>icon-columns</span></li>\
				<li><i class="icon-sort"></i> <span>icon-sort</span></li>\
				<li><i class="icon-sort-down"></i> <span>icon-sort-down</span></li>\
				<li><i class="icon-sort-up"></i> <span>icon-sort-up</span></li>\
				<li><i class="icon-mail-alt"></i> <span>icon-mail-alt</span></li>\
				<li><i class="icon-linkedin"></i> <span>icon-linkedin</span></li>\
				<li><i class="icon-gauge-1"></i> <span>icon-gauge-1</span></li>\
				<li><i class="icon-comment-empty"></i> <span>icon-comment-empty</span></li>\
				<li><i class="icon-chat-empty"></i> <span>icon-chat-empty</span></li>\
				<li><i class="icon-sitemap"></i> <span>icon-sitemap</span></li>\
				<li><i class="icon-paste"></i> <span>icon-paste</span></li>\
				<li><i class="icon-user-md"></i> <span>icon-user-md</span></li>\
				<li><i class="icon-s-github"></i> <span>icon-s-github</span></li>\
				<li><i class="icon-github-squared"></i> <span>icon-github-squared</span></li>\
				<li><i class="icon-github-circled"></i> <span>icon-github-circled</span></li>\
				<li><i class="icon-s-flickr"></i> <span>icon-s-flickr</span></li>\
				<li><i class="icon-twitter-squared"></i> <span>icon-twitter-squared</span></li>\
				<li><i class="icon-s-vimeo"></i> <span>icon-s-vimeo</span></li>\
				<li><i class="icon-vimeo-circled"></i> <span>icon-vimeo-circled</span></li>\
				<li><i class="icon-facebook-squared-1"></i> <span>icon-facebook-squared-1</span></li>\
				<li><i class="icon-s-twitter"></i> <span>icon-s-twitter</span></li>\
				<li><i class="icon-twitter-circled"></i> <span>icon-twitter-circled</span></li>\
				<li><i class="icon-s-facebook"></i> <span>icon-s-facebook</span></li>\
				<li><i class="icon-linkedin-squared"></i> <span>icon-linkedin-squared</span></li>\
				<li><i class="icon-facebook-circled"></i> <span>icon-facebook-circled</span></li>\
				<li><i class="icon-s-gplus"></i> <span>icon-s-gplus</span></li>\
				<li><i class="icon-gplus-circled"></i> <span>icon-gplus-circled</span></li>\
				<li><i class="icon-s-pinterest"></i> <span>icon-s-pinterest</span></li>\
				<li><i class="icon-pinterest-circled"></i> <span>icon-pinterest-circled</span></li>\
				<li><i class="icon-s-tumblr"></i> <span>icon-s-tumblr</span></li>\
				<li><i class="icon-tumblr-circled"></i> <span>icon-tumblr-circled</span></li>\
				<li><i class="icon-s-linkedin"></i> <span>icon-s-linkedin</span></li>\
				<li><i class="icon-linkedin-circled"></i> <span>icon-linkedin-circled</span></li>\
				<li><i class="icon-s-dribbble"></i> <span>icon-s-dribbble</span></li>\
				<li><i class="icon-dribbble-circled"></i> <span>icon-dribbble-circled</span></li>\
				<li><i class="icon-s-stumbleupon"></i> <span>icon-s-stumbleupon</span></li>\
				<li><i class="icon-stumbleupon-circled"></i> <span>icon-stumbleupon-circled</span></li>\
				<li><i class="icon-s-lastfm"></i> <span>icon-s-lastfm</span></li>\
				<li><i class="icon-lastfm-circled"></i> <span>icon-lastfm-circled</span></li>\
				<li><i class="icon-rdio"></i> <span>icon-rdio</span></li>\
				<li><i class="icon-rdio-circled"></i> <span>icon-rdio-circled</span></li>\
				<li><i class="icon-spotify"></i> <span>icon-spotify</span></li>\
				<li><i class="icon-s-spotify-circled"></i> <span>icon-s-spotify-circled</span></li>\
				<li><i class="icon-qq"></i> <span>icon-qq</span></li>\
				<li><i class="icon-s-instagrem"></i> <span>icon-s-instagrem</span></li>\
				<li><i class="icon-dropbox"></i> <span>icon-dropbox</span></li>\
				<li><i class="icon-s-evernote"></i> <span>icon-s-evernote</span></li>\
				<li><i class="icon-flattr"></i> <span>icon-flattr</span></li>\
				<li><i class="icon-s-skype"></i> <span>icon-s-skype</span></li>\
				<li><i class="icon-skype-circled"></i> <span>icon-skype-circled</span></li>\
				<li><i class="icon-renren"></i> <span>icon-renren</span></li>\
				<li><i class="icon-sina-weibo"></i> <span>icon-sina-weibo</span></li>\
				<li><i class="icon-s-paypal"></i> <span>icon-s-paypal</span></li>\
				<li><i class="icon-s-picasa"></i> <span>icon-s-picasa</span></li>\
				<li><i class="icon-s-soundcloud"></i> <span>icon-s-soundcloud</span></li>\
				<li><i class="icon-s-behance"></i> <span>icon-s-behance</span></li>\
				<li><i class="icon-google-circles"></i> <span>icon-google-circles</span></li>\
				<li><i class="icon-vkontakte"></i> <span>icon-vkontakte</span></li>\
				<li><i class="icon-smashing"></i> <span>icon-smashing</span></li>\
				<li><i class="icon-db-shape"></i> <span>icon-db-shape</span></li>\
				<li><i class="icon-sweden"></i> <span>icon-sweden</span></li>\
				<li><i class="icon-logo-db"></i> <span>icon-logo-db</span></li>\
				<li><i class="icon-picture"></i> <span>icon-picture</span></li>\
				<li><i class="icon-picture-1"></i> <span>icon-picture-1</span></li>\
				<li><i class="icon-globe"></i> <span>icon-globe</span></li>\
				<li><i class="icon-globe-1"></i> <span>icon-globe-1</span></li>\
				<li><i class="icon-leaf-1"></i> <span>icon-leaf-1</span></li>\
				<li><i class="icon-lemon"></i> <span>icon-lemon</span></li>\
				<li><i class="icon-glass"></i> <span>icon-glass</span></li>\
				<li><i class="icon-gift"></i> <span>icon-gift</span></li>\
				<li><i class="icon-graduation-cap"></i> <span>icon-graduation-cap</span></li>\
				<li><i class="icon-mic"></i> <span>icon-mic</span></li>\
				<li><i class="icon-videocam"></i> <span>icon-videocam</span></li>\
				<li><i class="icon-headphones"></i> <span>icon-headphones</span></li>\
				<li><i class="icon-palette"></i> <span>icon-palette</span></li>\
				<li><i class="icon-ticket"></i> <span>icon-ticket</span></li>\
				<li><i class="icon-video"></i> <span>icon-video</span></li>\
				<li><i class="icon-video-1"></i> <span>icon-video-1</span></li>\
				<li><i class="icon-target"></i> <span>icon-target</span></li>\
				<li><i class="icon-target-1"></i> <span>icon-target-1</span></li>\
				<li><i class="icon-music"></i> <span>icon-music</span></li>\
				<li><i class="icon-trophy"></i> <span>icon-trophy</span></li>\
				<li><i class="icon-award"></i> <span>icon-award</span></li>\
				<li><i class="icon-thumbs-up"></i> <span>icon-thumbs-up</span></li>\
				<li><i class="icon-thumbs-up-1"></i> <span>icon-thumbs-up-1</span></li>\
				<li><i class="icon-thumbs-down"></i> <span>icon-thumbs-down</span></li>\
				<li><i class="icon-thumbs-down-1"></i> <span>icon-thumbs-down-1</span></li>\
				<li><i class="icon-bag"></i> <span>icon-bag</span></li>\
				<li><i class="icon-user"></i> <span>icon-user</span></li>\
				<li><i class="icon-user-1"></i> <span>icon-user-1</span></li>\
				<li><i class="icon-users"></i> <span>icon-users</span></li>\
				<li><i class="icon-users-1"></i> <span>icon-users-1</span></li>\
				<li><i class="icon-lamp"></i> <span>icon-lamp</span></li>\
				<li><i class="icon-alert"></i> <span>icon-alert</span></li>\
				<li><i class="icon-water"></i> <span>icon-water</span></li>\
				<li><i class="icon-droplet"></i> <span>icon-droplet</span></li>\
				<li><i class="icon-credit-card"></i> <span>icon-credit-card</span></li>\
				<li><i class="icon-credit-card-1"></i> <span>icon-credit-card-1</span></li>\
				<li><i class="icon-monitor"></i> <span>icon-monitor</span></li>\
				<li><i class="icon-briefcase"></i> <span>icon-briefcase</span></li>\
				<li><i class="icon-briefcase-1"></i> <span>icon-briefcase-1</span></li>\
				<li><i class="icon-floppy"></i> <span>icon-floppy</span></li>\
				<li><i class="icon-floppy-1"></i> <span>icon-floppy-1</span></li>\
				<li><i class="icon-cd"></i> <span>icon-cd</span></li>\
				<li><i class="icon-folder"></i> <span>icon-folder</span></li>\
				<li><i class="icon-folder-1"></i> <span>icon-folder-1</span></li>\
				<li><i class="icon-folder-open"></i> <span>icon-folder-open</span></li>\
				<li><i class="icon-doc-text"></i> <span>icon-doc-text</span></li>\
				<li><i class="icon-doc-1"></i> <span>icon-doc-1</span></li>\
				<li><i class="icon-calendar"></i> <span>icon-calendar</span></li>\
				<li><i class="icon-calendar-1"></i> <span>icon-calendar-1</span></li>\
				<li><i class="icon-chart-line"></i> <span>icon-chart-line</span></li>\
				<li><i class="icon-chart-bar"></i> <span>icon-chart-bar</span></li>\
				<li><i class="icon-chart-bar-1"></i> <span>icon-chart-bar-1</span></li>\
				<li><i class="icon-clipboard"></i> <span>icon-clipboard</span></li>\
				<li><i class="icon-pin"></i> <span>icon-pin</span></li>\
				<li><i class="icon-attach"></i> <span>icon-attach</span></li>\
				<li><i class="icon-attach-1"></i> <span>icon-attach-1</span></li>\
				<li><i class="icon-bookmarks"></i> <span>icon-bookmarks</span></li>\
				<li><i class="icon-book"></i> <span>icon-book</span></li>\
				<li><i class="icon-book-1"></i> <span>icon-book-1</span></li>\
				<li><i class="icon-book-open"></i> <span>icon-book-open</span></li>\
				<li><i class="icon-phone"></i> <span>icon-phone</span></li>\
				<li><i class="icon-phone-1"></i> <span>icon-phone-1</span></li>\
				<li><i class="icon-megaphone"></i> <span>icon-megaphone</span></li>\
				<li><i class="icon-megaphone-1"></i> <span>icon-megaphone-1</span></li>\
				<li><i class="icon-upload"></i> <span>icon-upload</span></li>\
				<li><i class="icon-upload-1"></i> <span>icon-upload-1</span></li>\
				<li><i class="icon-download"></i> <span>icon-download</span></li>\
				<li><i class="icon-download-1"></i> <span>icon-download-1</span></li>\
				<li><i class="icon-box"></i> <span>icon-box</span></li>\
				<li><i class="icon-newspaper"></i> <span>icon-newspaper</span></li>\
				<li><i class="icon-mobile"></i> <span>icon-mobile</span></li>\
				<li><i class="icon-signal"></i> <span>icon-signal</span></li>\
				<li><i class="icon-signal-1"></i> <span>icon-signal-1</span></li>\
				<li><i class="icon-camera"></i> <span>icon-camera</span></li>\
				<li><i class="icon-camera-1"></i> <span>icon-camera-1</span></li>\
				<li><i class="icon-shuffle"></i> <span>icon-shuffle</span></li>\
				<li><i class="icon-shuffle-1"></i> <span>icon-shuffle-1</span></li>\
				<li><i class="icon-loop"></i> <span>icon-loop</span></li>\
				<li><i class="icon-arrows-ccw"></i> <span>icon-arrows-ccw</span></li>\
				<li><i class="icon-light-down"></i> <span>icon-light-down</span></li>\
				<li><i class="icon-light-up"></i> <span>icon-light-up</span></li>\
				<li><i class="icon-mute"></i> <span>icon-mute</span></li>\
				<li><i class="icon-volume-off"></i> <span>icon-volume-off</span></li>\
				<li><i class="icon-volume-down"></i> <span>icon-volume-down</span></li>\
				<li><i class="icon-sound"></i> <span>icon-sound</span></li>\
				<li><i class="icon-volume-up"></i> <span>icon-volume-up</span></li>\
				<li><i class="icon-battery"></i> <span>icon-battery</span></li>\
				<li><i class="icon-search"></i> <span>icon-search</span></li>\
				<li><i class="icon-search-1"></i> <span>icon-search-1</span></li>\
				<li><i class="icon-key"></i> <span>icon-key</span></li>\
				<li><i class="icon-key-1"></i> <span>icon-key-1</span></li>\
				<li><i class="icon-lock"></i> <span>icon-lock</span></li>\
				<li><i class="icon-lock-1"></i> <span>icon-lock-1</span></li>\
				<li><i class="icon-lock-open"></i> <span>icon-lock-open</span></li>\
				<li><i class="icon-lock-open-1"></i> <span>icon-lock-open-1</span></li>\
				<li><i class="icon-bell"></i> <span>icon-bell</span></li>\
				<li><i class="icon-bell-1"></i> <span>icon-bell-1</span></li>\
				<li><i class="icon-bookmark"></i> <span>icon-bookmark</span></li>\
				<li><i class="icon-bookmark-1"></i> <span>icon-bookmark-1</span></li>\
				<li><i class="icon-link"></i> <span>icon-link</span></li>\
				<li><i class="icon-link-1"></i> <span>icon-link-1</span></li>\
				<li><i class="icon-back"></i> <span>icon-back</span></li>\
				<li><i class="icon-fire"></i> <span>icon-fire</span></li>\
				<li><i class="icon-flashlight"></i> <span>icon-flashlight</span></li>\
				<li><i class="icon-wrench"></i> <span>icon-wrench</span></li>\
				<li><i class="icon-hammer"></i> <span>icon-hammer</span></li>\
				<li><i class="icon-chart-area"></i> <span>icon-chart-area</span></li>\
				<li><i class="icon-clock"></i> <span>icon-clock</span></li>\
				<li><i class="icon-clock-1"></i> <span>icon-clock-1</span></li>\
				<li><i class="icon-rocket"></i> <span>icon-rocket</span></li>\
				<li><i class="icon-truck"></i> <span>icon-truck</span></li>\
				<li><i class="icon-block"></i> <span>icon-block</span></li>\
				<li><i class="icon-block-1"></i> <span>icon-block-1</span></li>\
		</ul></div>');
		jQuery(".thundercodes-form").remove();
		form.appendTo('body').hide();
		var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
		//var width = jQuery(window).width(), W = ( 720 < width ) ? 720 : width;
		W = W - 80;
		H = H - 184;
		tb_show( 'ThunderIcons', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=thundercodes-form' );
		jQuery("#TB_window").css("height",H+65);
		jQuery("#TB_window").css("overflow-y","auto");
		jQuery("#TB_window").css("overflow-x","hidden");
		
		jQuery(".retina-icons li").click(function(){
			sendIcon(jQuery(this).find("i").attr("class"));
		});
		
}

function sendIcon(daclass){
	size = "";
	sizeclass = "";
	if(jQuery('input:radio[name=thundericon-type]:checked').val()!="special") size = "size='"+jQuery("#thundericon-size").val()+"'";
	else sizeclass = jQuery('input:radio[name=thundericon-size_special]:checked').val();
	tinyMCE.activeEditor.execCommand('mceInsertContent', 0, "[tbicon icon='"+daclass+"' "+size+"  class='"+jQuery("#thundericon-color").val()+" "+jQuery('input:radio[name=thundericon-type]:checked').val()+" "+sizeclass+"']");
	// closes Thickbox
	tb_remove();
}