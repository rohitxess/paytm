
const express = require ("express");
const router = express.Router();
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { authMiddleware } = require("../middleware/middleware");

// signup 
// check if the inputs are correct (validated through zod)
// database doesn't already contain another user 

// validation using zod 

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post("/signup", async (res, req) => {
    const {success} = signupBody.safeParse(req.body)
    if (!success){
        return res.status (411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created Successfully",
        token: token
    })
})

// writting the zod validation for signin route 

const signinBody = zod.object({
    username: zod.string().email,
    password: zod.string()
})

router.post ("/signin", async (res, req) => {
    const {success} = signinBody.safeParse(req.body)
    if (!success){
        return res.status(411).json ({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return ;
    }

    res.status(411).json({
        message:"Error while logging in"
    })

})

// Route to update the user information 

const updateBody = zod.object ({
    username: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

router.put("/", authMiddleware, async (res, req) => {
    const {success} = updateBody.safeParse(req.body)
    if (!success){
        res.status(411).json({
            message:"Error while uodating information"
        })
    }

    await User.updateOne ({_id: req.userId}, req.body);

    res.json({
        message: "Updated Successfully"
    })
})

module.exports = router;



