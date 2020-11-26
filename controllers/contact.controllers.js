exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    const response = await newContact.save();
    res.status(200).send({ response: response, message: "data saved" });
  } catch (error) {
    res.status(400).send({ message: "cannot save it" });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res
      .status(200)
      .send({ response: result, message: "geting contact successfly" });
  } catch (error) {
    res.status(400).send("cannot get contacts");
  }
};
exports.getOneContact = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.status(200).send({ response: result, message: "this your contact" });
  } catch (error) {
    res.status(400).send({ message: "there is not contact with this id" });
  }
};
exports.deleteContact = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.status(200).send({ message: "contact deleted" })
      : res.status(200).send({ message: "there is no contact with this id" });
  } catch (error) {
    res.status(400).send({ message: "cannot delete contact" });
  }
};
exports.updateContact = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    result.nModified
      ? res.status(200).send({ message: "contact updated" })
      : res.status(200).send({ message: "this is the same contact" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
};
