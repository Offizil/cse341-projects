// Require statments
// require('dotenv').config();
const express = require('express')

const app = express()
const mongodb = require('./database/connection')


const port = process.env.PORT || 3000
const router = require('./routes/index')


// Middleware
app.use('/', router);



// ------------------------------------------------
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    }
  )

}});





app.listen(port, () => {
  console.log('Web Server is listening at port ' + port)
})