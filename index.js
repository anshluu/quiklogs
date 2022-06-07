// Run this demo script!


const log = require('./logs')
const loader = require("./load")

// put your script name below
const logger = new log('your script name here')

logger.error('Uh oh! heres an error!')
logger.success('Everything is all good!')
logger.warning('Warning! something might happen...')
logger.info('Heres some info!')
logger.logtime('Heres some info!')

// Dot Loading Animation
loader.load('Dot Loading Animation...', '3000') 