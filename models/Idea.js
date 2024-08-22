const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
    text:{
        type: String,
        required: [true, "Please add a test field"]
    },
    tag:{
        type: String
    },
    usename:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Idea", IdeaSchema);