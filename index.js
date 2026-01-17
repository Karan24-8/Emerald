let express=require('express');
let mongoose=require('mongoose');
require('dotenv').config();
let app = express();
app.use(express.json());


//Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
        console.log('Server is running');
    })
}).catch((err) => {
    console.log(err);
})