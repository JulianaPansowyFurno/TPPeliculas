import {ExtractJwt} from "passport-jwt";
import {Strategy} from "passport"
import {Passport} from "passport"

const opt = {
    secretOrKey: process.env.AUTH_HS256_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    issuer: `${process.env.AUTH_ISSUER_URL}`,
    algorithms: ["HS256"],
};