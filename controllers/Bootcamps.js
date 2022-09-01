const Bootcamp = require("../Model/Bootcamp");
// @ desc Get all bootcamps
// @Routes Get/api/v1/bootcamps
// @acess Public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "show all bootcamps" });
};

// @ desc Get single bootcamps
// @Routes Get/api/v1/bootcamps/:id
// @acess Public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: `show bootcamp ${req.params.id}` });
};

// @ desc create a new bootcamps
// @Routes post/api/v1/bootcamps/:id
// @acess Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

// @ desc Get update bootcamp
// @Routes put/api/v1/bootcamps/:id
// @acess Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `update bootcamps ${req.params.id}` });
};

// @ desc delete bootcamp
// @Routes delete/api/v1/bootcamps/:id
// @acess Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, msg: `delete bootcamps ${req.params.id}` });
};
