const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/Bootcamps");

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);
// router.get("/", (req, res) => {
//   res.status(200).json({ scuess: true, msg: "show all bootcamps" });
// });

// router.get("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `show all bootcamps ${req.params.id}` });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ sucess: true, msg: "create a new bootcamps" });
// });

// router.put("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `update bootcamps ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res
//     .status(200)
//     .json({ sucess: true, msg: `Delete bootcamps ${req.params.id}` });
// });

module.exports = router;
