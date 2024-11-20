import { messageRoute } from "../../src/routes/messageRoute.mjs";

describe("message route", () => {

  it("should use hello world when no name provided", async () => {
    const res = {
      json: jest.fn(),
    };

    messageRoute({}, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Hello, world!" });
  });

  it("should use a customized name when query parameter provided", async () => {
    const req = { 
      query : { 
        name: "Michael" 
      }
    };

    const res = {
      json: jest.fn(),
    };

    messageRoute(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Hello, Michael!" });
  });
  
});