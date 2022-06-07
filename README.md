# Quiklogs - The simplest way to log.
<img src="https://gcdnb.pbrd.co/images/lGnOZZzQJ7dV.png?o=1">

# Intro
Logging data to consoles and terminals is an important part of communication with your user or debugger. Standard `console.log` is effective, yet messy and confusing. Quiklogs allows to to create colored Info, Warning, Error, and Success logs that stand out and are easy to use. Our built in loading animations add a bit of style. What makes this different from all the other logging packages out there? How simple it is! Just define the package and start using ```logger.success()```
# Examples / Quick Start
Looking for the docs? Whoops, wrong spot. Just scroll a bit more or click [here!](#Docs)

**IMPORTANT:** Woah! Wait, before you can start, install the package with `npm install -g quiklogs`
```
// Run this demo script!

const log =  require('quiklogs/logs');
const loader =  require("quiklogs/load");

// put your script name below
const logger =  new  log('your script name here')

  

logger.error('Uh oh! heres an error!')
logger.success('Everything is all good!')
logger.warning('Warning! something might happen...')
logger.info('Heres some info!')
logger.logtime('Log events here!')

// Dot Loading Animation
loader.load('Dot Loading Animation...',  '3000') // the 10000 is the time in milliseconds you want it to last for
```
# Docs
