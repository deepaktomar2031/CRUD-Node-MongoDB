const request = require("supertest");
const app = require("./index");

describe("Shopping app product service", () => {
  it("Responds with 200 OK on GET /shopping-app/products", async () => {
    const response = await request(app).get("/shopping-app/products");
    expect(response.status).toBe(200);
  });

  it("Responds with 200 OK and data on GET /shopping-app", async () => {
    const response = await request(app).get("/shopping-app/products");
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
