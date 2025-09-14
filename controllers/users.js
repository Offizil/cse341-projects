const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;


// mongodb.getDatabase.db()

const getAllUsers = async (req, res) => {
    const db = mongodb.getDatabase().db();
    const result = await db.collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });

}




const getSingleUser = async (req, res) => {
    const userId = new ObjectId (req.params.id);

    const db = mongodb.getDatabase().db();
    const result = await db.collection('users').find({ _id: userId });

    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAllUsers,
    getSingleUser
};