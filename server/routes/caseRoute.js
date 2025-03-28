const express = require("express");
const router = express.Router();
const eventController = require("../controller/caseController");
const multer = require("multer");
const storage = multer.memoryStorage();
const middlewares = require("../middlewares/authMiddleware");

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only PDFs and images (JPEG, PNG) are allowed."));
  }
};

// Multer configuration for multiple file fields
const upload = multer({
  storage,
  fileFilter,
});

// Create a case study (accepting only PDFs)
router.post("/add-case", upload.fields([{ name: "image" }, { name: "imgCase" }]), eventController.createEvent);

// Get all case studies
router.get("/get-case", eventController.getEvents);

// Get a case study by ID
router.get("/:id", eventController.getEventById);

// Update a case study (accepting only PDFs)
router.put(
  "/update/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "imgCase", maxCount: 1 },
  ]),
  eventController.updateEvent
);

// Delete a case study
router.delete("/delete/:id", eventController.deleteEvent);
router.delete("/delete-all", eventController.deleteAllSuggestions);

module.exports = router;
