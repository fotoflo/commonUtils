# commonUtils

# getDuration
takes two timestamps, returns a duration
  ```
    const {getDuration} = require('commonUtils')
    const sleep = require('util').promisify(setTimeout)
    
    const start = new Date()
    await sleep(1000)
    const end = new Date()
    console.log(`${getDuration(start,end)}`)
  ```


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

# newDateString([Date])


`$ npm install --save fotoflo/commonUtils`
```
const {newDateString} = require('commonUtils')
console.log(`${newDateString()} - logging to console`)
```
`Sat Dec 26 2020 - 5:00:42 AM - logging to console`

# roughSizeOfObject( obj )
returns the rough size of the object formatted with formatBytes

# formatBytes()
// formatBytes(bytes,decimals)

formatBytes(1024);       // 1 KB
formatBytes('1024');     // 1 KB
formatBytes(1234);       // 1.21 KB
formatBytes(1234, 3);    // 1.205 KB