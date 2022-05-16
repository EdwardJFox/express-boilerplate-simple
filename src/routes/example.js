import express from "express";
import {
  getExamples,
  getExample,
  postExample,
  patchExample,
  deleteExample
} from "../controllers/example.js";

const router = express.Router();

// If necessary seperate these out into individual declarations of each
// method, depending on the middleware they need

router
  .route("/")
  .get(getExamples)
  .post(postExample);

router
  .route("/:id")
  .get(getExample)
  .patch(patchExample)
  .delete(deleteExample);

export default router;
