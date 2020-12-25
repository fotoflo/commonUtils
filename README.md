# commonUtils

# printDBsettings

`$ npm install --save fotoflo/commonUtils`
```
const {printDBsettings} = require('commonUtils')

const settings = {
  'user'                  : process.env.DB_USER,
  'host'                  : process.env.DB_HOST,
  'database'              : process.env.DB_NAME,
  'password'              : process.env.DB_PASS,
  'socketPath'            : process.env.DB_SOCKET_PATH,
  'port'                  : process.env.DB_PORT,
  'waitForConnections'    : true,
  'connectionLimit'       : 10,
  'queueLimit'            : 1000
}

printDBsettings(settings)
```

Output if there is no env:


![image](https://user-images.githubusercontent.com/1642357/103044709-84da4f80-45bc-11eb-8d0a-34e47a21ef01.png)

OR 
If there is an env


![image](https://user-images.githubusercontent.com/1642357/103044983-a7209d00-45bd-11eb-937d-e79ca7666315.png)

# newDateString


`$ npm install --save fotoflo/commonUtils`
```
const {newDateString} = require('commonUtils')
console.log(`${newDateString()} - logging to console`)
```
