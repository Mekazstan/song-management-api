import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { authConstants } from './auth.constants';
import { PayloadType } from './types/payload.types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: authConstants.secret,
    });
  }

  async validate(payload: PayloadType) {
    return { userId: payload.userId, email: payload.email, artistId: payload.artistId };
  }
}
