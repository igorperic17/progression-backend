import * as express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    // return all users
    res.send("User route home.");
});

module.exports = router;
