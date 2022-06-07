function logger(scriptName) {
    const chalk = require('chalk') 
        this.warning = function warning(txt) {
            console.log("\n" + chalk.magenta(scriptName) + " " + chalk.bgYellow.black(" WARNING ") + " " + txt + "\n")
        };
        this.error = function error(txt) {
            console.log("\n" + chalk.magenta(scriptName) + " " + chalk.bgRed.black(" ERROR ") + " " + txt + "\n")
        };
        this.info = function info(txt) {
            console.log("\n" + chalk.magenta(scriptName) + " " + chalk.bgWhite.black(" INFO ") + " " + txt + "\n")
        };
        this.success = function success(txt) {
            console.log("\n" + chalk.magenta(scriptName) + " " + chalk.bgGreen.black(" SUCCESS ") + " " + txt + "\n")
        };
        this.logtime = function logtime(txt){
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "/"
                            + (currentdate.getMonth()+1)  + "/" 
                            + currentdate.getFullYear() + "@"  
                            + currentdate.getHours() + ":"  
                            + currentdate.getMinutes() + ":" 
                            + currentdate.getSeconds();
            console.log("\n" + chalk.magenta(scriptName) + " [" + datetime + "] " + txt + "\n")
        }
        
    }
    
    module.exports = logger;