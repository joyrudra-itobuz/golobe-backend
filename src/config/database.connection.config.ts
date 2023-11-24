import mongoose from 'mongoose';
import config from './config';

export default function connectDb() {
  try {
    mongoose.connect(config.DATABASE_CONNECTION_STRING);

    const database = mongoose.connection;

    database.on('error', error => {
      console.log('Error in MongoDb connection : ' + error.message);

      mongoose.disconnect();
    });

    database.once('open', () => {
      console.log('Database Connected successfully ✅');
    });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message + 'Failed To Connect to Database');
    } else {
      console.log('Caught and Unknown Error : ', Error);
    }
  }
}
