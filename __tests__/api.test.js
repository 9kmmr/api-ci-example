const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require("../index");


describe("getLists function", () => {
    test("it should return a lists of coins", async () => {
        // actual test
        const response = await request(app).get("/lists");
        expect(response.statusCode).toEqual(200);
        expect(response.body.data.cryptoCurrencyMap.length).toEqual(50)
        
    });
   
  });