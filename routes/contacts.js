const express = require("express");
const router = express.Router();
const Contact = require("../Models/Contact");
const controllers = require("../controllers/contact.controllers");
// @POST method
// @desc post a contact to database
// @path: http://localhost:5000/api/contact
// Params body

router.post("/", controllers.postContact);

// @GET method
// @desc get all contact
// @path:http://localhost:5000/api/contact

router.get("/", controllers.getAllContacts);

// @GET method
// @desc get contact by id
//  @path:http://localhost:5000/api/contact/:id
// Params by id

router.get("/:id", controllers.getOneContact);

// @DELETE method
// @desc delete contact by id
// @Path::http://localhost:5000/api/contact/:id
// Params by id

router.delete("/:id", controllers.deleteContact);

// @PUT method
// @desc update contact
// @Path::http://localhost:5000/api/contact/:id
// Params id body

router.put("/:id", controllers.updateContact);


module.exports = router;
