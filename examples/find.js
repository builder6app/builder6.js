/*
 * @Author: Jack Zhuang 50353452+hotlong@users.noreply.github.com
 * @Date: 2024-06-09 16:36:50
 * @LastEditors: Jack Zhuang 50353452+hotlong@users.noreply.github.com
 * @LastEditTime: 2024-06-09 17:19:49
 * @FilePath: /builder6.js/examples/find.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Airtable = require('..');

const airtable = new Airtable();
var base = airtable.base('meta-builder6-com');

base('b6_projects').find('666301b36d90e705be32ed04', function(err, record) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Retrieved', record);
});
