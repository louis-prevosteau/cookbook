import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll(filter = {}) {
    return this.userModel.find(filter);
  }

  findOne(filter) {
    return this.userModel.findOne(filter);
  }

  update(filter, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate(filter, updateUserDto);
  }

  remove(filter) {
    return this.userModel.findOneAndDelete(filter);
  }
}
