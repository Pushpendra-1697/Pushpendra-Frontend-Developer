const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');

describe("GET API Request Tests", async () => {
    it("Should be able to get capsules", async () => {
        const res = await axios.get(`${backendURL}/spacex/capsules`, {
            headers: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjlhNTYyOWY4YjgxMTA2ODA3NTdmZCIsIm5hbWUiOiJQdXNocGVuZHJhIFNpbmdoIiwiaWF0IjoxNjg0NjQ1MjQ2LCJleHAiOjE3MTYxODEyNDZ9.mlnXNRWPYNmmo2dJAGhC6BNBjmix_-jtfJRC-C4zkdc" }
        });
        expect(res.data.status).equal(`Ok`);
        expect(res.status).equal(200);
    });
});