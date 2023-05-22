const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');
const { faker } = require('@faker-js/faker');

describe("POST API Request Tests", async () => {
    it("Should create a new user", async () => {
        const randomName = faker.person.firstName();
        const res = await axios.post(`${backendURL}/users/register`, {
            name: randomName,
            password: `${randomName}123`
        });
        expect(res.data.msg).equal("Registered Successfully");
        expect(res.status).equal(201);
    });
    it("Should Login a existing user", async () => {
        const randomName = faker.person.firstName();
        const res = await axios.post(`${backendURL}/users/login`, {
            name: randomName,
            password: `${randomName}123`
        });
        expect(res.data.msg).equal("Wrong Username");
        expect(res.status).equal(201);
    });
});