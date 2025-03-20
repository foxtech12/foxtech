const express = require("express");
const router = express.Router();
const eventController = require("../controller/caseController");
const multer = require("multer");
const storage = multer.memoryStorage();
const middlewares = require("../middlewares/authMiddleware");

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDFs are allowed."));
    }
  },
});

// Create a case study (accepting only PDFs)
router.post("/add-case", upload.single("image"), eventController.createEvent);

// Get all case studies
router.get("/get-case", eventController.getEvents);

// Get a case study by ID
router.get("/:id", eventController.getEventById);

// Update a case study (accepting only PDFs)
router.put("/update/:id", upload.single("image"), eventController.updateEvent);

// Delete a case study
router.delete("/delete/:id", eventController.deleteEvent);
router.delete("/delete-all", eventController.deleteAllSuggestions);

module.exports = router;
