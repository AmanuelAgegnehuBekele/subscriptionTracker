import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all Subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Get Subscriptions details" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Create a Subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "Update a subscription" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete a subscription" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get all user Subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel Subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get Upcoming renewals " });
});

export default subscriptionRouter;
