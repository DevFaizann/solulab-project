const request = require("supertest");
// const app = require("../app.js");
const path = require('path');
const app = require(path.join(__dirname, '..', 'app'));

describe("Category endpoints", () => {
  let categoryId;

  describe("POST /categories", () => {
    it("should create a new category", async () => {
      const res = await request(app).post("/categories").send({
        name: "TestCategory",
        description: "This is a test category",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("_id");//checkinf if res.body object has a property named '_id'
      categoryId = res.body._id;//if the above assertion passes it means that the category was successfully created
    });
  });

  describe("GET /categories", () => {
    it("should get all categories", async () => {
      const res = await request(app).get("/categories");
      expect(res.statusCode).toEqual(200);
      expect(Array.isArray(res.body)).toBeTruthy();//checking if response body is an array
      //toBeTruthy() checks if the expression evaluates to be true
    });
  });

  describe("GET /categories/:categoryId", () => {
    it("should get a single category by id", async () => {
      const res = await request(app).get(`/categories/${categoryId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body._id).toEqual(categoryId);
    });
  });

  describe("PUT /categories/:categoryId", () => {
    it("should update a category", async () => {
      const res = await request(app).put(`/categories/${categoryId}`).send({
        name: "TestCategoryUpdated",
        description: "This is an updated test category",
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual("TestCategoryUpdated");
      expect(res.body.description).toEqual("This is an updated test category");
    });
  });

  describe("DELETE /categories/:categoryId", () => {
    it("should delete a category", async () => {
      const res = await request(app).delete(`/categories/${categoryId}`);
      expect(res.statusCode).toEqual(200);
    });
  });
});
