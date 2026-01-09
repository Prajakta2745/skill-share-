import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../../module/users/users.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) { }

  // 🟢 REGISTER USER
  async register(email: string, password: string) {
    // 1️⃣ Check duplicate email
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    // 2️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Save user
    const user = await this.userModel.create({
      email,
      password: hashedPassword,
    });

    // 4️⃣ Return response
    return {
      message: 'User registered successfully',
      userId: user._id,
    };
  }

  // 🟢 LOGIN USER
  async login(email: string, password: string) {
    // 1️⃣ Check user exists
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 2️⃣ Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 3️⃣ Generate JWT
    const payload = {
      sub: user._id,
      email: user.email,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);

    // 4️⃣ Return token
    return {
      access_token: token,
      user: {
        email: user.email,
        role: user.role,
      },
    };
  }
}
