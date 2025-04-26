import { NextFunction, Request, Response } from "express";

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resources");
};

module.exports = getUsers;
