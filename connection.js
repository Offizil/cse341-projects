// const { MongoClient, ServerApiVersion } = require('mongodb');


const {MongoClient} = require('mongodb');

async function main() {
	const uri = "mongodb+srv://negotiatorr221_db_user:j6QJ5klr3IoegJ7d@eddycluster.9ouytxs.mongodb.net/?retryWrites=true&w=majority&appName=Eddycluster";
    
    // create an instance of MongoClient.
    const client = new MongoClient(uri);

    try {
    //  use MongoClient to connect to our cluster.
    await client.connect();

    // build a function that prints the names of the databases in this cluster
    await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
    await client.close();
}


}

main().catch(console.error);


/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}