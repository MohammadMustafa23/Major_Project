const app = require('./src/app')
const DataBase = require('./src/db/model.db');

DataBase();

app.listen(3000,()=>{
    console.log("Server Started Sucessfully");
})