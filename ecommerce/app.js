const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require("dotenv").config();
// import router
const userRouter = require('./routes/user')

//app
const app = express();

//db
mongoose.connect(process.env.MONGO_URI, 
    {
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    }).then(() => console.log('DB Connected!')).catch(err => {
        console.log(`DB Connection Error: ${err.message}`)
    }); 

//middlaware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//routes middlaware
app.use('/api',userRouter);


const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
