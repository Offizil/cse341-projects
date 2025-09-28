const express = require("express");
const router = express.Router();

const contactsControllers = require("../controllers/contacts");

router.get("/", contactsControllers.getAllcontacts);

router.get("/:id", contactsControllers.getSinglecontact);

// week 2
router.post("/", contactsControllers.createContact);
router.put("/:id", contactsControllers.modifyContact);
router.delete("/:id", contactsControllers.deleteContact);

module.exports = router;
