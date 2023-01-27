import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/user/user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async findOne(@User() user) {
    return this.usersService.findOne({ _id: user._id });
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('profile')
  update(@User() user, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update({ _id: user._id }, updateUserDto);
  }
}
