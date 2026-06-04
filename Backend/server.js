const app = require('./src/app')
const DataBase = require('./src/db/model.db');

DataBase();

app.listen(3000,(req)=>{
    console.log("Server Started Sucessfully");
})