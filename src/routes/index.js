import express from "express";
import exampleRouter from "./example.js";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/example",
    route: exampleRouter,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
