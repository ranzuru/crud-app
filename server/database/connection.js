const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
            // gitanggal ni nako na code (naa ni sa tutorial) kay murag deprecated na, tanawa sa history sa terminal kung makita
            //  or itry og apil og pa run. 
            //  Ang result ana kay "MongoParseError: options usefindandmodify, usecreateindex are not supported"
            // useFindAndModify: false
            // useCreateIndex: true
        })

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;