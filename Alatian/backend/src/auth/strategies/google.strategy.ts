import { Injectable, Optional } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    const clientID = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const callbackURL = process.env.GOOGLE_CALLBACK_URL;

    if (!clientID || !clientSecret || !callbackURL) {
      // Use dummy values if env vars are not set (for development)
      super({
        clientID: 'dummy-client-id',
        clientSecret: 'dummy-client-secret',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        scope: ['email', 'profile'],
      } as any);
    } else {
      super({
        clientID,
        clientSecret,
        callbackURL,
        scope: ['email', 'profile'],
      });
    }
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { id, name, emails, photos } = profile;
    const user = {
      googleId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value,
    };
    done(null, user);
  }
}

