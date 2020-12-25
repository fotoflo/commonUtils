const chalk = require('chalk')

const moment = require('moment')
require('moment-precise-range-plugin');

// takes two date objects
function getDuration(start, end){
  const m1 = moment(start,'YYYY-MM-DD HH:mm:ss');
  const m2 = moment(end,'YYYY-MM-DD HH:mm:ss');
  return moment.preciseDiff(m1, m2)
}

// takes a settings object { password: string }
const printDBsettings = (settings) => {
    let s = Object.assign({}, settings)
    try{
        s.password = "*".repeat(s.password.length)
    }catch(err){
        console.error(chalk.bgRed(`
        ***************                         
        Cannot start database, be sure to run   
        $ source .env                           
        ***************                         `
        ))
        return false
    }
  
    console.info(chalk.yellow(`
    ***************
    ${chalk.inverse.red("ENV:" + process.env.ENV)}
  
    Starting database with settings 
  ${JSON.stringify(s, null, 2)}
  
    ***************`))
    return true
  }

  function newDateString(date){
    const d = date ? date : new Date()
    return d.toDateString() + " - " + d.toLocaleTimeString()
  }

  function roughSizeOfObject( object ) {

    var objectList = [];
    var stack = [ object ];
    var bytes = 0;

    while ( stack.length ) {
        var value = stack.pop();

        if ( typeof value === 'boolean' ) {
            bytes += 4;
        }
        else if ( typeof value === 'string' ) {
            bytes += value.length * 2;
        }
        else if ( typeof value === 'number' ) {
            bytes += 8;
        }
        else if
        (
            typeof value === 'object'
            && objectList.indexOf( value ) === -1
        )
        {
            objectList.push( value );

            for( var i in value ) {
                stack.push( value[ i ] );
            }
        }
    }
    return bytes;
}

  module.exports = {
    printDBsettings,
    newDateString,
    getDuration,
    roughSizeOfObject
  };