const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;


// mongodb.getDatabase.db()

const getAllcontacts = async (req, res) => {
    const db = mongodb.getDatabase().db();
    const result = await db.collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });

}




const getSinglecontact = async (req, res) => {
    const contactId = new ObjectId (req.params.id);

    const db = mongodb.getDatabase().db();
    const result = await db.collection('contacts').find({ _id: contactId });

    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

module.exports = {
    getAllcontacts,
    getSinglecontact
};