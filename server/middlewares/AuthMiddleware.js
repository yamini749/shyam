import jwt from "jsonwebtoken";


export const verifyToken = (request, response, next) => {
    console.log(request.cookies);
    const token = request.cookies.jwt;
    console.log({ token });
};

