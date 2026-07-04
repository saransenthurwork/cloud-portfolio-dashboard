import { Request, Response } from "express";

import {
  registerUser,
  loginUser,
} from "../services/AuthService";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const user =
      await registerUser(req.body);

    res.status(201).json({
      message: "User created",
      user,
    });

  } catch (error) {

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

export async function login(
  req: Request,
  res: Response
) {
  try {

    const { email, password } = req.body;

    const result =
      await loginUser(
        email,
        password
      );

    res.json(result);

  } catch (error) {

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