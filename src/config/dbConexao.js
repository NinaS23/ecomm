/* eslint-disable linebreak-style */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URL_CONEXAO);

const db = mongoose.connection;

export default db;
