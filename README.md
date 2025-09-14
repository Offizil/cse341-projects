# cse341-projects
web services project folder. 


<!-- connection string
mongodb+srv://fredoffizil:MongoDb2025@cse341-genesis.8evue.mongodb.net/?retryWrites=true&w=majority&appName=cse341-genesis -->


<!-- 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://fredoffizil:<db_password>@cse341-genesis.8evue.mongodb.net/?retryWrites=true&w=majority&appName=cse341-genesis";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); -->
