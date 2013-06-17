exports.action = function(data, callback, config, SARAH) {
  
  var exec = require('child_process').exec;

  if (data.soundValue == "veille") {
  //	var command = "standby";
  }
  
  //autre solution
  //var process = '%CD%/plugins/byebye/bin/wosb.exe'; 
  //process +=  ' '+ command;  
  
  //necessite les droits admin
  var process = '%CD%/plugins/byebye/bin/miseEnVeille.bat';
  console.log(process);

  var child = exec(process,
  function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  }); 
  
  callback({'tts': "voila, je me mets en veille."});
}