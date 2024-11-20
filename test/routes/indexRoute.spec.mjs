import { indexRoute } from "../../src/routes/indexRoute.mjs";

describe("index route", () => {

  it("should return a welcome message", async () => {
    const res = {
      send: jest.fn(),
    };

    indexRoute({}, res);

    expect(res.send).toHaveBeenCalledWith("Hello, world!!!");
  });
  
});