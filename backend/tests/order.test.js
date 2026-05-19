const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.json());

// MOCK ROUTES
app.get("/orders/:id", (req, res) => {
  res.status(200).json({
    id: req.params.id,
    status: "received",
  });
});

app.post("/orders", (req, res) => {

  // VALIDATION
  if (!req.body.customer) {
    return res.status(400).json({
      message: "Customer required",
    });
  }

  res.status(201).json({
    message: "Order created",
  });
});

describe("Orders API", () => {

  test("GET order should return status", async () => {

    const res = await request(app).get("/orders/123");

    expect(res.statusCode).toBe(200);

    expect(res.body.status).toBe("received");

  });

  test("POST order validation", async () => {

    const res = await request(app)
      .post("/orders")
      .send({});

    expect(res.statusCode).toBe(400);

  });

});