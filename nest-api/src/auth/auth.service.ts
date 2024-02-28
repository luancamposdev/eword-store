import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users) private userRepo: Repository<Users>,
  ) {}
  async authentication(email: string, password: string) {
    const user = await this.userRepo.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) throw new UnauthorizedException();

    const payload = {
      sub: user.id,
      user: {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
