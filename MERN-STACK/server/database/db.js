import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection= async ()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-wzlitow-shard-00-00.a0voitr.mongodb.net:27017,ac-wzlitow-shard-00-01.a0voitr.mongodb.net:27017,ac-wzlitow-shard-00-02.a0voitr.mongodb.net:27017/?ssl=true&replicaSet=atlas-fg3eqn-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(`${URL}/add`,{ useUnifiedTopology: true});
       console.log("database connected successfully");
    }catch(error){
        console.log('Error: ', error.message);
    }
}

export default Connection;

