import User from "../models/User.js";
import bcrypt from "bcryptjs";
import createError from "http-errors";
import Jwt  from "jsonwebtoken";


export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(200).send("User has been created")
    } catch (err) {
        next(err)
    }
};

export const login = async (req, res, next) => {
    try {
        //try-catch block to handle any potential errors that may occur during the authentication process.
        const user = await User.findOne({ username: req.body.username }); //User.findOne() method is used to find a user document in the database
        if (!user) return next(createError(404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(
            //bcrypt.compare() to compare the provided password value from the request body with the hashed password
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "wrong password or username!"));
        
        const token = Jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT); //"sdfsdfs" shoud have change but i can not install openssl

        const { password, isAdmin, ...otherDetails } = user._doc; //excluding the password and isAdmin properties.
      
        res
            .cookie("access_token", token, {
                httpOnly: true,     //used to any client can not reach this cookies
            })
            .status(200)
            .json({ details: {...otherDetails} , isAdmin});
    } catch (err) {
        next(err);
    }
};