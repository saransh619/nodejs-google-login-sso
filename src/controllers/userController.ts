import { Request, Response } from "express";

export const loadAuth = (req: Request, res: Response): void => {
  res.render("auth");
};

export const successGoogleLogin = (req: Request | any, res: Response): void => {
  if (!req.user) {
    res.redirect("/failure");
  } else {
    const user = req.user as { email: string; displayName: string; photo: string };

    res.send(`Welcome ${user.email}`);
  }
};

export const failureGoogleLogin = (req: Request, res: Response): void => {
  res.send("Error");
};
