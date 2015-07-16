var mongoose = require('mongoose');

module.exports = mongoose.model('Works', {
    image_url: String,
    work_url: String
});
