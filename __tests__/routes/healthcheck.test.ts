import server from "../../src/server";
import request from "supertest";

// Close the server after each test
afterEach(done => {
  server.close();
  done();
});

describe("routes/healthcheck", () => {
  describe("GET /ping", () => {
    it("should ping", async () => {
      const resp = await request(server).get("/ping");

      expect(resp.status).toEqual(200);
      expect(resp.type).toEqual("application/json");
      expect(resp.body.data).toEqual("pong");
    });
  });
});
