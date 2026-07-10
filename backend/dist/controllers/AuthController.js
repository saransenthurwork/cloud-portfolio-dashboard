"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const AuthService_1 = require("../services/AuthService");
async function register(req, res) {
    try {
        const user = await (0, AuthService_1.registerUser)(req.body);
        res.status(201).json({
            message: "User created",
            user,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
        res.status(500).json({
            message: "Server Error",
        });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await (0, AuthService_1.loginUser)(email, password);
        res.json(result);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(401).json({
                message: error.message,
            });
        }
        res.status(500).json({
            message: "Server Error",
        });
    }
}
//# sourceMappingURL=AuthController.js.map