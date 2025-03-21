import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export function createAccessToken(payload){
    return new Promise((resolve, reject) => {
        console.log(process.env.TOKEN_SECRET)
        jwt.sign(
            payload, process.env.TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err)
                    resolve(token)
            }
        );
    });
};