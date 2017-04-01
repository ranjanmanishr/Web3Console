var exports = module.exports = {};


exports.parseCommand-function(command){

	if(!command) return "input not valid";

   let csrting=command.replace(/;$/,"");
   let matches = csrting.match(/^(web.\w+.\w*)(\((.*)\))$/);

   return {cmd:matches[1],params:matches[3].replace(/'|"/g,"").split(",")}


}