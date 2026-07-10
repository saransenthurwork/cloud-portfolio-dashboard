"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../lib/prisma");
async function registerUser(data) {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: {
            email: data.email,
        },
    });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
    const user = await prisma_1.prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword,
        },
    });
    const { password, ...safeUser } = user;
    return safeUser;
}
async function loginUser(email, password) {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const validPassword = await bcrypt_1.default.compare(password, user.password);
    if (!validPassword) {
        throw new Error("Invalid credentials");
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
    }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    const { password: _, ...safeUser } = user;
    return {
        token,
        user: safeUser,
    };
}
//# sourceMappingURL=AuthService.js.map