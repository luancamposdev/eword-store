import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('authentication')
  authentication(@Body() body: { email: string; password: string }) {
    return this.authService.authentication(body.email, body.password);
  }
}
