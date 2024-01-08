import { Prisma, UserRole } from '@prisma/client';
import { PrismaService } from './../prisma/prisma.service';
import {
  Injectable,
  NotAcceptableException,
  InternalServerErrorException,
} from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

type userType = {
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
};

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private authService: AuthService,
  ) {}

  //register
  async singup({ email, password, confirmPassword, role }: userType) {
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);
    // or password !== confirmPassword
    if (password !== confirmPassword) {
      throw new NotAcceptableException('both password must be same');
    }

    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashPassword,
        confirmPassword: hashConfirmPassword,
        role: UserRole.USER,
      } as Prisma.UserUncheckedCreateInput,
    });
    // console.log({ user });
    return { message: 'user is created', data: user };
  }
  //login
  async login({ email, password }, req, res) {
    console.log(email, 'email is login');
    console.log(password, 'password is login');
    try {
      const user = await this.prismaService.user.findUnique({
        where: { email },
      });
      console.log('user is login', user);
      if (!user) {
        throw new NotAcceptableException('email or password is wrong');
      }

      const token = await jwt.sign(
        { email: user.email, userId: user.id, role: user.role },
        'secret',
        // { expiresIn: '15s' },
      );
      // console.log(token);

      // const userProfile = await this.verifyTokenAndGetUserProfile(token);

      return res.status(200).json({
        message: 'user is login',
        data: { token: token },
      });
    } catch (err) {
      return res
        .status(404)
        .json({ message: 'error user cant be login', data: err });
    }
  }

  //user profile
  // ببینیم چه کاربری الان انلاین هستش برای پرفایل هستش
  async verifyTokenAndGetUserProfile(token: string) {
    // console.log('this token in verifyTokenAndGetUserProfile', token);
    try {
      // این وریفای توکن یک فاکنشت هست که درون اث سرویس دار اجرا میشه

      const decodeToken: any = await this.authService.verifyToken(token);
      const { email, role, password } = decodeToken;

      const userProfile = await this.prismaService.user.findUnique({
        where: { email },
      });

      return { email, role, userProfile, password };
    } catch (error) {
      // Handle the error here
      console.error('Error verifying token and getting user profile:', error);
      throw new InternalServerErrorException(
        'Failed to verify token and retrieve user profile',
      );
    }
  }
  //
}
