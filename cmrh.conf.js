const lessParser = require('postcss-less').parse
module.exports = {
    extensions: ['.less','.css'],
    generateScopedName: '[path][name]__[local]--[hash:base64:5]',
    processorOpts: {parser: lessParser},
    
}