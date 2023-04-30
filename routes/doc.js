const express = require("express");
const router = express.Router();
const createDoc = require("../DB/controllers/doc");
const Doctor = require("../DB/models/doc");
//create doctor
router.post("/new", async (req, res) => {
  try {
    const newdoc = new Doctor({
      docId: req.body.docId,
      name: req.body.name,
    });

    const doc = await newdoc.save();
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: JSON.stringify(error) });
  }
});
router.post("/new-appointment", async (req, res) => {
    try {
      console.log(req.param);
    const doc = await Doctor.findById(req.body.docId);
    doc.appointment.push(...req.body.appointment);
        console.log(doc);
      await doc.save();
      
      res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: JSON.stringify(error) });
  }
});

module.exports = router;
