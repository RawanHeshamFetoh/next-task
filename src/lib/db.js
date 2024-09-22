import { MongoClient } from "mongodb"

let db
if(!db){

    // const mongoClient = new MongoClient("mongodb://localhost:27017/Next")
        const mongoClient = new MongoClient("mongodb+srv://rawanFetoh:qqig591@cluster0.4z0wr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    const clientPromise = await mongoClient.connect()
    db= clientPromise.db('Next')
    // db= clientPromise.db()
}
export default db