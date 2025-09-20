const mongodb = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;


// mongodb.getDatabase.db()

const getAllcontacts = async (req, res) => {
    // #swagger.tags = ['contacts']

    const db = mongodb.getDatabase().db();
    const result = await db.collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });

}




const getSinglecontact = async (req, res) => {
    // #swagger.tags = ['contacts']
    const contactId = new ObjectId (req.params.id);

    const db = mongodb.getDatabase().db();
    const result = await db.collection('contacts').find({ _id: contactId });

    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};


const createContact = async (req, res) => {
    // #swagger.tags = ['contacts']
    const db = mongodb.getDatabase().db();
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await db.collection('contacts').insertOne(contact);
    


    if (result.acknowledged) {
        res.status(201).json(result);       
    } else {
        res.status(500).json(result.error || 'Some error occurred while creating the contact.');
    }   
};


const modifyContact = async (req, res) => { 
    // #swagger.tags = ['contacts']
    const contactId = new ObjectId (req.params.id);
    const db = mongodb.getDatabase().db();
    const contact = {   
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,  
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await db.collection('contacts').updateOne({_id: contactId}, { $set: contact } );

    if (result.modifiedCount > 0) {
        res.status(204).send();       
    } else {    
        res.status(500).json(result.error || 'Some error occurred while updating the contact.');
    }
};

const deleteContact = async (req, res) => {
    // #swagger.tags = ['contacts']
    const contactId = new ObjectId (req.params.id);
    const db = mongodb.getDatabase().db();
    const result = await db.collection('contacts').deleteOne({_id: contactId});

    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
    }
};

module.exports = {
    getAllcontacts,
    getSinglecontact,
    createContact,
    modifyContact,
    deleteContact
};