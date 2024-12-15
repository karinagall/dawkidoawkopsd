
/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/deafnv/bokitube-server@master/channel/script.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */



const resizes=document.getElementById("resize-video-smaller"),resizel=document.getElementById("resize-video-larger");resizes.remove(),resizel.remove(),document.querySelector(".container-fluid").style.display="none","undefined"!=typeof scrollingBannerEnabled&&scrollingBannerEnabled&&$("#motdwrap").prepend($('<div class="banner-slideshow"><div class="mover-1"></div></div>')),$(".credit").append($('<p class="text-muted credit">Theme by deafnv, available on <a href="https://github.com/deafnv/bokitube-server" target="_blank" rel="noreferrer noopener">Github</a></p>')),$("#mainpage").prepend($('<div id="content-wrap">')),$("#content-wrap").prepend($('<div id="rightcontent">')),$("#content-wrap").prepend($('<div id="leftcontent">')),$("<div id='video-container'>").prependTo($("#leftcontent")),$("#videowrap").prependTo($("#video-container")),$('<div id="channel-content">').appendTo($("#leftcontent")),$("#announcements").appendTo($("#channel-content")),$("#drinkbar").appendTo($("#channel-content")),$("#motdrow").appendTo($("#channel-content")),$("#controlsrow").appendTo($("#channel-content")),$("#playlistrow").appendTo($("#channel-content")),$("#sitefooter").appendTo($("#channel-content")),$("#footer").appendTo($("#channel-content")),$("#leftcontent").prepend($("#pollwrap")),$("#chatheader").appendTo($("#rightcontent")),$("#userlist").appendTo($("#rightcontent")),$("#messagebuffer").appendTo($("#rightcontent"));const formLine=document.querySelector("div#chatwrap > form");formLine.setAttribute("id","formline"),$("#formline").appendTo($("#rightcontent")),$("#leftcontrols").appendTo($("#rightcontent")),$("#rightcontent").prepend($("<div id='currenttitlewrap'>")),$("#videowrap-header").prependTo($("#currenttitlewrap"));const nodecurrenttitle=document.getElementById("currenttitle"),clonecurrenttitle=nodecurrenttitle.cloneNode(!0),pagewrap=document.getElementById("wrap");pagewrap.setAttribute("style","padding-bottom: 0px;");const chatline=document.getElementById("chatline");function chatPosition(e){e.matches?($("#rightcontent").appendTo($("#leftcontent")),$("#channel-content").appendTo($("#leftcontent")),$("#footer").appendTo($("#leftcontent")),document.getElementById("chatline").onclick=function(){var e=0,t=setInterval((()=>{document.documentElement.scrollTop=0,10==++e&&window.clearInterval(t)}),50)},setInterval((function(){document.documentElement.style.setProperty("--vh",window.innerHeight/100+"px")}),20)):($("#rightcontent").appendTo($("#content-wrap")),document.documentElement.style.setProperty("--vh",window.innerHeight/100+"px"))}chatline.removeAttribute("placeholder"),chatline.setAttribute("placeholder","Send a message"),chatline.setAttribute("spellcheck","false"),setInterval((function(){document.documentElement.style.setProperty("--vh",window.innerHeight/100+"px")}),20);var mediaQuery=window.matchMedia("(max-width: 768px)");chatPosition(mediaQuery),mediaQuery.addEventListener("change",chatPosition);const jumpBtn=document.createElement("button");jumpBtn.innerHTML="Scroll to current item",jumpBtn.setAttribute("id","jump-btn"),jumpBtn.setAttribute("class","btn"),jumpBtn.onclick=function(){window.scrollQueue()};const rightControls=document.getElementById("rightcontrols");rightControls.insertBefore(jumpBtn,rightControls.children[1]);var VOL_AFK=!1,FOCUS_AFK=!1;function toggleDiv(e){"none"==$(e).css("display")?$(e).show():$(e).hide()}function insertText(e){$("#chatline").val($("#chatline").val()+e).focus()}setInterval((function(){!1===VOL_AFK&&!1===FOCUS_AFK&&$("#userlist").find("span[class^=userlist]").each((function(){$(this).html()!=CLIENT.name||"italic"!=$(this).css("font-style")||socket.emit("chatMsg",{msg:"/afk"})}))}),500),window.addEventListener("focus",(()=>{FOCUS_AFK&&VOL_AFK&&(socket.emit("chatMsg",{msg:"/afk"}),FOCUS_AFK=!FOCUS_AFK,VOL_AFK=!VOL_AFK)})),window.addEventListener("blur",(()=>{FOCUS_AFK||VOL_AFK||(socket.emit("chatMsg",{msg:"/afk"}),FOCUS_AFK=!FOCUS_AFK,VOL_AFK=!VOL_AFK)})),$(document).ready((function(){"cytu.be"==window.location.host&&("undefined"!=typeof channelName&&$(".navbar-brand").html(channelName),"undefined"!=typeof faviconUrl&&$('<link id="chanfavicon" href="'+faviconUrl+'" type="image/x-icon" rel="shortcut icon" />').appendTo("head")),$('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu">').appendTo("head"),$('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand">').appendTo("head")})),$('<button class="btn btn-primary" id="cs-csspreview">Preview CSS</button>').appendTo("#cs-csseditor").on("mousedown",(function(){document.getElementById("channeloptions").style.visibility="hidden",document.getElementById("cs-csseditor").style.visibility="hidden",document.getElementById("cs-csspreview").style.visibility="visible"})).on("mouseout",(function(){document.getElementById("channeloptions").style.visibility="visible",document.getElementById("cs-csseditor").style.visibility="visible"})).on("mouseup",(function(){document.getElementById("channeloptions").style.visibility="visible",document.getElementById("cs-csseditor").style.visibility="visible"})),$('<button id="afk-btn" class="btn btn-default btn-sm">AFK</button>').appendTo("#leftcontrols").on("click",(function(){socket.emit("chatMsg",{msg:"/afk"}),VOL_AFK=!VOL_AFK})),$('<button id="clear-btn" style="display:none;" class="btn btn-default btn-sm">Clear</button>').appendTo("#leftcontrols").on("click",(function(){socket.emit("chatMsg",{msg:"/clear"})})),localStorage.epFlTop&&localStorage.epFlLeft||(localStorage.epFlTop=100,localStorage.epFlLeft=-15),$('<div class="emotewrap" id="emotewrap" style="top: '+localStorage.epFlTop+"px; left: "+localStorage.epFlLeft+'px;">').appendTo($("#rightcontent")),localStorage.epposition||(localStorage.epposition=1,emotespanel=$('<div id="emotespanel" class="ep__fixed" style="display:none" />').insertAfter("#userlist")),0==localStorage.epposition?emotespanel=$('<div id="emotespanel" class="ep__floating" style="display:none" />').appendTo($("#emotewrap")):emotespanel=$('<div id="emotespanel" class="ep__fixed" style="display:none" />').insertAfter("#userlist"),localStorage.epIsOpen||(localStorage.epIsOpen=0),1==localStorage.epIsOpen&&toggleDiv(emotespanel);let observer=new IntersectionObserver(observerCallback);function observerCallback(){toggleDiv("#queue")}var autocompleteArr=[];function emotesPanel(){if(emotespanel.removeClass("row"),document.querySelector("#emotespanel").replaceChildren(),len=CHANNEL.emotes.length,len<1)emotespanel.addClass("row"),makeAlert("No emotes available","Ask channel administrator. This panel will update every second until an emote is found.").appendTo(emotespanel),document.querySelector("#content-wrap").contains(document.querySelector("#needpw"))||$("#needpw").appendTo($("#content-wrap")),console.log("No emotes found, reloading in 1 second"),setTimeout((function(){emotesPanel()}),1e3);else{for(i in CHANNEL.emotes)$("<img onclick=\"insertText('"+CHANNEL.emotes[i].name+" ')\" />").attr({src:CHANNEL.emotes[i].image,title:CHANNEL.emotes[i].name}).appendTo(emotespanel),autocompleteArr.push({name:CHANNEL.emotes[i].name,image:CHANNEL.emotes[i].image});autocompleteArr.sort(((e,t)=>e.name.localeCompare(t.name))),window.matchMedia("(max-width: 768px)").matches?observer.observe(document.querySelector("#rightpane-inner").children[5]):autocomplete(document.getElementById("chatline"),autocompleteArr)}}function switchEp(){const e=document.querySelector("#emotespanel");1==localStorage.epposition?(e.setAttribute("class","ep__floating"),$("#emotespanel").appendTo($("#emotewrap")),localStorage.epposition=0,document.querySelector("#emotewrap").style.top="100px",document.querySelector("#emotewrap").style.left="-15px",localStorage.epFlTop=100,localStorage.epFlLeft=-15):(e.setAttribute("class","ep__fixed"),$("#emotespanel").insertAfter("#userlist"),localStorage.epposition=1)}function dragElement(e){var t=0,n=0,o=0,l=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,l=e.clientY,document.onmouseup=r,document.onmousemove=a}function a(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=l-s.clientY,o=s.clientX,l=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function r(){document.onmouseup=null,document.onmousemove=null,localStorage.epFlTop=document.querySelector("#emotewrap").style.top.substring(0,document.querySelector("#emotewrap").style.top.length-2),localStorage.epFlLeft=document.querySelector("#emotewrap").style.left.substring(0,document.querySelector("#emotewrap").style.left.length-2)}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}function autocomplete(e,t){var n,o="";function l(e){if(!e)return!1;!function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("autocomplete-active")}(e),n>=e.length&&(n=0),n<0&&(n=e.length-1),e[n]?.classList.add("autocomplete-active")}function s(t){for(var n=document.getElementsByClassName("autocomplete-items"),o=0;o<n.length;o++)t!=n[o]&&t!=e&&n[o].parentNode.removeChild(n[o])}e.addEventListener("input",(function(e){var l,a,r,i=this.value;if(s(),!i)return!1;n=-1,(l=document.createElement("DIV")).setAttribute("id","autocomplete-list"),l.setAttribute("class","autocomplete-items"),l.style.bottom=`${$("#rightcontent > form").outerHeight()+$("#leftcontrols").outerHeight()}px`,this.parentNode.appendChild(l),$("#autocomplete-list").insertBefore(document.querySelectorAll("form")[1]);var c=document.getElementById("chatline").value.match(/(?<!\S)\/\S*$/gim)?.toString(),p=c?.substring(1,c.length);for(o=document.getElementById("chatline").value,r=0;r<t.length;r++)if(t[r].name.substr(0,c?.length)?.toUpperCase()==c?.toUpperCase())c.length,(a=document.createElement("DIV")).innerHTML="<strong>"+t[r].name.substr(0,c?.length)+"</strong>",a.innerHTML+=t[r].name.substr(c?.length),a.innerHTML+="<input type='hidden' value='"+t[r].name+"'>",a.innerHTML+="<img id='autocomplete-image' src='"+t[r].image+"'>",a.addEventListener("click",(function(e){$("#chatline").val($("#chatline").val().substring(0,$("#chatline").val().length-$("#chatline").val().match(/(?<!\S)\/\S*$/gim).toString().length)+this.getElementsByTagName("input")[0].value),s()})),l.appendChild(a);else if(t[r].name.substring(1,t[r].name.length).indexOf(p)>-1){var m=t[r].name.indexOf(p);(a=document.createElement("DIV")).innerHTML="<strong>/</strong>",a.innerHTML+=t[r].name.substring(1,m),a.innerHTML+="<strong>"+p+"</strong>",a.innerHTML+=t[r].name.substring(m+p?.length,t[r].name.length),a.innerHTML+="<input type='hidden' value='"+t[r].name+"'>",a.innerHTML+="<img id='autocomplete-image' src='"+t[r].image+"'>",a.addEventListener("click",(function(e){$("#chatline").val($("#chatline").val().substring(0,$("#chatline").val().length-$("#chatline").val().match(/(?<!\S)\/\S*$/gim).toString().length)+this.getElementsByTagName("input")[0].value),s()})),l.appendChild(a)}})),e.addEventListener("keydown",(function(e){var t=document.getElementById("autocomplete-list");t&&(t=t.getElementsByTagName("div")),40==e.keyCode?(e.preventDefault(),n++,l(t),document.querySelector(".autocomplete-active").scrollIntoViewIfNeeded(!1),$("#chatline").val(o.substring(0,o.length-o.match(/(?<!\S)\/\S*$/gim).toString().length)+document.getElementsByClassName("autocomplete-active")[0].querySelector("input").getAttribute("value"))):38==e.keyCode?(e.preventDefault(),n--,l(t),document.querySelector(".autocomplete-active").scrollIntoViewIfNeeded(!1),$("#chatline").val(o.substring(0,o.length-o.match(/(?<!\S)\/\S*$/gim).toString().length)+document.getElementsByClassName("autocomplete-active")[0].querySelector("input").getAttribute("value"))):13!=e.keyCode&&9!=e.keyCode||s()})),document.addEventListener("click",(function(e){s(e.target)}))}emotesPanel(),$("#emotelistbtn").remove(),$("#newpollbtn").html('<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 490.4 490.4" xml:space="preserve"><path d="M17.2,251.55c-9.5,0-17.2,7.7-17.2,17.1v179.7c0,9.5,7.7,17.2,17.2,17.2h113c9.5,0,17.1-7.7,17.1-17.2v-179.7 c0-9.5-7.7-17.1-17.1-17.1L17.2,251.55L17.2,251.55z M113,431.25H34.3v-145.4H113V431.25z"/><path d="M490.4,448.45v-283.7c0-9.5-7.7-17.2-17.2-17.2h-113c-9.5,0-17.2,7.7-17.2,17.2v283.6c0,9.5,7.7,17.2,17.2,17.2h113 C482.7,465.55,490.4,457.85,490.4,448.45z M456.1,431.25h-78.7v-249.3h78.7L456.1,431.25L456.1,431.25z"/> <path d="M301.7,465.55c9.5,0,17.1-7.7,17.1-17.2V42.05c0-9.5-7.7-17.2-17.1-17.2h-113c-9.5,0-17.2,7.7-17.2,17.2v406.3 c0,9.5,7.7,17.2,17.2,17.2H301.7z M205.9,59.25h78.7v372h-78.7L205.9,59.25L205.9,59.25z"/></svg>'),$("#newpollbtn").attr("title","Create new poll"),emotesbtn=$('<button id="emotes-btn" class="btn btn-sm btn-default" title="Display emotes panel"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg></button>').prependTo("#leftcontrols").on("click",(function(){toggleDiv(emotespanel),0==localStorage.epIsOpen?localStorage.epIsOpen=1:localStorage.epIsOpen=0})),$("#emotes-btn").after($("#voteskip")),$('<li><a onclick="switchEp()" style="cursor: pointer;">Switch EP</a></li>').appendTo(".navbar-nav"),$("#newpollbtn").appendTo($("#plcontrol")),dragElement(document.getElementById("emotewrap"));const LOAD_IN_DELAY=10;function processReplyMessage(e){let t=e;return/(?<!\S)\/\S*/gim.exec(e)&&(t=e.replace(/(?<!\b)\/(\w+)/g,((e,t)=>`<img class="channel-emote" src="${autocompleteArr.filter((e=>e.name==`/${t}`))[0]||""}" title="/${t}">`))),t.replace(/\[r\](.+?)\[\/r\]/,"").trim()}function scrollToReply(e){const t=getAllMessages().filter((t=>t.pseudoId==e));$(t[0].element)[0].scrollIntoView({behavior:"smooth"}),$(t[0].element).delay(200).animate({backgroundColor:"#696969"},300).animate({backgroundColor:"transparent"},300)}function getTimeString(e){const t=new Date(e),n=t.getHours(),o=t.getMinutes(),l=t.getSeconds();return"["+("0"+n).slice(-2)+":"+("0"+o).slice(-2)+":"+("0"+l).slice(-2)+"]"}function sanitizeMessageForPseudoID(e){return e.match(/(?:.*?\[\/r\]\s+)(.+)/)?e.match(/(?:.*?\[\/r\]\s+)(.+)/)[1].split(" ")[0].substring(0,12):e.split(" ")[0].substring(0,12)}function generateHash(e,t,n){return md5(`${e.trim()}${t.replace(/\[r\](.+?)\[\/r\]/,"").trim()}${n.trim()}`).substring(0,8)}function getAllMessages(){let e=[];return $("div#messagebuffer").children().each(((t,n)=>{if(!$(n).attr("class")?.includes("chat-msg-")||$(n).attr("class")?.includes("server"))return;const o=$(n).find("span:not(.timestamp)").length>1?$(n).find("span:not(.timestamp)").last().html():$(n).find("span:not(.timestamp)").html(),l=$(n).attr("class").split("-")[2].split(" ")[0];e.push({pseudoId:generateHash(l,o,$(n).find("span.timestamp").text()),message:o,username:l,element:n})})),e}function getSelectionText(){var e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&(e=document.selection.createRange().text),e}function replyToButton(e){const t=e.target;let n=$(t).siblings().length>1?$(t).siblings().last().html():$(t).siblings().html(),o=t.parentNode.className?.split("-")[2]?.split(" ")[0],l=generateHash(o,n,$(t).siblings(".timestamp").html());const s=$("#chatline").val().replace(/(?:.*?\[\/r\]\s+)/,"");""!=sanitizeMessageForPseudoID(n)&&$("#chatline").val(`[r]${l.trim()}[/r] ${s}`).focus()}function md5(e){var t="0123456789abcdef";function n(e){var n,o="";for(n=0;n<=3;n++)o+=t.charAt(e>>8*n+4&15)+t.charAt(e>>8*n&15);return o}function o(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function l(e,t,n,l,s,a){return o(function(e,t){return e<<t|e>>>32-t}(o(o(t,e),o(l,a)),s),n)}function s(e,t,n,o,s,a,r){return l(t&n|~t&o,e,t,s,a,r)}function a(e,t,n,o,s,a,r){return l(t&o|n&~o,e,t,s,a,r)}function r(e,t,n,o,s,a,r){return l(t^n^o,e,t,s,a,r)}function i(e,t,n,o,s,a,r){return l(n^(t|~o),e,t,s,a,r)}var c,p,m,d,u,g=function(e){var t,n=1+(e.length+8>>6),o=new Array(16*n);for(t=0;t<16*n;t++)o[t]=0;for(t=0;t<e.length;t++)o[t>>2]|=e.charCodeAt(t)<<t%4*8;return o[t>>2]|=128<<t%4*8,o[16*n-2]=8*e.length,o}(""+e),h=1732584193,f=-271733879,v=-1732584194,$=271733878;for(c=0;c<g.length;c+=16)p=h,m=f,d=v,u=$,h=s(h,f,v,$,g[c+0],7,-680876936),$=s($,h,f,v,g[c+1],12,-389564586),v=s(v,$,h,f,g[c+2],17,606105819),f=s(f,v,$,h,g[c+3],22,-1044525330),h=s(h,f,v,$,g[c+4],7,-176418897),$=s($,h,f,v,g[c+5],12,1200080426),v=s(v,$,h,f,g[c+6],17,-1473231341),f=s(f,v,$,h,g[c+7],22,-45705983),h=s(h,f,v,$,g[c+8],7,1770035416),$=s($,h,f,v,g[c+9],12,-1958414417),v=s(v,$,h,f,g[c+10],17,-42063),f=s(f,v,$,h,g[c+11],22,-1990404162),h=s(h,f,v,$,g[c+12],7,1804603682),$=s($,h,f,v,g[c+13],12,-40341101),v=s(v,$,h,f,g[c+14],17,-1502002290),h=a(h,f=s(f,v,$,h,g[c+15],22,1236535329),v,$,g[c+1],5,-165796510),$=a($,h,f,v,g[c+6],9,-1069501632),v=a(v,$,h,f,g[c+11],14,643717713),f=a(f,v,$,h,g[c+0],20,-373897302),h=a(h,f,v,$,g[c+5],5,-701558691),$=a($,h,f,v,g[c+10],9,38016083),v=a(v,$,h,f,g[c+15],14,-660478335),f=a(f,v,$,h,g[c+4],20,-405537848),h=a(h,f,v,$,g[c+9],5,568446438),$=a($,h,f,v,g[c+14],9,-1019803690),v=a(v,$,h,f,g[c+3],14,-187363961),f=a(f,v,$,h,g[c+8],20,1163531501),h=a(h,f,v,$,g[c+13],5,-1444681467),$=a($,h,f,v,g[c+2],9,-51403784),v=a(v,$,h,f,g[c+7],14,1735328473),h=r(h,f=a(f,v,$,h,g[c+12],20,-1926607734),v,$,g[c+5],4,-378558),$=r($,h,f,v,g[c+8],11,-2022574463),v=r(v,$,h,f,g[c+11],16,1839030562),f=r(f,v,$,h,g[c+14],23,-35309556),h=r(h,f,v,$,g[c+1],4,-1530992060),$=r($,h,f,v,g[c+4],11,1272893353),v=r(v,$,h,f,g[c+7],16,-155497632),f=r(f,v,$,h,g[c+10],23,-1094730640),h=r(h,f,v,$,g[c+13],4,681279174),$=r($,h,f,v,g[c+0],11,-358537222),v=r(v,$,h,f,g[c+3],16,-722521979),f=r(f,v,$,h,g[c+6],23,76029189),h=r(h,f,v,$,g[c+9],4,-640364487),$=r($,h,f,v,g[c+12],11,-421815835),v=r(v,$,h,f,g[c+15],16,530742520),h=i(h,f=r(f,v,$,h,g[c+2],23,-995338651),v,$,g[c+0],6,-198630844),$=i($,h,f,v,g[c+7],10,1126891415),v=i(v,$,h,f,g[c+14],15,-1416354905),f=i(f,v,$,h,g[c+5],21,-57434055),h=i(h,f,v,$,g[c+12],6,1700485571),$=i($,h,f,v,g[c+3],10,-1894986606),v=i(v,$,h,f,g[c+10],15,-1051523),f=i(f,v,$,h,g[c+1],21,-2054922799),h=i(h,f,v,$,g[c+8],6,1873313359),$=i($,h,f,v,g[c+15],10,-30611744),v=i(v,$,h,f,g[c+6],15,-1560198380),f=i(f,v,$,h,g[c+13],21,1309151649),h=i(h,f,v,$,g[c+4],6,-145523070),$=i($,h,f,v,g[c+11],10,-1120210379),v=i(v,$,h,f,g[c+2],15,718787259),f=i(f,v,$,h,g[c+9],21,-343485551),h=o(h,p),f=o(f,m),v=o(v,d),$=o($,u);return n(h)+n(f)+n(v)+n($)}socket.on("chatMsg",(e=>{const t=getAllMessages(),n=generateHash(e.username,e.msg,getTimeString(e.time)),o=t.filter((e=>e.pseudoId==n))[0]?.element;if(/\[r\](.+?)\[\/r\]/g.exec(e.msg)){const n=e.msg.replace(/.*\[r\](.*?)\[\/r\].*/,"$1").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),l=t.filter((e=>e.pseudoId==n)),s=n.replace(/[<>"'&]/g,(e=>{switch(e){case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";case"&":return"&amp;";default:return e}}));l[0]?.message?(setTimeout((()=>{0!=$(o).find(".username").length?$(o).find("span.timestamp").next().next().after(`<div onclick="scrollToReply('${s}')" class="reply"><span class="reply-header"></span><span class="reply-msg"></span></div>`):$(o).find("span.timestamp").after(`<div onclick="scrollToReply('${s}')" class="reply"><span class="reply-header"></span><span class="reply-msg"></span></div>`),$(o).find(".reply-header").html(`${l[0].username} 님에게 답장:`),$(o).find(".reply-msg").html(l[0].message.replace(/\[r\](.+?)\[\/r\]/,"").trim()),$(o).children().last().html(e.msg.replace(/\[r\](.+?)\[\/r\]/,"").trim())}),10),setTimeout((()=>$("#messagebuffer").animate({scrollTop:$("#messagebuffer").height()+1e5},"fast")),20)):setTimeout((()=>{$(o).children().last().html(processReplyMessage(e.msg))}),10),$(o).find(".timestamp").after('<button onclick="replyToButton(event)" title="Reply" class="reply-button"><i class="reply-icon"></i></button>')}else"[server]"!=e.username&&$(o).find(".timestamp").after('<button onclick="replyToButton(event)" title="Reply" class="reply-button"><i class="reply-icon"></i></button>')})),$(document).ready((()=>{const e=getAllMessages();$("div#messagebuffer").children().each(((t,n)=>{if(!$(n).attr("class")?.includes("chat-msg-")||$(n).attr("class")?.includes("server"))return;const o=$(n).find("span:not(.timestamp)").length>1?$(n).find("span:not(.timestamp)").last().html():$(n).find("span:not(.timestamp)").html();if(/\[r\](.+?)\[\/r\]/g.exec(o)){const t=o.replace(/.*\[r\](.*?)\[\/r\].*/,"$1").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),l=e.filter((e=>e.pseudoId==t)),s=t.replace(/[<>"'&]/g,(e=>{switch(e){case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";case"&":return"&amp;";default:return e}}));l[0]?.message?(0!=$(n).find(".username").length?$(n).find("span.timestamp").next().after(`<div onclick="scrollToReply('${s}')" class="reply"><span class="reply-header"></span><span class="reply-msg"></span></div>`):$(n).find("span.timestamp").after(`<div onclick="scrollToReply('${s}')" class="reply"><span class="reply-header"></span><span class="reply-msg"></span></div>`),$(n).find("span.reply-header").html(`${l[0].username} 님에게 답장:`),$(n).find("span.reply-msg").html(l[0].message.replace(/\[r\](.+?)\[\/r\]/,"").trim()),$(n).children().last().html(o.replace(/\[r\](.+?)\[\/r\]/,"").trim()),setTimeout((()=>$("#messagebuffer").animate({scrollTop:$("#messagebuffer").height()+1e5},"fast")),20)):$(n).children().last().html(processReplyMessage(o))}$(n).attr("class")?.includes("chat-msg-")&&$(n).find(".timestamp").after('<button onclick="replyToButton(event)" title="Reply" class="reply-button"><i class="reply-icon"></i></button>')}))}));
//# sourceMappingURL=/sm/6803b1e621e6f4e3e06417686996d1b99f9e35e577cf8cfa84dead5186e04561.map

!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);

//window.localStorage.clear();



document.addEventListener("DOMContentLoaded", function () {
// Intersection Observer를 지원하는지 확인
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll("img");

  // Intersection Observer 생성
  const imageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
	  if (entry.isIntersecting) {
		const img = entry.target;
		img.setAttribute("loading", "lazy"); // loading 속성 추가
		observer.unobserve(img); // 이미 관찰이 끝난 이미지에 대한 관찰 중지
	  }
	});
  });

  // 모든 이미지에 대해 Observer 설정
  lazyImages.forEach((img) => {
	imageObserver.observe(img);
  });
} else {
  // Intersection Observer를 지원하지 않는 브라우저의 경우
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
	img.setAttribute("loading", "lazy");
  });
}
});


$(document).ready(function() {
  // 모바일 기기에서만 작동
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    // 클릭 이벤트 처리
    $('#messagebuffer, .navbar, #chatheader, #userlist').on('click', function() {
      $('#emotespanel').hide();
    });
  }
});




let btnopt_html = `
<button id="btn_chat_opt"></button>
<div id="popup_chatmenu" class="popup_chatmenu">
    <div class="popup_title">
        <h6>중계방 설정</h6>
        <button id="btn_chatmenu_close" class="btn_chatmenu_close">닫기</button>
    </div>
    <ul class="list">
        <li class="li_chat_popup"><a href="#" id="clk_chat_popup"><div class="icon"></div><span>팝업으로 보기</span></a></li>
        <li class="li_chat_hide" style="display:none;"><a href="#" id="clk_chat_hide"><div class="icon"></div><span>채팅 숨기기</span></a></li>
        <li class="li_chat_expand">
               <a href="#" id="clk_chat_expand"><div class="icon"></div><span>전체화면으로 보기</span></a>
         </li>
		<li class="li_chat_font">
               <a href="#" id="clk_chat_font"><div class="icon"></div><span>중계방설정</span></a>
         </li>
		<li class="li_chat_color">
               <a href="#" id="clk_chat_color"><div class="icon"></div><span>닉네임 색변경</span></a>
         </li>
		<li class="li_chat_url" style="display:none;">
               <a href="#" id="clk_chat_url"><div class="icon"></div><span>공유하기</span></a>
         </li>
         <li class="li_chat_clean">
               <a href="#" id="clk_chat_clean"><div class="icon"></div><span>채팅창 청소</span></a>
         </li>
         
	</ul>
</div>


<div id="popup_chatfont" class="popup_chatmenu">
    <div class="popup_title">
        <h6>채팅설정</h6>
        <button id="btn_chatfont_close" class="btn_chatmenu_close">닫기</button>
    </div>

	<form>
		<div class="group-wrap">
			<div class="group" style="display:none;">
			  <label for="bgcolor">Choose background color:</label>
			  <input class="color" id="bgcolor" value="000000" />
			</div>
			<div class="group">
			  <label>테마 설정</label>
			  <button id="clk_chat_theme">테마 변경</button>
			</div>
			<div class="group">
			  <label for="config_font">글꼴 변경</label>
			  <select id="config_font">
				<option value="ft_pretendard" selected>프리텐다드</option>
				<option value="ft_malgun">맑은고딕</option>
				<option value="ft_nanum">나눔고딕</option>

			  </select>
			</div>
			<div class="group">
			  <label for="config_size">글씨 크기 변경</label>
			  <select id="config_size">
				<option value="ft_13">작게</option>
				<option value="ft_15" selected>보통</option>
				<option value="ft_17">크게</option>
			  </select>
			</div>
			<div class="group">
			  <label>설정 초기화</label>
			  <button id="clearStorageBtn">설정 초기화</button>
			</div>
		</div>
	</form>
</div>

<div id="popup_chatcolor" class="popup_chatmenu">
    <div class="popup_title">
        <h6>닉네임 색변경<h6>
        <button id="btn_chatcolor_close" class="btn_chatmenu_close" onClick="$('#popup_chatcolor').hide();">닫기</button>
    </div>

	<div id="color-picker">
		<div id="color-options">
			<!-- 미리 정의된 색상들에 대한 버튼 -->
		</div>
	</div>
</div>


`
$('#leftcontrols').append(btnopt_html);




let command_html = `<ul class='list_rule'><li>!결과</li><li>!청소</li><li>!규칙</li><li>!카리나갤</li></ul>`


let preschedule_html = `
<div id="popup_preschedule" class="popup_iframe" style="display:none; max-width:720px;">
		<div class="popup_title">
			<h6>최근 경기결과</h6>
			<button class="btn_chatmenu_close" onClick="$('#popup_preschedule').hide();">닫기</button>
		</div>
		<div class="popup_cont">
		<iframe src="https://www.fotmob.com/ko?ver=1.1"></iframe>
		</div>
</div>
`
$('body').append(preschedule_html);





// HTML을 웹 페이지에 추가
let poll_html = `
<div class="strawpoll-embed" id="strawpoll_mpnb1Jd8vy5" style="height: 480px; max-width: 640px; width: 100%; margin: 0 auto; display: flex; flex-direction: column;"><iframe title="StrawPoll Embed" id="strawpoll_iframe_mpnb1Jd8vy5" src="https://strawpoll.com/embed/mpnb1Jd8vy5" style="position: static; visibility: visible; display: block; width: 100%; flex-grow: 1;" frameborder="0" allowfullscreen allowtransparency>Loading...</iframe><script async src="https://cdn.strawpoll.com/dist/widgets.js" charset="utf-8"></script></div>
`;

$('#popup_poll .popup_cont').append(poll_html);
$("#poll_close").click(function(){
	$('#popup_poll').hide(200);
});





$( document ).ready( function() {

	

	$("#messagebuffer").animate({ scrollTop: $("#messagebuffer").height() },100);
	$(".navbar-brand").attr("href", "https://cytube.implying.fun/c/dotagall");

	$("#chatline").attr("placeholder", "!명령어를 입력해보세요");
	$("#chatline").attr("onkeyup", "submit_check(3000)");
	$("#username").attr("placeholder", "아이디");
	$("#emotes-btn").removeAttr("class");
	$("#cs-emotes-newname").attr("value", "/");
	$("#cs-emotes-newimage").attr("placeholder", "이모티콘 사이즈 (100x100)");
	$("#password").attr("placeholder", "비밀번호");
	$("#guestname").attr("placeholder", "닉네임(영어)");
	$("#mediaurl").attr("placeholder", "영상 주소");
	$("#customembed-title").attr("placeholder", "Iframe 주소");
	$("#userpl_name").attr("placeholder", "플레이리스트 주소");
	$("#cs-password").attr("placeholder", "빈칸일 경우 비활성화됩니다.");
	$(".emotelist-search").attr("placeholder", "이모티콘 검색");
	$("#cs-chanranks-name").attr("placeholder", "아이디를 입력하세요.");
	$("#login").attr("value", "로그인");
	$("#logout").attr("value", "로그아웃");
	$("#showmediaurl").attr("title", "동영상 주소를 추가합니다.");
	$("#btn_openpopup_close").click(function(){
		$('#open_popup').hide(200);
	});
	$("#btn_chatmenu_close").click(function(){
		$('#popup_chatmenu').hide(200);
	});
	$("#btn_chatrule_close").click(function(){
		$('#popup_chatrule').hide(200);
	});
	$("#btn_chatfont_close").click(function(){
		$('#popup_chatfont').hide(200);
	});
	$("#clk_chat_hide").click(function(){
		$('#rightcontent').toggleClass("toggle-class");
		$('#leftcontent').toggleClass("toggle-class");
	});
	$("#btn_chat_opt").click(function(){
		$('#popup_chatmenu').toggle(200);
	});
	$("#clk_chat_rule").click(function(){
		$('#popup_chatrule').toggle(200);
	});
	$("#clk_chat_font").click(function(){
		$('#popup_chatfont').toggle(200);
	});

	$("#clk_chat_color").click(function(){
		$('#popup_chatcolor').toggle(200);
	});

	$("#clk_chat_icon").click(function(){
		$('#popup_chaticon').toggle(200);
	});
   
	$("#clk_chat_schedule").click(function(){
		$('#popup_preschedule').toggle(300);
	});
	
	$(document).keydown(function(event) {
		if ( event.keyCode == 27 || event.which == 27 ) {
			$('.popup_iframe, .popup_chatmenu').hide(300);
		}
	});



	



	let scheduleTop_html = `
	<div class="slider_container">
		<div class="slider_div" id="slider1">
			<div class="slider">
			  ${schedule.map(game => `
			  <div class="slide"><span class="time">${game.time}</span> <span class="team">${game.match}</span></div>
			  `).join('')}

			</div>
			<div class="slider_list">
				<ul>
					 ${schedule.map(game => `
					  <li><span class="time">${game.time}</span> <span class="team">${game.match}</span></li>
					  `).join('')}

				</ul>
				<a href="https://liquipedia.net/dota2/ESL_One/Bangkok/2024" target="_blank" class="link">전체 토너먼트 일정 보기</a>
			</div>
		</div>
	</div>
	`
	$('.navbar').append(scheduleTop_html);


	let btnTop_html = `
	<a href="https://protonvpn.com/ko?srsltid=AfmBOoq3TyIDymiMTl5zpKxUjyH1dmCBdkXK9gGKYEfwrO8sehbibzHC" target="_blank" class="btn_top" style="display:none;">1080P 시청</a>
	`
	$('.navbar-text').append(btnTop_html);


   $("#btn_schedule_close").click(function(){
		$("#popup_schedule").hide(300);	
   });


   /* 이모티콘 패널 */
   let emote_html = `

	<!-- 서유럽 -->
	<div class="group_wrap">
		<h6>서유럽</h6>
		<div class="group">
			<img onclick="insertText('/리퀴드 ')" src="https://i.ibb.co/9q0w6KT/image.webp" title="/리퀴드">
			<img onclick="insertText('/글래디 ')" src="https://i.ibb.co/0rBKCjG/image.webp" title="/글래디">
			<img onclick="insertText('/og ')" src="https://i.ibb.co/t8vxdp6/og.webp" title="/og">
			<img onclick="insertText('/툰드라 ')" src="https://i.ibb.co/NnZcnBF/image.webp" title="/툰드라">
			<img onclick="insertText('/시크릿 ')" src="https://i.ibb.co/1n5DGH6/image.webp" title="/시크릿">
			<img onclick="insertText('/c9 ')" src="https://i.ibb.co/McJvN5v/c9.webp" title="/c9">
			<img onclick="insertText('/얼라 ')" src="https://i.ibb.co/Ldp5qVz/image.webp" title="/얼라">
			<img onclick="insertText('/아뷸 ')" src="https://i.ibb.co/0GDGgXv/image.webp" title="/아뷸">
			<img onclick="insertText('/마우즈 ')" src="https://i.ibb.co/NTZq5Hh/image.webp" title="/마우즈">
		</div>
	</div>
	<!-- 동유럽 -->
	<div class="group_wrap">
		<h6>동유럽</h6>
		<div class="group">
			<img onclick="insertText('/스피릿 ')" src="https://i.ibb.co/wsp1vb7/image.webp" title="/스피릿">
			<img onclick="insertText('/뱃붐 ')" src="https://i.ibb.co/qyPKCsx/image.webp" title="/뱃붐">
			<img onclick="insertText('/나비 ')" src="https://i.ibb.co/mFK068T/image.webp" title="/나비">
			<img onclick="insertText('/vp ')" src="https://i.ibb.co/fxmRJTL/vp.webp" title="/vp">
			<img onclick="insertText('/1win ')" src="https://i.ibb.co/4Kt2zb0/1win.webp" title="/1win">
			<img onclick="insertText('/파리')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%8C%8C%EB%A6%AC%EB%B9%84%EC%A0%84.png" title="/파리">
		</div>
	</div>	

	<!-- 기타지역 -->
	<div class="group_wrap">
		<h6>중동</h6>
		<div class="group">
			<img onclick="insertText('/팔콘 ')" src="https://i.ibb.co/jy7bynC/image.webp" title="/팔콘">
			<img onclick="insertText('/니그마 ')" src="https://i.ibb.co/GQj7yT9/image.webp" title="/니그마">
		</div>
	</div>

	<!-- 중국팀 -->
	<div class="group_wrap">
		<h6>중국</h6>
		<div class="group">
			<img onclick="insertText('/가오주 ')" src="https://i.ibb.co/YhmLr0D/gaozu.webp" title="/가오주">
			<img onclick="insertText('/엘지디 ')" src="https://i.ibb.co/1fB6690/image.webp" title="/엘지디">
			<img onclick="insertText('/xg ')" src="https://i.ibb.co/5snPtq2/xg.webp" title="/xg">
			<img onclick="insertText('/ig ')" src="https://i.ibb.co/YkVb2kY/ig.webp" title="/ig">
		</div>
	</div>

	<!-- 동남아 -->
	<div class="group_wrap">
		<h6>동남아</h6>
		<div class="group">
			<img onclick="insertText('/오로라 ')" src="https://i.ibb.co/zPnMZzD/image.webp" title="/오로라">
			<img onclick="insertText('/탈론 ')" src="https://i.ibb.co/LPgSnjB/image.webp" title="/탈론">
			<img onclick="insertText('/tnc ')" src="https://i.ibb.co/YN9YkWV/tnc.webp" title="/tnc">
			<img onclick="insertText('/xctn ')" src="https://i.ibb.co/swpMw4d/xctn.webp" title="/xctn">
		</div>
	</div>

	<!-- 북남미 -->
	<div class="group_wrap">
		<h6>북/남미</h6>
		<div class="group">
			<img onclick="insertText('/히로익 ')" src="https://i.ibb.co/Gt7nGLw/image.webp" title="/히로익">
			<img onclick="insertText('/붐 ')" src="https://i.ibb.co/MhfKTKh/image.webp" title="/붐">
			<img onclick="insertText('/빗코 ')" src="https://i.ibb.co/jvjt9d2/image.webp" title="/빗코">
			<img onclick="insertText('/쇼피 ')" src="https://i.ibb.co/5YN9Wv5/image.webp" title="/쇼피">
		</div>
	</div>

	`

	let emote2_html = `
	<img onclick="insertText('/독슨 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8F%85%EC%8A%A8.webp" title="/독슨">
	<img onclick="insertText('/갓슨 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EA%B0%93%EC%8A%A8.webp" title="/갓슨">
	<img onclick="insertText('/갈비지 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EA%B0%88%EB%B9%84%EC%A7%80.webp" title="/갈비지">
	<img onclick="insertText('/담배 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8B%B4%EB%B0%B0.webp" title="/담배">
	<img onclick="insertText('/23 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/23.webp" title="/23">
	<img onclick="insertText('/메롱 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A9%94%EB%A1%B1.webp" title="/메롱">
	<img onclick="insertText('/멘붕 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A9%98%EB%B6%95.webp" title="/멘붕">
	<img onclick="insertText('/멘붕2 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A9%98%EB%B6%952.webp" title="/멘붕2">
	<img onclick="insertText('/띠용 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%9D%A0%EC%9A%A9.webp" title="/띠용">
	<img onclick="insertText('/축제 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%B6%95%EC%A0%9C.webp" title="/축제">
	<img onclick="insertText('/322 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/322.webp" title="/322">
	<img onclick="insertText('/니샤 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8B%88%EC%83%A4.webp" title="/니샤">
	<img onclick="insertText('/대니샤 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8C%80%EB%8B%88%EC%83%A4.webp" title="/대니샤">
	<img onclick="insertText('/대인쎄 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8C%80%EC%9D%B8%EC%8E%84.webp" title="/대인쎄">
	<img onclick="insertText('/세이버 ')" src="https://i.ibb.co/K7qvSPK/saberlight.webp" title="/세이버">
	<img onclick="insertText('/미케 ')" src="https://i.ibb.co/0Bh8wBd/ezgif-2-a8b1561c6c.webp" title="/미케">

	<img onclick="insertText('/복시 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%B3%B5%EC%8B%9C.webp" title="/복시">
	<img onclick="insertText('/따봉새비지 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%94%B0%EB%B4%89%EC%83%88%EB%B9%84%EC%A7%80.webp" title="/따봉새비지">
	<img onclick="insertText('/짱큐 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%81%90%EC%A7%B1.webp" title="/짱큐">
	<img onclick="insertText('/좆큐 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%A2%86%ED%81%90.webp" title="/좆큐">
	<img onclick="insertText('/아메 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%95%84%EB%A9%94.webp" title="/아메">
	<img onclick="insertText('/짱슨 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%A7%B1%EC%8A%A8.webp" title="/짱슨">
	<img onclick="insertText('/좆슨 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%A2%86%EC%8A%A8.webp" title="/좆슨">
	<img onclick="insertText('/대머리 ')" src="https://i.ibb.co/LZNgKFM/bald.webp" title="/대머리">
	<img onclick="insertText('/피무룩 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%94%BC%EB%AC%B4%EB%A3%A9.webp" title="/피무룩">
	<img onclick="insertText('/램독 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%9E%A8%EB%8F%85.webp" title="/램독">
	<img onclick="insertText('/33 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/33.webp" title="/33">
	<img onclick="insertText('/피피 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%94%BC%ED%94%BC.webp" title="/피피">
	<img onclick="insertText('/대라치요 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8C%80%EB%9D%BC%EC%B9%98%EC%9A%94.webp" title="/대라치요">
	<img onclick="insertText('/토푸 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%86%A0%ED%91%B8.webp" title="/토푸">
	<img onclick="insertText('/퓨어 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%93%A8%EC%96%B4.webp" title="/퓨어">
	<img onclick="insertText('/캐리차이 ')" src="https://i.ibb.co/0K2F3cq/image.webp" title="/캐리차이">
	<img onclick="insertText('/화몬 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%99%94%EB%AA%AC.webp" title="/화몬">
	<img onclick="insertText('/퍼피 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%8D%BC%ED%94%BC.webp" title="/퍼피">
	<img onclick="insertText('/개라치요 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EA%B0%9C%EB%9D%BC%EC%B9%98%EC%9A%94.webp" title="/개라치요">
	<img onclick="insertText('/크햄 ')" src="https://virtus-img.cdnvideo.ru/images/details-photo/plain/f5/f51576360a2ae616637b2759d13c2c36.jpg@jpg" title="/크황">
	<img onclick="insertText('/레이저 ')" src="https://i.ibb.co/MP6tBwL/image.webp" title="/레이저">
	<img onclick="insertText('/노원 ')" src="https://i.ibb.co/JrDnnJn/ezgif-2-f881d154fc.jpg" title="/노원">
	<img onclick="insertText('/대퍼피 ')" src="https://i.ibb.co/ZcgWzRc/puppey.png" title="/대퍼피">
	<img onclick="insertText('/듀오 ')" src="https://i.ibb.co/wQRMv7G/image.png" title="/듀오">
	<img onclick="insertText('/퀸쪽이 ')" src="https://i.ibb.co/W5BcGq3/image.webp" title="/퀸쪽이">
	<img onclick="insertText('/아마르 ')" src="https://i.ibb.co/mXSdwF4/image.webp" title="/아마르">
	<img onclick="insertText('/말린 ')" src="https://i.ibb.co/86K1kgm/malr1ne.webp" title="/말린">
	<img onclick="insertText('/크릿 ')" src="https://i.ibb.co/NN4WKhb/cr1t.webp" title="/크릿">
	<img onclick="insertText('/리선족 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A6%AC%EC%84%A0%EC%A1%B1.webp" title="/리선족">
	<img onclick="insertText('/크황 ')" src="https://s11.gifyu.com/images/SAff4.png" title="/크황">
	<img onclick="insertText('/랄 ')" src="https://i.ibb.co/pvWFHZT/larl.webp" title="/랄">
	<img onclick="insertText('/키요타카 ')" src="https://i.ibb.co/x51J1yw/kiyotaka.webp" title="/키요타카">
	<img onclick="insertText('/미라클 ')" src="https://i.ibb.co/vBdSBmv/miracle.webp" title="/미라클">
	<img onclick="insertText('/아티지 ')" src="https://i.ibb.co/b5GgHzN/arteezy.webp" title="/아티지">
	<img onclick="insertText('/수메일 ')" src="https://i.ibb.co/n8xnsYR/sumail.webp" title="/수메일">
	<img onclick="insertText('/gg ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/gg.webp" title="/gg">
	<img onclick="insertText('/구웨엑 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EA%B5%AC%EC%9B%A8%EC%97%91.webp" title="/구웨엑">
	<img onclick="insertText('/랫 ')" src="https://s1.gifyu.com/images/SAVo4.jpg" title="/랫">
	<img onclick="insertText('/쥐 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%A5%90.webp" title="/쥐">
	<img onclick="insertText('/퇴비 ')" src="https://i.ibb.co/KzyW2Ty/image.jpg" title="/퇴비">
	<img onclick="insertText('/마그 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A7%88%EA%B7%B8.webp" title="/마그">
	<img onclick="insertText('/댄스 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%8C%84%EC%8A%A42.webp" title="/댄스">
	<img onclick="insertText('/좆물 ')" src="https://i.ibb.co/w4rnZhK/image.png" title="/좆물">
	<img onclick="insertText('/듀드 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%93%80%EB%93%9C.webp" title="/듀드">
	<img onclick="insertText('/로샨 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A1%9C%EC%83%A8.webp" title="/로샨">
	<img onclick="insertText('/언랭 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%96%B8%EB%9E%AD.webp" title="/언랭">
	<img onclick="insertText('/헤럴드 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%97%A4%EB%9F%B4%EB%93%9C.webp" title="/헤럴드">
	<img onclick="insertText('/가디언 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EA%B0%80%EB%94%94%EC%96%B8.webp" title="/가디언">
	<img onclick="insertText('/크루 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%ED%81%AC%EB%A3%A8.webp" title="/크루">
	<img onclick="insertText('/아콘 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%95%84%EC%BD%98.webp" title="/아콘">
	<img onclick="insertText('/레전드 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%A0%88%EC%A0%84%EB%93%9C.webp" title="/레전드">
	<img onclick="insertText('/앤션 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%95%A4%EC%85%98.webp" title="/앤션">
	<img onclick="insertText('/디바인 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EB%94%94%EB%B0%94%EC%9D%B8.webp" title="/디바인">
	<img onclick="insertText('/임모탈 ')" src="https://s3.ap-northeast-2.amazonaws.com/cytube.v2/dotacon/%EC%9E%84%EB%AA%A8%ED%83%88.webp" title="/임모탈">
	`

	let emote3_html = `
	<img onclick="insertText('/당끼 ')" src="https://i.ibb.co/mt048KQ/image.webp" title="/당끼">
	<img onclick="insertText('/말풍 ')" src="https://i.ibb.co/7kdLqQC/image.webp" title="/말풍">
	<img onclick="insertText('/도평 ')" src="https://i.ibb.co/74FX20m/image.webp" title="/도평">
	<img onclick="insertText('/빨리 ')" src="https://i.ibb.co/yFHTwYN/image.webp" title="/빨리">
	<img onclick="insertText('/무 ')" src="https://i.ibb.co/LpmrSdb/image.webp" title="/무">
	<img onclick="insertText('/긁 ')" src="https://i.ibb.co/Zgv6Ch6/image.webp" title="/긁">
	<img onclick="insertText('/털 ')" src="https://i.ibb.co/qFvScxn/image.webp" title="/털">
	<img onclick="insertText('/고트 ')" src="https://i.ibb.co/PWn95TG/image.webp" title="/고트">
	<img onclick="insertText('/바부 ')" src="https://i.ibb.co/nr6yNRv/image.webp" title="/바부">
	<img onclick="insertText('/퇴물 ')" src="https://i.ibb.co/nrMdhyd/image.webp" title="/퇴물">
	<img onclick="insertText('/터보충 ')" src="https://i.ibb.co/9g91nf9/image.webp" title="/터보충">
	<img onclick="insertText('/티어 ')" src="https://i.ibb.co/hFRBphy/image.webp" title="/티어">
	<img onclick="insertText('/개추2 ')" src="https://i.ibb.co/9s2DXLR/2.webp" title="/개추2">
	<img onclick="insertText('/쩐다 ')" src="https://i.ibb.co/pr4wfQS/image.webp" title="/쩐다">
	<img onclick="insertText('/나가 ')" src="https://i.ibb.co/4YBCszt/image.webp" title="/나가">
	<img onclick="insertText('/시카1 ')" src="https://i.ibb.co/hVNTbzp/1.webp" title="/시카1">
	<img onclick="insertText('/시카2 ')" src="https://i.ibb.co/V94ZqH5/2.webp" title="/시카2">
	<img onclick="insertText('/광탈1 ')" src="https://i.ibb.co/1zSLzLb/1.webp" title="/광탈1">
	<img onclick="insertText('/광탈2 ')" src="https://i.ibb.co/L5wZkD1/2.webp" title="/광탈2">
	<img onclick="insertText('/어깨 ')" src="https://i.ibb.co/hCYkzyx/son1.webp" title="/어깨">
	<img onclick="insertText('/동무 ')" src="https://i.ibb.co/2Ns79Fs/son2.webp" title="/동무">
	<img onclick="insertText('/화해1 ')" src="https://i.ibb.co/Q86QdJh/01.webp" title="/화해1">
	<img onclick="insertText('/화해2 ')" src="https://i.ibb.co/cFDWjCz/02.webp" title="/화해2">
	<img onclick="insertText('/화해3 ')" src="https://i.ibb.co/vBVr3DW/03.webp" title="/화해3">
	<img onclick="insertText('/축 ')" src="https://i.ibb.co/DzTNRYn/icon-11.gif" title="/축">
	<img onclick="insertText('/제 ')" src="https://i.ibb.co/wgXRmg3/icon-12-1.gif" title="/제">
	<img onclick="insertText('/행복1 ')" src="https://i.ibb.co/kHNsbcN/1.webp" title="/행복1">
	<img onclick="insertText('/행복2 ')" src="https://i.ibb.co/Cw25MwN/2.webp" title="/행복2">
	<img onclick="insertText('/빤1 ')" src="https://i.ibb.co/hg2TbqZ/1.webp" title="/빤1">
	<img onclick="insertText('/빤2 ')" src="https://i.ibb.co/dp4XgxW/2.webp" title="/빤2">`


	let emote4_html = `
	<img onclick="insertText('/공룡 ')" src="https://i.ibb.co/f9KKsNf/image.webp" title="/공룡">
	<img onclick="insertText('/이해 ')" src="https://i.ibb.co/26QDv0k/image.webp" title="/이해">
	<img onclick="insertText('/데엔 ')" src="https://i.ibb.co/hHyP09L/image.webp" title="/데엔">
	<img onclick="insertText('/신나 ')" src="https://i.ibb.co/nQVt08V/image.webp" title="/신나">
	<img onclick="insertText('/할뻔 ')" src="https://i.ibb.co/gzQTtXs/ezgif-5-25c22138f5.webp" title="/할뻔">
	<img onclick="insertText('/훗 ')" src="https://i.ibb.co/xMRkyfs/image.webp" title="/훗">
	<img onclick="insertText('/헤헤 ')" src="https://i.ibb.co/1KkQFMw/image.webp" title="/헤헤">
	<img onclick="insertText('/허접 ')" src="https://i.ibb.co/41pJ6S3/image.webp" title="/허접">
	<img onclick="insertText('/그만 ')" src="https://i.ibb.co/0yBCQdh/image.webp" title="/그만">
	<img onclick="insertText('/잘자 ')" src="https://i.ibb.co/Y3kc51N/image.webp" title="/잘자">
	<img onclick="insertText('/피식 ')" src="https://i.ibb.co/qB0gr2w/image.webp" title="/피식">
	<img onclick="insertText('/키랏 ')" src="https://i.ibb.co/Fn86FpR/image.webp" title="/키랏">
	<img onclick="insertText('/ㅠㅠ ')" src="https://i.ibb.co/kcP3d4Z/image.webp" title="/ㅠㅠ">
	<img onclick="insertText('/바니 ')" src="https://i.ibb.co/nr0FhKt/image.webp" title="/바니">
	<img onclick="insertText('/젠장 ')" src="https://i.ibb.co/jVjZKGX/image.webp" title="/젠장">
	<img onclick="insertText('/진정 ')" src="https://i.ibb.co/NyPMfzv/image.webp" title="/진정">
	<img onclick="insertText('/덩실 ')" src="https://i.ibb.co/qdLBsrc/image.webp" title="/덩실">
	<img onclick="insertText('/날 ')" src="https://i.ibb.co/3rCQQTF/image.webp" title="/날">
	<img onclick="insertText('/지가 ')" src="https://i.ibb.co/yWbr6tj/image.webp" title="/지가">
	<img onclick="insertText('/빤 ')" src="https://i.ibb.co/jkzBrxR/image.webp" title="/빤">
	<img onclick="insertText('/포실 ')" src="https://i.ibb.co/4Vh6zyM/Image.png" title="/포실">
	<img onclick="insertText('/방금 ')" src="https://i.ibb.co/vw7b3pf/image.webp" title="/방금">
	<img onclick="insertText('/응애 ')" src="https://i.ibb.co/QQhCFW2/image.webp" title="/응애">
	<img onclick="insertText('/엄벌기 ')" src="https://i.ibb.co/sbSXN1J/image.webp" title="/엄벌기">
	<img onclick="insertText('/삣삐 ')" src="https://i.ibb.co/vYV6w9r/image.webp" title="/삣삐">
	<img onclick="insertText('/짝 ')" src="https://i.ibb.co/xHyQNyt/image.webp" title="/짝">	
	<img onclick="insertText('/고마워 ')" src="https://i.ibb.co/m0Nphpd/image.webp" title="/고마워">
	<img onclick="insertText('/ㅎㅎ ')" src="https://i.ibb.co/tppZKgv/image.webp" title="/ㅎㅎ">
	<img onclick="insertText('/기상 ')" src="https://i.ibb.co/MnL5zmJ/image.webp" title="/기상">
	<img onclick="insertText('/눈을떴구나 ')" src="https://i.ibb.co/c3s6ncK/image.webp" title="/눈을떴구나">
	<img onclick="insertText('/게임 ')" src="https://i.ibb.co/0QJ8Tfp/image.webp" title="/게임">
	<img onclick="insertText('/감다뒤 ')" src="https://i.ibb.co/7Ndqpb2/image.webp" title="/감다뒤">
	<img onclick="insertText('/안돼 ')" src="https://i.ibb.co/mNVwVK4/image.webp" title="/안돼">
	<img onclick="insertText('/바보 ')" src="https://i.ibb.co/x3Vbn0N/image.webp" title="/바보">
	<img onclick="insertText('/거북 ')" src="https://i.ibb.co/xmfW42J/image.webp" title="/거북">
	<img onclick="insertText('/인장 ')" src="https://i.ibb.co/WytYMnT/image.webp" title="/인장">
	<img onclick="insertText('/수구 ')" src="https://i.ibb.co/F8dmstV/image.png" title="/수구">
	<img onclick="insertText('/빙글 ')" src="https://i.ibb.co/Fs1NjwP/image.webp" title="/빙글">
		
	`
	


	$(function () {
    // 초기 설정
    let tabsPerPage = 4; // 기본 한 페이지에 보이는 탭 개수
    const totalTabs = $(".tab_menu li").length; // 전체 탭 개수
    let totalPages = Math.ceil(totalTabs / tabsPerPage); // 전체 페이지 수
    let currentPage = 1; // 현재 페이지 초기화
    let currentTabIndex = 0; // 현재 탭 인덱스 초기화
    let isDragging = false; // 드래그 상태 플래그
    let startX = 0; // 드래그 시작 x 좌표
    let startTime = 0; // 드래그 시작 시간

    // 미디어 쿼리와 일치할 경우 탭 개수를 증가시킵니다.
    if (window.matchMedia("(min-width: 1080px) and (min-height: 1920px) and (orientation: portrait)").matches) {
        tabsPerPage = 6; // 화면 크기 조건이 맞을 경우 한 페이지에 보이는 탭 개수를 6으로 설정
    }

    // 페이지 수 재계산
    totalPages = Math.ceil(totalTabs / tabsPerPage);

    // 초기 설정
    $(".tab_menu li").hide(); // 모든 탭 숨기기
    $(".tab_menu li").slice(0, tabsPerPage).show(); // 첫 페이지의 탭들만 표시
    $(".tab_menu li:first").addClass("active"); // 첫 번째 탭 활성화
    $(".tab_cont_wrap .emote_group").hide(); // 모든 탭 콘텐츠 숨기기
    $("#tab_1").show(); // 첫 번째 탭 콘텐츠 표시

    // 페이지 상태 초기화
    showPage(currentPage); // 버튼 상태를 초기화하기 위해 첫 페이지 호출

    // 탭 클릭 이벤트 - 이벤트 위임 사용
    $("#emotespanel").on("click", ".tab_menu li a", function (e) {
        e.preventDefault(); // 기본 동작 방지

        var activeTab = $(this).attr("rel");

        // 모든 탭과 콘텐츠 비활성화
        $(".tab_menu li").removeClass("active");
        $(".tab_cont_wrap .emote_group").hide();

        // 클릭한 탭과 해당 콘텐츠 활성화
        $(this).parent().addClass("active");
        $("#" + activeTab).fadeIn(200); // 페이드 인 효과로 표시
    });

    // 좌측 이동 버튼 이벤트 - 이벤트 위임 사용
    $("#emotespanel").on("click", ".tab_nav_btn.left", function () {
        if (currentPage > 1) { // 이전 페이지가 있는 경우
            currentPage--; // 이전 페이지로 이동
            showPage(currentPage); // 이전 페이지의 탭을 보여줌
            updateActiveTab(); // active 탭 업데이트
        }
    });

    // 우측 이동 버튼 이벤트 - 이벤트 위임 사용
    $("#emotespanel").on("click", ".tab_nav_btn.right", function () {
        if (currentPage < totalPages) { // 다음 페이지가 있는 경우
            currentPage++; // 다음 페이지로 이동
            showPage(currentPage); // 다음 페이지의 탭을 보여줌
            updateActiveTab(); // active 탭 업데이트
        }
    });

    // 페이지 보여주기 함수
    function showPage(page) {
        const start = (page - 1) * tabsPerPage; // 시작 탭 인덱스
        const end = start + tabsPerPage; // 끝 탭 인덱스

        $(".tab_menu li").hide(); // 모든 탭 숨기기
        $(".tab_menu li").slice(start, end).fadeIn(200); // 해당 페이지의 탭들만 페이드 인으로 표시 (200ms)

        // 버튼 표시/숨김 제어
        if (page === 1) { // 첫 페이지일 때
            $(".tab_nav_btn.left").hide(); // "이전" 버튼 숨기기
            $(".tab_nav_btn.right").show(); // "다음" 버튼 표시
        } else if (page === totalPages) { // 마지막 페이지일 때
            $(".tab_nav_btn.left").show(); // "이전" 버튼 표시
            $(".tab_nav_btn.right").hide(); // "다음" 버튼 숨기기
        } else { // 중간 페이지일 때
            $(".tab_nav_btn.left").show(); // "이전" 버튼 표시
            $(".tab_nav_btn.right").show(); // "다음" 버튼 표시
        }
    }

    // 현재 페이지에서 첫 번째 탭을 활성화하는 함수
    function updateActiveTab() {
        $(".tab_menu li").removeClass("active"); // 모든 탭에서 active 클래스 제거
        $(".tab_menu li:visible:first").addClass("active"); // 현재 페이지에서 첫 번째 탭에 active 클래스 추가

        // 해당 탭 콘텐츠 표시
        var activeTab = $(".tab_menu li.active a").attr("rel");
        $(".tab_cont_wrap .emote_group").hide(); // 모든 콘텐츠 숨기기
        $("#" + activeTab).fadeIn(200); // 현재 active 탭 콘텐츠만 페이드 인 효과로 표시
    }

 

    // 키보드 이벤트로 탭 전환
    $(document).keydown(function (e) {
        if (e.key === "ArrowLeft") { // 왼쪽 화살표 키
            $(".tab_nav_btn.left").click(); // 좌측 이동 버튼 클릭
        } else if (e.key === "ArrowRight") { // 오른쪽 화살표 키
            $(".tab_nav_btn.right").click(); // 우측 이동 버튼 클릭
        }
    });
});







   
   $("#emotespanel").contents().wrapAll("<div class='tab_cont_wrap'></div>");
   $("#emotespanel").prepend(
		"<div class='tab_menu_wrapper'>" +
			"<button class='tab_nav_btn left'>&lt;</button>" +
			"<ul class='tab_menu'>" +
				"<li class='active'><a href='javascript:;' rel='tab_1'>기본콘</a></li>" +
				"<li><a href='javascript:;' rel='tab_4'>더블콘</a></li>" +
				"<li><a href='javascript:;' rel='tab_3'>도타콘</a></li>" +
				"<li><a href='javascript:;' rel='tab_2'>응원콘</a></li>" +
				"<li><a href='javascript:;' rel='tab_5'>수용소</a></li>" +
			"</ul>" +
			"<button class='tab_nav_btn right'>&gt;</button>" +
		"</div>"
	);

   
	// 그룹 생성 및 배열
	$("#emotespanel .tab_cont_wrap").contents().wrapAll("<div class='emote_group group1' id='tab_1'></div>");

	// 모든 그룹을 생성하고 순서대로 tab_cont_wrap 내부에 삽입
	$([
		"<div class='emote_group group2' id='tab_2'></div>", // group2: 두 번째 그룹
		"<div class='emote_group group3' id='tab_3'></div>", // group3: 세 번째 그룹
		"<div class='emote_group group4' id='tab_4'></div>", // group4: 네 번째 그룹
		"<div class='emote_group group5' id='tab_5'></div>", // group5: 다섯 번째 그룹
	].join('')).appendTo("#emotespanel .tab_cont_wrap"); // 이제 .tab_cont_wrap 내부에 그룹을 추가합니다.

   $(".emote_group.group2").append(emote_html);
   $(".emote_group.group3").append(emote2_html);
   $(".emote_group.group4").append(emote3_html);
   $(".emote_group.group5").append(emote4_html);

	var teamlogo = [
		"[title|='/마우즈'],[title|='/아뷸'],[title|='/가오주'],[title|='/파리'],[title|='/얼라'],[title|='/리퀴드'],[title|='/글래디'], [title|='/og'], [title|='/툰드라'], [title|='/시크릿'], [title|='/c9'], [title|='/스피릿'], [title|='/뱃붐'], [title|='/나비'], [title|='/vp'], [title|='/yes'], [title|='/1win'], [title|='/오로라'], [title|='/팔콘'], [title|='/퀘스트'], [title|='/니그마'], [title|='/엘지디'], [title|='/xg'], [title|='/ig'], [title|='/히로익'], [title|='/나운즈'], [title|='/쇼피'], [title|='/블랙'], [title|='/tnc'], [title|='/xctn'], [title|='/ar'], [title|='/탈론'], [title|='/붐'], [title|='/빗코']"
	]
	$.each(teamlogo, function(index, team){
		$(".emote_group.group1").contents(team).remove();
	})

	var dotacon = [
		"[title|='/미케']", "[title|='/캐리차이']", "[title|='/레이저']", "[title|='/노원']", "[title|='/미라클']", "[title|='/랄']", "[title|='/키요타카']", "[title|='/크릿']", "[title|='/말린']", "[title|='/세이버']", "[title|='/수메일']", "[title|='/아티지']",  
		"[title|='/좆물']", "[title|='/아마르']", "[title|='/대퍼피']", "[title|='/피피']", "[title|='/대머리']", "[title|='/쥐']", 
		"[title|='/퇴비']", "[title|='/퍼피']", "[title|='/듀드']", "[title|='/셉']", "[title|='/크황']", "[title|='/사타닉']", "[title|='/크햄']", "[title|='/랫']",
		"[title|='/쌀숭이']", "[title|='/리선족']","[title|='/띠용']", "[title|='/아메']","[title|='/퓨어']","[title|='/화몬']","[title|='/개라치요']","[title|='/gg']",  
		"[title|='/쿠로키']", "[title|='/아메']", "[title|='/짱슨']", "[title|='/좆슨']", "[title|='/피무룩']", "[title|='/복시']", "[title|='/로샨']",
		"[title|='/좆큐']", "[title|='/짱큐']", "[title|='/따봉새비지']", "[title|='/대니샤']", "[title|='/대인쎄']", "[title|='/피시방']",
		"[title|='/도타2']", "[title|='/Dude']", "[title|='/갈비지']", "[title|='/언랭']", "[title|='/헤럴드']", "[title|='/가디언']",
		"[title|='/크루']", "[title|='/아콘']", "[title|='/레전드']", "[title|='/앤션']", "[title|='/디바인']", "[title|='/임모탈']",
		"[title|='/독슨']", "[title|='/갓슨']", "[title|='/담배']", "[title|='/따봉']", "[title|='/23']", "[title|='/메롱']",
		"[title|='/멘붕']", "[title|='/멘붕2']", "[title|='/축제']", "[title|='/322']", "[title|='/니샤']", "[title|='/치얼스']","[title|='/듀오']","[title|='/퀸쪽이']",  
		"[title|='/구웨엑']", "[title|='/마그']", "[title|='/댄스']", "[title|='/댄스2']", "[title|='/램독']", "[title|='/33']", "[title|='/대라치요']", "[title|='/토푸']"
	];

	$.each(dotacon, function(index, rtz){
		$(".emote_group.group1").contents(rtz).remove();
	})

	var doublecon = [
		"[title|='/빤2']", "[title|='/빤1']", "[title|='/행복2']", "[title|='/행복1']", "[title|='/제']", "[title|='/축']", "[title|='/화해3']", "[title|='/화해2']", "[title|='/화해1']", "[title|='/동무']", "[title|='/어깨']", "[title|='/당끼']", "[title|='/말풍']", "[title|='/퇴물']", "[title|='/도평']", "[title|='/빨리']", "[title|='/무']", "[title|='/긁']", "[title|='/털']", "[title|='/고트']", "[title|='/바부']", "[title|='/터보충']", "[title|='/잖아']", "[title|='/플마']", "[title|='/티어']", "[title|='/개추2']", "[title|='/쩐다']", "[title|='/나가']",
		"[title='/관짝1']", "[title='/관짝2']", "[title='/신창섭1']", "[title='/신창섭2']", "[title='/신창섭3']", "[title='/신창섭4']","[title='/뇌절1']","[title='/광탈1']","[title='/광탈2']", "[title='/뇌절2']", "[title='/과징금1']", "[title='/과징금2']", "[title='/표독1']", "[title='/표독2']","[title='/봇치1']", "[title='/봇치2']","[title='/호우1']", "[title='/호우2']", "[title='/버거1']", "[title='/버거2']", "[title='/이겨1']", "[title='/시카1']", "[title='/시카2']"
	];


	$.each(doublecon, function(index, twotwo){
		$(".emote_group.group1").contents(twotwo).remove();
	})

	var prisoncon = [
		"[title|='/젠장']", "[title|='/바니']", "[title|='/끼뺫']", "[title|='/빙글']", "[title|='/공룡']", "[title|='/덴하하']", "[title|='/잘자']", "[title|='/허접']", "[title|='/이해']", "[title|='/수구']", "[title|='/할뻔']", "[title|='/행복']", "[title|='/포실']", "[title|='/신나']", "[title|='/네네']", "[title|='/인장']", "[title|='/거북']", "[title|='/훗']", "[title|='/헤헤']", "[title|='/데엔']", "[title|='/바보']", "[title|='/감다뒤']", "[title|='/게임']", "[title|='/졌어']", "[title|='/하?']", "[title|='/이의']", "[title|='/헐']", "[title|='/도로롱']", "[title|='/삣삐']", "[title|='/뿅']", "[title|='/헐']", "[title|='/아왕']","[title|='/진짜']","[title|='/안돼']","[title|='/눈을떴구나']","[title|='/기상']","[title|='/방금']","[title|='/ㅎㅎ']","[title|='/엄벌기']","[title|='/고마워']","[title|='/짝']","[title|='/팝콘']","[title|='/즐겁다']","[title|='/미츄']","[title|='/데헷']","[title|='/니가']","[title|='/덩실']","[title|='/즈큥']","[title|='/원신']","[title|='/윙크']","[title|='/이거야']","[title|='/시무룩']", "[title|='/빤']", "[title|='/에베베']", "[title|='/지가']", "[title|='/그만']", "[title|='/도망']", "[title|='/피식']", "[title|='/그저']", "[title|='/표독']", "[title|='/키랏']", "[title|='/ㅠㅠ']", "[title|='/진정']", "[title|='/뽀큐']", "[title|='/날']", "[title|='/잘가']", "[title|='/승부']", "[title|='/조용']", "[title|='/죽어']", "[title|='/쉿']", "[title|='/응애']", "[title|='/헤응']", "[title|='/노루펀치']"
	];


	$.each(prisoncon, function(index, prison){
		$(".emote_group.group1").contents(prison).remove();
	})
	
	
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
	$('.navbar').hide();
	$('html').addClass("fullscreen");
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
	$('.navbar').show();
	$('html').removeClass("fullscreen");
  }
}
});

/* 현재 페이지 url */
$("#clk_chat_url").click(function(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("중계방 주소가 복사되었습니다.");
});


/* 채팅 지우기 */
$( document ).ready( function() {
	$("#clk_chat_clean").click(function(){
		$('#messagebuffer').empty().replace(/a/gi,"");
		$('#messagebuffer').append(clean_alert_html);
		setTimeout(function(){
			$('.flash_message').hide(300);
		}, 3000);
    });
});


var toggleMainPopup = function() {
  
  /* 쿠키 제어 함수 정의 */
  var handleCookie = {
    // 쿠키 쓰기
    // 이름, 값, 만료일
    setCookie: function (name, val, exp) {
      var date = new Date();
      
      // 만료 시간 구하기(exp를 ms단위로 변경)
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
      
      // 실제로 쿠키 작성하기
      document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
    },
    // 쿠키 읽어오기(정규식 이용해서 가져오기)
    getCookie: function (name) {
      var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return value ? value[2] : null;
    }
  };
  console.log(handleCookie.getCookie("today"));
  
  // 쿠키 읽고 화면 보이게
  if (handleCookie.getCookie("today") == "y") {
    $("#open_popup").removeClass("on");
  } else {
    $("#open_popup").addClass("on");
  }

  // 오늘하루 보지 않기 버튼
  $("#open_popup").on("click", ".btn_today_close", function () {
    handleCookie.setCookie("today", "y", 1);
    $(this).parents("#open_popup.on").removeClass("on");
  });

  // 일반 버튼
  $("#open_popup").on("click", ".btn_close", function () {
    $(this).parents("#open_popup.on").removeClass("on");
  });
}

$(function() {
  toggleMainPopup();
});


$("#clk_chat_popup").click(function(){
	const options = 'width=480, height=800, top=50, left=50, scrollbars=no'
	window.open('#rightcontent','_blank',options)
});

$(document).ready( function() {
    if(location.hash == "#rightcontent"){
        $('html').addClass('window');
    }
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 80) {
		$(".navbar").addClass("scroll");

	} else {
		$(".navbar").removeClass("scroll");
	}
});

var mode = localStorage.getItem("darkMode");
$("#clk_chat_theme").on("click", function () {
  $("html").toggleClass("light");

  if ($("html").hasClass("light")) {
    activateDarkMode();
    localStorage.setItem("darkMode", "enabled");
  } else {
    deactivateDarkMode();
    localStorage.setItem("darkMode", "disabled");
  }
});

if (mode == "enabled") {
  activateDarkMode();
} else if (mode == "disabled") {
  deactivateDarkMode();
}

function activateDarkMode() {
  $("html").addClass("light");
}

function deactivateDarkMode() {
  $("html").removeClass("light");
}





/* 투표결과 공개
$( document ).ready( function() {

	let temp_html = `
	<button id='btn_poll_result' onClick='notifyMe' class='btn btn-primary'>승부예측 공개</button>
	`
	$('#showchansettings').append(temp_html)

	$("#btn_poll_result").click(function(){
		$('#channeloptions').addClass('none');
        $('.popup_vote').css('display','table');
		setTimeout(function(){
			$('.popup_vote').hide(200);
			$('#channeloptions').removeClass('none');
			$('#channeloptions').hide();
		}, 8000);
    });
});
*/


/* 폰트설정 */
var htmlElem = document.querySelector('html');
var bodyElem = document.querySelector('body');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('config_font');
var fontSizeForm = document.getElementById('config_size');

if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('config_font').value);
  localStorage.setItem('size', document.getElementById('config_size').value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentFontSize = localStorage.getItem('size');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('config_font').value = currentFont;
  document.getElementById('config_size').value = currentFontSize;

  bodyElem.style.backgroundColor = '#' + currentColor;
  $(bodyElem).attr("id", currentFont);
  $(htmlElem).attr("id", currentFontSize);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
fontSizeForm.onchange = populateStorage;




function submit_check() {
  
  var chatline = document.getElementById("chatline");

  setTimeout(function() {
    if (chatline.value == "!일정") {
      $("#chatline").val("");
      $("#messagebuffer").append(todayschedule_html);
      $('#messagebuffer').scrollTop($('#messagebuffer')[0].scrollHeight);
    } else if (chatline.value == "!전체일정") {
      $("#chatline").val("");
      $("#popup_schedule").show(300);
      $('#messagebuffer').scrollTop($('#messagebuffer')[0].scrollHeight);
    } else if (chatline.value == "!청소") {
      $("#chatline").val("");
      $("#clk_chat_clean").click();
    } else if (chatline.value == "!규칙") {
      $("#chatline").val("");
      $("#messagebuffer").append("<ol class='list_rule'><li>좆목, 네임드화 및 갤러리내 고정닉을 언급하는 행위</li><li>수위를 넘어선 과도한 욕설 및 정치드립</li><li>경기 결과 스포일러</li><li>배팅충</li></ol>");
      $('#messagebuffer').scrollTop($('#messagebuffer')[0].scrollHeight);
    } else if (chatline.value == "!도갤") {
      $("#chatline").val("");
      window.open("https://gall.dcinside.com/mgallery/board/lists?id=dota");
    } else if (chatline.value == "!명령어") {
      $("#chatline").val("");
      $("#messagebuffer").append(command_html);
      $('#messagebuffer').scrollTop($('#messagebuffer')[0].scrollHeight);
    } else if (chatline.value == "!결과") {
      $("#chatline").val("");
      $("#popup_preschedule").show(300);
      $('#messagebuffer').scrollTop($('#messagebuffer')[0].scrollHeight);
    }
  }, 0);
  
};



document.getElementById('clearStorageBtn').addEventListener('click', function() {
	const userConfirmed = confirm("현재 설정을 초기화하시겠습니까?");
	if (userConfirmed) {
		localStorage.clear();
		alert("설정이 초기화되었습니다.");
	} else {
		alert("설정 초기화가 취소되었습니다.");
	}
});





$(document).ready(function() {
    var predefinedColors = [
		"#e87130", "#FF8C00", "#FF4500", "#ed3f6c", // 오렌지/레드 계열
		"#FFD700", "#FFFF00", "#d7bba3", // 옐로우/베이지 계열
		"#f77bff", "#dc52ff", "#9d6dff", "#9460ff", // 핑크/마젠타/퍼플 계열
		"#7ccaf3", "#1E90FF", "#00CED1", // 블루/청록 계열
		"#93d55e", "#32CD32", "#1dd09b", "#ade438", // 그린 계열
		"#bcbcbc"  // 중간 톤의 색상
	];


    var customColors = {}; 

    function generateUniqueRandomColor() {
        var color;
        do {
            color = '#' + Math.floor(Math.random() * 16777215).toString(16); // 무작위 16진수 색상 생성
        } while (predefinedColors.includes(color)); // 배열에 이미 존재하는 색상인지 확인
        return color;
    }

    function saveUserColor(username, color) {
        localStorage.setItem('userColor-' + username, color);
        customColors[username] = color;
    }

    function loadUserColor(username) {
        return localStorage.getItem('userColor-' + username);
    }

    function assignColors() {
        // 각 .username 요소에 대해 색상을 설정
        $('.username').each(function () {
            var username = $(this).text().replace(':', '').trim(); // 콜론(:)과 공백 제거
            var savedColor = loadUserColor(username);

            if (savedColor) {
                customColors[username] = savedColor;
            } else if (!customColors[username]) {
                var randomColor = predefinedColors[Math.floor(Math.random() * predefinedColors.length)]; // 배열에서 무작위 색상 선택
                saveUserColor(username, randomColor);
                customColors[username] = randomColor;
            }

            $(this).css('color', customColors[username]); // 사용자 이름에 색상 적용
        });
    }

    // MutationObserver를 사용하여 DOM 변경 감지
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                assignColors();
            }
        });
    });

    // 채팅창의 부모 요소를 대상으로 관찰 시작
    var chatContainer = document.querySelector('#messagebuffer'); // 채팅창의 ID에 맞게 수정
    if (chatContainer) {
        observer.observe(chatContainer, {
            childList: true,
            subtree: true
        });
    }

    // 초기 색상 할당
    assignColors();

    // 색상 미리보기 버튼 생성
    predefinedColors.forEach(function(color) {
        $('#color-options').append('<button class="color-button" style="background-color: ' + color + ';" data-color="' + color + '"></button>');
    });

    // 무작위 색상 버튼 추가
    $('#color-options').append('<button class="color-button random" data-color="random"></button>');

    // 색상 버튼 클릭 이벤트
    $('.color-button').click(function() {
        var selectedColor = $(this).data('color');
        var username = prompt("색상을 지정할 사용자 이름을 입력하세요:");
        if (username) {
            username = username.trim().replace(':', ''); // 사용자 이름의 공백과 콜론 제거

            if (selectedColor === "random") {
                selectedColor = generateUniqueRandomColor(); // 무작위 색상 선택
            }

            saveUserColor(username, selectedColor); // 선택된 색상을 저장
            assignColors(); // 색상 재할당
        }
    });
});


$(document).ready(function () {
  // slider1 클릭 이벤트
  $("#slider1 .slider").on("click", function () {
    const sliderList = $(this).siblings(".slider_list"); // 같은 부모 안의 .slider_list 선택
    sliderList.stop().slideToggle(300); // 리스트를 토글
  });
});

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const chatline = document.querySelector("#chatline");

  chatline.addEventListener("click", function () {
    // 계산된 높이만큼 스크롤 이동
    const scrollOffset = window.innerWidth / 16 * 9; // 100vw / 16 * 9 계산

    // 강제로 페이지 스크롤 이동
    document.documentElement.scrollTop += scrollOffset;
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#slider1 .slide");
    let currentSlide = 0;

    // 슬라이드 전환 함수
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    // 초기 슬라이드 표시
    showSlide(currentSlide);

    // 5초마다 슬라이드 전환
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length; // 다음 슬라이드로 이동
        showSlide(currentSlide);
    }, 5000);
});
