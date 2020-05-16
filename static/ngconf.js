/** 
 * javascript comment 
 * @Author: hankqin 
 * @Date: 2020-05-16 11:46:12 
 * @Desc: 脚本生成 nginx.conf文件
 */
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const { join, resolve } = require('path');
const { port, site } = require(`./config`);
const { name } = require('../package.json')

let str = `server
{
  listen 80;
  server_name ${site};
  location / {
    proxy_pass http://127.0.0.1:${port};
    proxy_redirect default;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}`

// const filepath = resolve(__dirname,'../../static/')
// const fPath = join('./', `${name}.conf`);
fs.exists(`${name}.conf`,function(exists) {
  if(exists) {
    console.log('删除旧conf文件')
    fs.unlinkSync(`${name}.conf`)
  }
  //写入
  // const fPath = join(filepath, `${name}.conf`);
  writeFile(`${name}.conf`, str, { flag: 'wx' });
  console.log(str)
  console.log('生成conf文件完毕')
})