import express from "express";
import passport from "../passport";
import {
  loadAuth,
  successGoogleLogin,
  failureGoogleLogin,
} from "../controllers/userController";

const router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

// Load the authentication page
router.get("/", loadAuth);

// Google OAuth login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Google OAuth callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/failure",
  })
);

// Success and failure routes
router.get("/success", successGoogleLogin);
router.get("/failure", failureGoogleLogin);

export default router;
