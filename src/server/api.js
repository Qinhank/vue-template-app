/** 
 * javascript comment 
 * @Author: hankqin 
 * @Date: 2020-05-14 09:50:55 
 * @Desc: 爬取后端api脚本
 */

const axios = require('axios')
const { swagger } = require(`../../bp.config`);
const { join } = require('path');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const { swaggerOptions, filePath } = swagger

//1.解析json数据 2.处理数据 3.生成api.js文件
async function init() {
  const res = await axios({
    method: 'get',
    url: swaggerOptions.url
  })
  if(res.status===200) {
    const { tags, paths, definitions } = res.data
    let arr = tags.map(_ => { return { ..._, paths: [] }})
    let text = ``
    if(paths && typeof paths === 'object') {
      for(let i in paths) {
        if(i!='/error') {
          let obj = {
            path: i
          }
          let item = paths[i]
          for(let j in item) {
            obj.tab = item[j].tags&&item[j].tags.length?item[j].tags[0]:''
            obj.summary = item[j].summary||''
            obj.method = j
          }
          arr = arr.map(_ => {
            if(_.name==obj.tab) {
              _.paths.push(obj)
            }
            return _
          })
        }
      }
    }
    const dealPath = path => {
      const arr = path.split('/')
      let str = ''
      arr.map((_,i) => {
        if(i>1) {
          str += _.replace(_[0],_[0].toUpperCase())
        } else {
          str += _
        }
      })
      return str
    }
    arr.map((_,index) => {
      if(_.paths.length) {
        let str = `
  /******${_.name}: ${_.description} ******/`
        _.paths.map((c,i) => {
        str += `
  //${c.summary}（${c.method}）
  ${dealPath(c.path)}: '${c.path}'${i==_.paths.length-1?`,
`:','}`
        })
        text += str
      }
    })

    fs.exists(filePath,function(exists) {
      if(exists) {
        fs.unlinkSync(filePath)
      }
      //写入
      const fPath = join('./src', `api.js`);
      writeFile(fPath, `export default {${text}}`, { flag: 'wx' });
      console.log('生成api文件完毕')
    })
  }
}

init()