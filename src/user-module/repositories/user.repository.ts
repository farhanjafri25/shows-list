import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../model/user.model';
import { Model } from 'mongoose';
import { UserSignUpInterface } from 'src/interface/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('users_data') private readonly userModel: Model<User>,
  ) { }
    
//Function to save User in Mongo
  async saveUser(body: UserSignUpInterface) {
    try {
      const userObj = new this.userModel({
        username: body.username,
        password: body.password,
        userId: body.userId,
      });
      const result = await userObj.save();
      console.log(`Response from Db Saved`, result);
      return result;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Something went wrong')
    }
  }
//Function to retrieve user by ID
  async getUserById(id: string) {
      console.log("UserRepository ~ getUserById ~ id:", id);
      try {
      const res = await this.userModel.findOne({ userId: id });
      console.log(`User Object`, res);
      return res;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error getting User');
    }
  }
  //Function to retrieve user by email  
    async getUserByEmail(username: string) {
        try {
            const res = await this.userModel.findOne({ username: username });
            if (!res) {
                return null
            }
            return res;
        } catch (error) {
            console.log("UserRepository ~ getUserByEmail ~ error:", error);
            return null;
        }
    }
}
