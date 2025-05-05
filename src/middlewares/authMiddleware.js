import jwt from "jsonwebtoken";

function authMiddleware(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ error: "Token not provided" }); // Retorna JSON
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" }); // Retorna JSON
        }

        req.userId = decoded.id;
        next();
    });
}

export default authMiddleware;