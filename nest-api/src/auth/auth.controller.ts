import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  authentication(@Body() body: { email: string; password: string }) {
    return this.authService.authentication(body.email, body.password);
  }
}
