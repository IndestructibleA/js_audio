//add autovolume
function loadAudio(arr, vol) {
 let audio = document.createElement('audio');
  for (let i = 0, len = arr.length; i < len; i+= 1) {
  	let source = document.createElement("source");
  	 source.src = arr[i];
  	 audio.appendChild(source);

  }
  audio.volume = 1 || vol;

  //delete source;
  
  let o = {
  	dom : false,
  	
  	play : function () {
  	this.dom.currentTime = 0;
    this.dom.play();
  	this.state = 'play';	
  	},
  	pause : function () {
  	this.dom.pause();
  	this.state = 'pause';	
  	},
  	stop : function () {
    this.dom.pause();
    this.dom.currentTime = 0;
    this.state = 'stop';
  	},

    setVolume : function (vol) {
      this.dom.volume = vol;
    }
  
  };
  o.dom = audio;
  return o;	
}


let shoot = loadAudio(['audio/bolter_1.mp3', 'audio/sample.wav', 'audio/sample.ogg']);
let ambient = loadAudio(['audio/ambient.mp3'], 0.4);
let a;

 //shoot.setVolume(0.9); //динамическое изменение громкости
ambient.play();

setInterval(function () {
 if (a == 32) {
  shoot.play();
  }
 if (a == 17) {
  ambient.play();
  } 

 if (a == 27) {
  ambient.stop();
  }  
  a = 0;

 }, 20);
 
 let body = document.getElementById('body');
 body.onkeyup = function (e) {
 a = e.keyCode;
 console.log(e.keyCode);
 };

