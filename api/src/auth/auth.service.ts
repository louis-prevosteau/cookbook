import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async isUserExist(email: string) {
    const user = await this.usersService.findOne({ email });
    if (user) return user;
    return null;
  }

  async validateUser({ email, password }: { email: string; password: string }) {
    const user = await this.usersService.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) return user;
    return null;
  }

  login(user: any) {
    const payload = { sub: user._id };
    return { token: this.jwtService.sign(payload) };
  }
}
