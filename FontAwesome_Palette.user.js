// ==UserScript==
// @name        FontAwesome Palette
// @namespace        http://tampermonkey.net/
// @version        0.8
// @description        FontAwesome絵文字の記入ツール
// @author        Ameba Blog User
// @match        https://blog.ameba.jp/ucs/entry/srventry*
// @exclude        https://blog.ameba.jp/ucs/entry/srventrylist.do*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @grant        none
// @updateURL        https://github.com/personwritep/FontAwesome_Palette/raw/main/FontAwesome_Palette.user.js
// @downloadURL        https://github.com/personwritep/FontAwesome_Palette/raw/main/FontAwesome_Palette.user.js
// ==/UserScript==


pannel();

function pannel(){

    // 🟠🟠 以下のリストの行を編集・追加して、専用パネルのリストをカスタマイズできます。

    let FontAwesome_list=
        '<li class="fap_category">矢印</li>'+ // 🟦🟦🟦
        '<li><i class="fa-solid fa-arrow-rotate-right"></i></li>'+
        '<li><i class="fa-solid fa-arrows-rotate"></i></li>'+
        '<li><i class="fas fa-external-link-alt fa-sm"></i></li>'+
        '<li><i class="fa-solid fa-arrow-up-right-from-square"></i></li>'+
        '<li><i class="fa-solid fa-arrow-right-to-bracket fa-rotate-90"></i></li>'+
        '<li><i class="fa-solid fa-share-from-square"></i></li>'+
        '<li><i class="fa-solid fa-share fa-rotate-90"></i></li>'+
        '<li><i class="fa-solid fa-arrow-left"></i></li>'+
        '<li><i class="fa-solid fa-arrow-right"></i></li>'+
        '<li><i class="fa-solid fa-arrow-up"></i></li>'+
        '<li><i class="fa-solid fa-arrow-down"></i></li>'+
        '<li><i class="fa-solid fa-up-right-and-down-left-from-center fa-rotate-90"></i></li>'+
        '<li><i class="fa-solid fa-up-down-left-right"></i></li>'+

        '<li class="fap_category">円形のデザイン</li>'+ // 🟦🟦🟦
        '<li><i class="fa-solid fa-circle-info"></i></li>'+
        '<li><i class="fa-regular fa-circle-question"></i></li>'+
        '<li><i class="fa-solid fa-circle-question"></i></li>'+
        '<li><i class="fa-solid fa-circle-xmark"></i></li>'+
        '<li><i class="fa-regular fa-circle-xmark"></i></li>'+
        '<li><i class="fa-solid fa-circle-user"></i></li>'+
        '<li><i class="fa-regular fa-face-smile"></i></li>'+

        '<li class="fap_category">汎用</li>'+ // 🟦🟦🟦
        '<li><i class="fa-solid fa-ellipsis-vertical"></i></li>'+
        '<li><i class="fa-solid fa-bars"></i></li>'+
        '<li><i class="fa-solid fa-gear"></i> </li>'+
        '<li><i class="fa-solid fa-house"></i></li>'+
        '<li><i class="fa-solid fa-magnifying-glass"></i></li>'+
        '<li><i class="fa-solid fa-pen"></i></li>'+
        '<li><i class="fa-solid fa-pen-to-square"></i></li>'+
        '<li><i class="fa-solid fa-tag"></i> </li>'+
        '<li><i class="fa-solid fa-palette"></i></li>'+
        '<li><i class="fa-solid fa-chart-simple"></i></li>'+
        '<li><i class="fa-solid fa-user"></i> </li>'+
        '<li><i class="fa-solid fa-image"></i> </li>'+
        '<li><i class="fa-solid fa-music"></i> </li>'+
        '<li><i class="fa-solid fa-microphone"></i></li>'+
        '<li><i class="fa-solid fa-quote-left"></i></li>'+
        '<li><i class="fa-solid fa-lock"></i> </li>'+
        '<li><i class="fa-solid fa-unlock"></i> </li>'+
        '<li><i class="fa-solid fa-camera"></i></li>'+
        '<li><i class="fa-solid fa-video"></i></li>'+
        '<li><i class="fa-solid fa-triangle-exclamation"></i></li>'+
        '<li><i class="fa-solid fa-wifi"></i></li>'+
        '<li><i class="fa-solid fa-crop-simple"></i></li>'+
        '<li><i class="fa-solid fa-expand"></i></li>'+
        '<li><i class="fa-solid fa-compress"></i></li>'+
        '<li><i class="fa-solid fa-toggle-on"></i></li>'+
        '<li><i class="fa-solid fa-toggle-off"></i></li>'+
        '<li><i class="fa-solid fa-power-off"></i></li>'+
        '<li><i class="fa-solid fa-mug-hot"></i></li>'+
        '<li><i class="fa-solid fa-utensils"></i></li>'+
        '<li><i class="fa-solid fa-mobile-screen-button"></i></li>'+
        '<li><i class="fa-solid fa-desktop"></i></li>'+
        '<li><i class="fa-solid fa-computer-mouse"></i></li>'+

        '<li class="fap_category">ファイル フォルダ 文具</li>'+ // 🟦🟦🟦
        '<li><i class="fa-solid fa-file"></i></li>'+
        '<li><i class="fa-regular fa-file"></i></li>'+
        '<li><i class="fa-regular fa-copy"></i></li>'+
        '<li><i class="fa-regular fa-clone"></i></li>'+
        '<li><i class="fa-regular fa-folder"></i></li>'+
        '<li><i class="fa-regular fa-folder-open"></i></li>'+
        '<li><i class="fa-solid fa-thumbtack"></i></li>'+
        '<li><i class="fa-solid fa-paperclip"></i></li>'+

        '<li class="fap_category">ファビコン カンパニー固有</li>'+ // 🟦🟦🟦
        '<li><i class="fa-brands fa-github"></i> </li>'+
        '<li><i class="fa-brands fa-facebook-f"></i></li>'+
        '<li><i class="fa-brands fa-twitter"></i> </li>'+
        '<li><i class="fa-brands fa-instagram"></i> </li>'+
        '<li><i class="fa-brands fa-youtube"></i></li>'+
        '<li><i class="fa-brands fa-wordpress"></i></li>'+
        '<li><i class="fa-brands fa-apple"></i> </li>'+
        '<li><i class="fa-brands fa-amazon"></i></li>'+
        '<li><i class="fa-brands fa-cc-amazon-pay"></i></li>'+
        '<li><i class="fa-brands fa-line"></i></li>'+
        '<li><i class="fa-brands fa-chrome"></i></li>'+
        '<li><i class="fa-solid fa-street-view"></i></li>'+
        '<li><i class="fa-brands fa-edge"></i></li>'+
        '<li><i class="fa-brands fa-firefox"></i></li>'+
        '<li><i class="fa-brands fa-windows"></i></li>'+
        '<li><i class="fa-brands fa-square-font-awesome"></i></li>';



    // システムコード ========================================

    let help_url=
        'https://ameblo.jp/personwritep/entry-12823817692.html';

    let font_awesome_url=
        'https://fontawesome.com/v6/search?o=r&m=free';

    let FA_help=
        '<a class="fap_help" href="'+ help_url +'" target="_blank">'+
        '<svg width="20" height="20" viewBox="0 0 150 150">'+
        '<path  fill="#fff" d="M66 13C56 15 47 18 39 24C-12 60 18 146 82 137C92 '+
        '135 102 131 110 126C162 90 128 4 66 13M68 25C131 17 145 117 81 '+
        '125C16 133 3 34 68 25M69 40C61 41 39 58 58 61C66 63 73 47 82 57C84 '+
        '60 83 62 81 65C77 70 52 90 76 89C82 89 82 84 86 81C92 76 98 74 100 66'+
        'C105 48 84 37 69 40M70 94C58 99 66 118 78 112C90 107 82 89 70 94z">'+
        '</path></svg></a>';

    let Gap0=
        '<svg viewBox="0 0 200 160">'+
        '<path style="fill: #fff" d="M35 20C27 23 30 37 30 44L30 119'+
        'C30 125 28 145 40 140C48 137 45 123 45 116L45 41C45 35 47 15 35 20M7'+
        '4 20C68 21 63 26 62 32C61 37 62 43 62 49L62 81L62 116C62 122 61 128 '+
        '64 133C66 137 70 140 75 141C85 142 95 141 105 141C112 141 119 142 12'+
        '6 140C132 139 137 134 138 128C139 123 138 117 138 111L138 79L138 44C'+
        '138 38 139 32 136 27C134 23 130 20 125 19C115 18 105 19 95 19C88 19 '+
        '81 18 74 20M160 20C152 23 155 37 155 44L155 119C155 125 153 145 165 '+
        '140C173 137 170 123 170 116L170 41C170 35 172 15 160 20z"></path>'+
        '</svg>';

    let Gap1=
        '<svg viewBox="0 0 200 160">'+
        '<path style="fill: #fff" d="M12 20C4 23 7 37 7 44L7 119C7 1'+
        '25 5 145 17 140C25 137 22 123 22 116L22 41C22 35 24 15 12 20M74 20C6'+
        '8 21 63 26 62 32C61 37 62 43 62 49L62 81L62 116C62 122 61 128 64 133'+
        'C66 137 70 140 75 141C85 142 95 141 105 141C112 141 119 142 126 140C'+
        '132 139 137 134 138 128C139 123 138 117 138 111L138 79L138 44C138 38'+
        ' 139 32 136 27C134 23 130 20 125 19C115 18 105 19 95 19C88 19 81 18 '+
        '74 20M183 20C175 23 178 37 178 44L178 119C178 125 176 145 188 140C19'+
        '6 137 193 123 193 116L193 41C193 35 195 15 183 20z"></path>'+
        '</svg>';

    let css=
        '.fap_menu_wrapp { position: fixed; top: 15px; left: calc(100% - 310px); '+
        'z-index: 20; box-shadow: 20px 20px 60px 0 rgb(0 0 0 / 20%); display: none; } '+
        '.fap_menu { '+
        'font-family: Meiryo; font-size: 16px; line-height: 1.6; width: 276px; '+
        'padding: 8px; border: 1px solid #009688; border-radius: 4px; '+
        'background: #fff; box-shadow: inset 0 0 0 8px #eee; user-select: none; } '+
        '.fap_title { display: flex; justify-content: space-between; align-items: center; '+
        'padding: 4px 12px 2px; border-bottom: 8px solid #eee; '+
        'color: #fff; font: 16px Meiryo; background: #2196f3; } '+
        '.fap_gap0 { margin: -2px 20px -2px 30px; display: none; } '+
        '.fap_gap1 { margin: -2px 20px -2px 30px; } '+
        '.fap_gap0 svg, .fap_gap1 svg  { width: 30px; height: 24px; vertical-align: -5px; } '+
        '.fap_help svg { vertical-align: -5px; } '+
        '.fap_close { display: inline-block; border: 1px solid #fff; border-radius: 2px; '+
        'height: 19px; line-height: 21px; padding: 0 3px; margin-bottom: 1px; '+
        'cursor: pointer; } '+
        '.fap_close:hover { color: #2196f3; background: #fff; } '+
        '.fap_ul { display: flex; flex-wrap: wrap; padding: 4px 0 4px 2px; } '+
        '.fap_ul li { width: 30px; margin: 4px 2px; padding: 4px 0 0; text-align: center; '+
        'font-size: 20px; line-height: 26px; } '+
        '.fap_ul li:hover { cursor: pointer; outline: 1px solid #2196f3; } '+
        '.fap_ul li.fap_category { display: flex; align-items: center; font-size: 14px; '+
        'width: 100%; margin: 4px -2px; padding: 3px 15px 0; background: #eee; '+
        'outline: none; cursor: unset; } '+
        '.fap_ul li.fap_category:first-child { margin: -10px -2px 4px; } '+
        '#fap_tab { box-shadow: none; } '+
        '#fap_tab:hover svg { fill: #2196f3; } '+
        '.fap_auto { font-size: 14px; padding: 8px 0 0; background: #eee; } '+
        '.fap_auto a { padding: 1px 2px 0; color: #000; text-decoration: none !important; } '+
        '.fap_auto a:focus { color: #000; } '+
        '.fap_auto a:hover { color: #fff; background: #333; } '+
        '.fap_set { width: 178px; margin: 0 -15px 0 7px; padding: 2px 6px 0; '+
        'border: 1px solid #aaa; }';


    let menu_wrapp=
        '<div class="fap_menu_wrapp"><div class="fap_menu">'+
        '<div class="fap_title">'+
        '<b>FontAwesome</b>'+
        '<span class="fap_gap0" title="絵文字のみ入力：「+Shift」">'+ Gap0+'</span>'+
        '<span class="fap_gap1" title="絵文字のみ入力：「+Shift」">'+ Gap1+'</span>'+
        FA_help +
        '<span class="fap_close">✖</span>'+
        '</div>'+
        '<div>'+
        '<ul class="fap_ul">'+
        FontAwesome_list +
        '</ul></div>'+
        '<div class="fap_auto">'+
        '<a href="'+ font_awesome_url +'" target="_blank" rel="noopener noreferrer">'+
        'Html-Code</a><input class="fap_set" type="text"></div>'+
        '<style>'+ css +'<.style></div>';

    if(!document.querySelector('.fap_menu_wrapp')){
        document.body.insertAdjacentHTML('beforeend', menu_wrapp); }

} // pannel()



function disp_pannel(){
    let fap_menu_wrapp=document.querySelector('.fap_menu_wrapp');
    if(fap_menu_wrapp){
        fap_menu_wrapp.style.display='block';

        let tab_svg=document.querySelectorAll('.p-accessoryTab__list svg');
        for(let k=0; k<tab_svg.length; k++){
            tab_svg[k].style.outlineColor='transparent'; }}}


function hide_pannel(){
    let fap_menu_wrapp=document.querySelector('.fap_menu_wrapp');
    if(fap_menu_wrapp){
        fap_menu_wrapp.style.display='none';

        let tab_svg=document.querySelectorAll('.p-accessoryTab__list svg');
        for(let k=0; k<tab_svg.length; k++){
            tab_svg[k].style.outlineColor=''; }}}


let accessoryTab=document.querySelector('.p-accessoryTab__list');
if(accessoryTab){
    let FA_tab=
        '<li class="p-accessoryTab__item">'+
        '<button type="button" class="p-accessoryTab__button" id="fap_tab">'+
        '<span class="p-accessoryTab__icon">'+
        '<svg width="24" height="24" viewBox="-50 -50 540 600" fill="currentColor">'+
        '<path d="M385 33h-320c-35 0-64 29-64 64v320c0 35 29 64 64 64h320c35 0 '+
        '64-29 64-64v-320 C449 61 420 33 385 33z M337 313c-32 11-41 16-60 16c-3'+
        '1 0-43-16-75-16c-10 0-18 2-26 4v-32 c7-2 15-4 26-4c31 0 43 16 75 16c10'+
        ' 0 18-1 28-5v-96c-10 3-18 5-28 5c-31 0-43-16-75-16 c-25 0-37 10-58 14v'+
        '154c0 9-7 16-16 16c-9 0-16-7-16-16v-192c0-9 7-16 16-16c9 0 16 7 16 16v'+
        '6 c20-4 32-14 58-14c31 0 43 16 75 16c19 0 28-5 60-16V313z"></path></svg>'+
        '</span>'+
        '<span class="js-accessoryTab-label p-accessoryTab__label">FontAw</span>'+
        '</button></li>';

    if(!accessoryTab.querySelector('#fap_tab')){
        accessoryTab.insertAdjacentHTML('beforeend', FA_tab); }

    let faw_sw=document.querySelector('#fap_tab');
    if(faw_sw){
        faw_sw.onclick=function(event){
            event.preventDefault();
            disp_pannel(); }}}



document.addEventListener("keydown", menu_key_1);
document.addEventListener("keyup", menu_key_2);

setTimeout(()=>{
    let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
    if(editor_iframe){
        let iframe_doc=editor_iframe.contentWindow.document;
        if(iframe_doc){
            iframe_doc.addEventListener("keydown", menu_key_1);
            iframe_doc.addEventListener("keyup", menu_key_2);} }
}, 2000);


function menu_key_1(event){
    let fap_menu_wrapp=document.querySelector('.fap_menu_wrapp');
    if(event.keyCode==27 && fap_menu_wrapp){ //「Esc」
        event.preventDefault();
        hide_pannel(); }
    if(event.keyCode==16 && fap_menu_wrapp){ //「Shift」
        gap(0); }}


function menu_key_2(event){
    if(event.keyCode==16){ //「Shift」
        gap(1); }}


function gap(n){
    let fap_gap0=document.querySelector('.fap_gap0');
    let fap_gap1=document.querySelector('.fap_gap1');
    if(fap_gap0 && fap_gap1){
        if(n==0){
            fap_gap0.style.display='inline';
            fap_gap1.style.display='none'; }
        else{
            fap_gap0.style.display='none';
            fap_gap1.style.display='inline'; }}}


let fap_close=document.querySelector('.fap_close');
if(fap_close){
    fap_close.onclick=function(event){
        event.preventDefault();
        hide_pannel(); }}



let aw_li=document.querySelectorAll('.fap_ul li:not(.fap_category)');
for(let k=0; k<aw_li.length; k++){
    let aw_class=aw_li[k].querySelector('i').className;
    aw_li[k].addEventListener("click", function(event){
        if(event.shiftKey){
            set_aw(aw_class, 1); }
        else{
            set_aw(aw_class, 0); }}); }


function set_aw(aw_c, n){
    let selection;
    let range;
    let insert_node;

    let editor_iframe=document.querySelector('.cke_wysiwyg_frame');
    if(editor_iframe){
        let iframe_doc=editor_iframe.contentWindow.document;
        iframe_doc.body.focus(); // キャレットを表示

        selection=iframe_doc.getSelection();
        range=selection.getRangeAt(0);

        if(n==0){
            let insert_node_b=iframe_doc.createTextNode('\u00A0');
            range.insertNode(insert_node_b);
            range.setStartAfter(insert_node_b);

            insert_node=iframe_doc.createElement('i');
            insert_node.appendChild(iframe_doc.createTextNode('\u0020'));
            insert_node.setAttribute('class', aw_c);
            range.insertNode(insert_node);

            let insert_node_a=iframe_doc.createTextNode('\u00A0');
            insert_node.parentNode.insertBefore(insert_node_a, insert_node.nextSibling);
            range.setStartAfter(insert_node_a);
            range.collapse(); }

        if(n==1){
            insert_node=iframe_doc.createElement('i');
            insert_node.appendChild(iframe_doc.createTextNode('\u0020'));
            insert_node.setAttribute('class', aw_c);
            range.insertNode(insert_node);
            range.setStartAfter(insert_node);
            range.collapse(); }
    }

} // set_aw()




let fap_set=document.querySelector('.fap_set');
if(fap_set){
    fap_set.onkeydown=function(event){
        if(event.keyCode==13){
            event.preventDefault();

            let i_code=fap_set.value;
            if(i_code.startsWith('<i class=') && i_code.endsWith('</i>')){
                i_code=i_code.substr(i_code.indexOf('"') + 1);
                i_code=i_code.substr(0, i_code.indexOf('"'));
                if(i_code.length>1){
                    if(event.shiftKey){
                        set_aw(i_code, 1); }
                    else{
                        set_aw(i_code, 0); }}}}}}
