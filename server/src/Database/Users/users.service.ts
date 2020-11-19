import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { User } from "./users.model";

@Injectable()
export class UsersService {

    constructor(@InjectModel("User") private readonly userModel: Model<User>) {  //  "User" is the model we created in users.model.ts
        //  <User> comes from the "interface" we created in user.model.ts

    }

    private async findOneUser(userId: string): Promise<User> {
        let user;
        try {
            user = await this.userModel.findById(userId);
        } catch (error) {
            throw new NotFoundException("Couldn't find user.");
        }
        if (!user) { throw new NotFoundException("Couldn't find user."); }
        return user;
    }

    async insertUser(
        username: string,
        firstName: string,
        lastName: string,
        pronouns: string,
        favoriteBusinesses: [string],
        reviewedBusinesses: [string]
    ) {
        const newUser = new this.userModel({
            username,
            firstName,
            lastName,
            pronouns,
            favoriteBusinesses,
            reviewedBusinesses
        });  //  "this.userModel" comes from the @InjectModel from the constructor above, it creates a new object from the users.model.ts blueprint
        const result = await newUser.save();

        return result.id as string;
    }

    async getUsers() {
        const users = await this.userModel.find().exec();  //  ".exec" makes the .find() return a promise?

        //  return users like this so we receive an array of users,
        //  returning "this.users" gives us a connection to users saved in memory and what we want instead is a copy of those users
        return users as User[];  //  this sets "users" as type "User"
    }

    async getSingleUser(userId: string) {
        const user = await this.findOneUser(userId);
        return {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            pronouns: user.pronouns,
            favoriteBusinesses: user.favoriteBusinesses,
            reviewedBusinesses: user.reviewedBusinesses
        };
    }

    async updateUser(
        userId: string,
        username: string,
        firstName: string,
        lastName: string,
        pronouns: string,
        favoriteBusinesses: [string],
        reviewedBusinesses: [string]
    ) {
        const updatedUser = await this.findOneUser(userId);
        if (username) {
            updatedUser.username = username;
        }
        if (firstName) {
            updatedUser.firstName = firstName;
        }
        if (lastName) {
            updatedUser.lastName = lastName;
        }
        updatedUser.save();
    }

    async deleteUser(userId: string) {
        const result = await this.userModel.deleteOne({ _id: userId }).exec();
        if (result.n <= 0) {
            throw new NotFoundException("Couldn't find user.");
        } else {
            return "user deleted";
        }
    }
}