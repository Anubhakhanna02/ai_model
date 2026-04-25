// const mongoose = require("mongoose");

// const memorySchema = new mongoose.Schema({
//     text: String,
//     importance: Number,
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model("Memory", memorySchema);



const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
    content: String,
    usage: Number,
    importance: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Memory", memorySchema);