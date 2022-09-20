// Load necessary packages
const express = require("express");

// express router
const router = express.Router();

// route for handling PDF request
router.post("/datasheet/v1/templates/:templateId/datasheet", (req, res) => {
	res.download("uploads/Resume.pdf");
});

// export router middleware and use it in app.js
module.exports = router;

