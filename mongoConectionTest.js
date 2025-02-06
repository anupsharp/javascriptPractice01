// const {MongoClient,ServerApiVersion} = require('mongodb');
// const URI = 'mongodb+srv://work40618:ienfP6lw5h3DTgQe@test123.y0hcb.mongodb.net/?retryWrites=true&w=majority&appName=test123';

// const client = new MongoClient(URI,
// {
//     serverApi:{
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true
//     }
// });

// async function run(){
//     try{
//         await client.connect();
//         await client.db('admin').command({ping:1}); 
//         console.log('Connected to the server');
//     }finally{
//         await client.close();
//     }
// }   


// run().catch(console.dir);   


const { MongoClient, ServerApiVersion } = require('mongodb');

const URI = 'mongodb+srv://work40618:ienfP6lw5h3DTgQe@test123.y0hcb.mongodb.net/?retryWrites=true&w=majority&appName=test123';

const client = new MongoClient(URI, {
    serverApi: {
        tlsInsecure: true,
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect to the database
        await client.connect();

        // Ping the database to check connectivity
       movelist =  await client.db('sample_mflix').collection('movies').find().limit(1).toArray(); 
        
        console.log(movelist);  
        console.log('Connected to the server');
    } catch (error) {
        console.error('Connection error:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.error);
