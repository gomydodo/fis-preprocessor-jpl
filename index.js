var fis = require('fis');

module.exports = function(content, file, conf){
    if(file.rExt == '.jpl'){
        content = 'module.exports = "' + 
            content.replace(/"/g, '\\"').replace(/[\r\n]/g, '').replace(/__uri\(([^)]+)\)/g, '" + __uri($1) + "') +
            '";'; 
        file.rExt = '.js';
    }
    return content;
}
