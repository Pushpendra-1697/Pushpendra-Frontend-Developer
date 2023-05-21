const { Router } = require('express');
const spaceRouter = Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));


spaceRouter.get('/capsules', async (req, res) => {
    let { page, search, status, type } = req.query;
    
    let response;
    try {
        if (search) {
            response = await fetch(
                `https://api.spacexdata.com/v3/capsules?original_launch=${search}`
            );
        } else if (status) {
            response = await fetch(
                `https://api.spacexdata.com/v3/capsules?status=${status}`
            );
        } else if (type) {
            response = await fetch(
                `https://api.spacexdata.com/v3/capsules?type=${type}`
            );
        } else {
            response = await fetch(
                `https://api.spacexdata.com/v3/capsules?offset=${page * 9}&limit=9`
            );
        }
        let data = await response.json();
        res.status(200).send({ msg: data, status: "Ok" })

    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});


module.exports = { spaceRouter };