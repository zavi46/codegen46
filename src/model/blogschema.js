const { mongoose } = require("mongoose");

const blogsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    read: {
        type: Number,
        required: true
    },
    shortDesc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ["web-technologies", "technology-trends", "artificial-intelligents", "programming-tutorials", "ai-tools"]
        }
    },
})

module.exports = mongoose.model("Blogs", blogsSchema);