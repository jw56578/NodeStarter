module.exports = {
  load: function (obj) {
    //populate the obj in the format that is expected
    
    var args =process.argv.slice(2);
    args = args[0].split(' ');
    obj.commands = [{name:args[0],parameter:args[1]}];

  }
 
};
