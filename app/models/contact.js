var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
    name: String,
    url: String
});
