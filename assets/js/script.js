//botones
//variables
var startButton = document.getElementById('start-button')
var notepadButton = document.getElementById('notepad-button')
startButton.onclick = function() {
  console.log('test start');
}
var kagome = document.getElementById('focused-img')
// var inuyasha = document.getElementById('angry-inuyasha')
kagome.onclick = function() {
  $(this).css ({
    'display' : 'none'
  })
  document.getElementById('do-not-touch-text').innerHTML = '<p><strong>te lo advertí</strong></p>'
  $('#angry-inuyasha').css ({
    'display' : 'inline-block' 
  })
  $('#dntdstrb').css ({
    'color' : 'red'
  })
}

//tabs

//kagome-inuyasha



//clock
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes =now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;


  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}
setInterval(updateTime, 100)
updateTime();


// initiate variables music player
            let now_playing = document.querySelector(".now-playing");
            let track_name = document.querySelector(".track-name");
            let track_artist = document.querySelector(".track-artist");
            let playpause_btn = document.querySelector(".playpause-track");
            let next_btn = document.querySelector(".next-track");
            let prev_btn = document.querySelector(".prev-track");
            let seek_slider = document.querySelector(".seek_slider");
            let volume_slider = document.querySelector(".volume_slider");
            let curr_time = document.querySelector(".current-time");
            let total_duration = document.querySelector(".total-duration");
            let track_index = 0;
            let isPlaying = false;
            let updateTimer;
            // create new audio element
            let curr_track = document.getElementById("music");
            //
            // DEFINE YOUR SONGS HERE!!!!!
            // MORE THAN FOUR SONGS CAN BE ADDED!!
            // JUST ADD ANOTHER BRACKET WITH NAME ARTIST AND PATH
            // CATBOX.MOE IS RECOMMENDED FOR UPLOADING MP3 FILES IF YOU DON'T HAVE NEOCITIES SUPPORTER
            let track_list = [
                {
                    name:"To Love's End",
                    artist:"InuYasha",
                    path:"https://files.catbox.moe/1kc8xg.mp3"
                },
                {
                    name:"Homage for InuYasha",
                    artist:"InuYasha",
                    path:"https://files.catbox.moe/q6g5db.mp3"
                },
                {
                    name:"Beautiful Memory",
                    artist:"InuYasha",
                    path:"https://files.catbox.moe/besdh3.mp3"
                },
                {
                    name: "Dearest",
                    artist:"InuYasha",
                    path: "https://files.catbox.moe/ffwl55.mp3",
                },
            ];
            //
            //
            //
            //
            //
            function loadTrack(track_index){
                clearInterval(updateTimer);
                resetValues();
                // load a new track
                curr_track.src = track_list[track_index].path;
                curr_track.load();
                // update details of the track
                track_name.textContent = track_list[track_index].name;
                track_artist.textContent = track_list[track_index].artist;
                now_playing.textContent = "Playing " + (track_index + 1) + " of " + track_list.length;
                // set an interval of 1000 milliseconds for updating the seek slider
                updateTimer = setInterval(seekUpdate, 1000);
                // move to the next track if the current one finishes playing 
                curr_track.addEventListener("ended", nextTrack);
            }
            // reset values
            function resetValues(){
                curr_time.textContent = "0:00";
                total_duration.textContent = "0:00";
                seek_slider.value = 0;
            }
            // load the first track in the tracklist
            loadTrack(track_index);
            // checks if song is playing
            function playpauseTrack(){
                if (!isPlaying) playTrack();
                else pauseTrack();
            }
            // plays track when play button is pressed
            function playTrack(){
                curr_track.play();
                isPlaying = true;
                // replace icon with the pause icon
                playpause_btn.innerHTML = '&#9646;';
            }
            // pauses track when pause button is pressed
            function pauseTrack(){
                curr_track.pause();
                isPlaying = false;
                playpause_btn.innerHTML = '&#9654;';
            }
            // moves to the next track
            function nextTrack(){
                if (track_index < track_list.length - 1)
                    track_index += 1;
                else track_index = 0;
                loadTrack(track_index);
                playTrack();
            }
            // moves to the previous track
            function prevTrack(){
                if (track_index > 0)
                    track_index -= 1;
                else track_index = track_list.length;
                loadTrack(track_index);
                playTrack();
            }
            // seeker slider
            function seekTo(){
                seekto = curr_track.duration * (seek_slider.value / 100);
                curr_track.currentTime = seekto;
            }
            // volume slider
            function setVolume(){
                curr_track.volume = volume_slider.value / 100;
            }
            setVolume();
            function seekUpdate(){
                let seekPosition = 0;
                // check if the current track duration is a legible number
                if (!isNaN(curr_track.duration)){
                    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                    seek_slider.value = seekPosition;
                    // calculate the time left and the total duration
                    let currentMinutes = Math.floor(curr_track.currentTime / 60);
                    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                    let durationMinutes = Math.floor(curr_track.duration / 60);
                    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
                    // adding a zero to the single digit time values
                    if (currentSeconds < 10){ currentSeconds = "0" + currentSeconds; }
                    if (durationSeconds < 10){ durationSeconds = "0" + durationSeconds; }
                    if (currentMinutes < 10){ currentMinutes = currentMinutes; }
                    if (durationMinutes < 10){ durationMinutes = durationMinutes; }
                    curr_time.textContent = currentMinutes + ":" + currentSeconds;
                    total_duration.textContent = durationMinutes + ":" + durationSeconds;
                }
            }








            // cursor
            // <![CDATA[
var colours=new Array("#a6f", "#ccc", "#60f", "#a6f", "#ccc"); // colours for top, right, bottom and left borders and background of bubbles
var bubbles=16; // maximum number of bubbles on screen
var over_or_under="over"; // set to "over" for bubbles to always be on top, or "under" to allow them to float behind other objects

/****************************
* JavaScript Bubble Cursor  *
*(c)2010-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var bubb=new Array();
var bubbx=new Array();
var bubby=new Array();
var bubbs=new Array();
var sploosh=false;

function addLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addLoadEvent(buble);

function buble() { if (document.getElementById) {
  var i, rats, div;
  for (i=0; i<bubbles; i++) {
    rats=createDiv("3px", "3px");
    rats.style.visibility="hidden";
	rats.style.zIndex=(over_or_under=="over")?"1001":"0";

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="1px";
    div.left="0px";
    div.bottom="1px";
    div.right="0px";
    div.borderLeft="1px solid "+colours[3];
    div.borderRight="1px solid "+colours[1];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.top="0px";
    div.left="1px";
    div.right="1px";
    div.bottom="0px"
    div.borderTop="1px solid "+colours[0];
    div.borderBottom="1px solid "+colours[2];

    div=createDiv("auto", "auto");
    rats.appendChild(div);
    div=div.style;
    div.left="1px";
    div.right="1px";
    div.bottom="1px";
    div.top="1px";
    div.backgroundColor=colours[4];
    if (navigator.appName=="Microsoft Internet Explorer") div.filter="alpha(opacity=50)";
    else div.opacity=0.5;
    document.body.appendChild(rats);
    bubb[i]=rats.style;
  }
  set_scroll();
  set_width();
  bubble();
}}

function bubble() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<bubbles; c++) if (!bubby[c]) {
      bubb[c].left=(bubbx[c]=x)+"px";
      bubb[c].top=(bubby[c]=y-3)+"px";
      bubb[c].width="3px";
      bubb[c].height="3px"
      bubb[c].visibility="visible";
      bubbs[c]=3;
      break;
    }
  }
  for (c=0; c<bubbles; c++) if (bubby[c]) update_bubb(c);
  setTimeout("bubble()", 40);
}

document.onmousedown=splash;
document.onmouseup=function(){clearTimeout(sploosh);};

function splash() {
  ox=-1;
  oy=-1;
  sploosh=setTimeout('splash()', 100);
}

function update_bubb(i) {
  if (bubby[i]) {
    bubby[i]-=bubbs[i]/2+i%2;
    bubbx[i]+=(i%5-2)/5;
    if (bubby[i]>sdown && bubbx[i]>sleft && bubbx[i]<sleft+swide+bubbs[i]) {
      if (Math.random()<bubbs[i]/shigh*2 && bubbs[i]++<8) {
            bubb[i].width=bubbs[i]+"px";
            bubb[i].height=bubbs[i]+"px";
      }
        bubb[i].top=bubby[i]+"px";
        bubb[i].left=bubbx[i]+"px";
    }
    else {
        bubb[i].visibility="hidden";
        bubby[i]=0;
        return;
    }
  }
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height;
  div.style.width=width;
  div.style.overflow="hidden";
  div.style.backgroundColor="transparent";
  return (div);
}
// ]]>