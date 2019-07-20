import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard())
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
