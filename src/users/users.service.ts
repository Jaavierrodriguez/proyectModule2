import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async findOne(username: string) {
    return await this.userModel.findOne({ username }).lean();
  }

  async register(body) {
    return await this.userModel.create(body);
  }
}
