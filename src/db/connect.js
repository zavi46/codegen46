
const mongoose = require('mongoose')

const connecDB = async (uri) => {
    try {
        console.log("connected successfully");
        mongoose.set('strictQuery', false)
        return mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connecDB