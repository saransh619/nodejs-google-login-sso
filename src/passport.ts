import passport from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { VerifyCallback } from 'passport-google-oauth20';

passport.serializeUser((user: Express.User, done) => {
  // Serialize only the user ID or relevant information
  done(null, user);
});

passport.deserializeUser((user: Express.User, done) => {
  // Deserialize user based on the user data stored in the session
  done(null, user);
});

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    (request, accessToken, refreshToken, profile: Profile, done: VerifyCallback) => {
      // In this callback, we can choose which user data to store in the session
      const user = {
        id: profile.id,
        email: profile.emails ? profile.emails[0].value : '',
        displayName: profile.displayName,
        photo: profile.photos ? profile.photos[0].value : '',
      };
      return done(null, user); // Passing user data to serializeUser
    }
  )
);

export default passport;
