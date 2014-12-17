var fis = require('fis');

module.exports = function(content, file, conf){
    if(file.rExt == '.jpl'){
        content = 'module.exports = "' + 
            content.replace(/"/g, '\\"').replace(/[\r\n]/g, '') +
            '";'; 
        file.rExt = '.js';
    }
    return content;
}
