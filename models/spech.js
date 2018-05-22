var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
fs=require("fs");
var text_to_speech = new TextToSpeechV1 ({
  "username": "249d674b-6dd5-4782-8eee-d0e5880d4546",
  "password": "G6jWAe5Kejsn"
});



var Test=function ( txt,cb) {

var params = {
  text: txt,
  voice: 'en-US_AllisonVoice',
  accept: 'audio/wav'
	};
var link;
var now=new Date();
var filename=params['text']+now.getDay()+now.getMonth(); 
   console.log('filename='+filename);
   link='./assets/audio/'+filename+'.wav';
// Pipe the synthesized text to a file.
text_to_speech.synthesize(params).on('error', function(error) {
  console.log('Error:', error);
 
}).pipe(fs.createWriteStream(link));

cb(link);

} 
module.exports=Test;