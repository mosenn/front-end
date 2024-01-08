import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
  async verifyToken(token: string) {
    console.log('token in verifytoken auth service', token);
    try {
      const decoded = await jwt.verify(token, 'secret');
      return decoded;
    } catch (err) {
      throw new UnauthorizedException('invalid token');
    }
  }
}
