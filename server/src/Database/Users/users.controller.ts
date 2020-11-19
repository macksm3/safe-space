import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import {UsersService } from "./users.service";

@Controller("database/user")
export class UsersController {
    //  "readonly" means we won't change the "productsService" to another value/type
    constructor(private readonly usersService: UsersService) { } //  "productServices" can be called anything, "ProductsService" is exported from service file

    @Post()
    async addUser(
        @Body("username") username: string,
        @Body("firstName") firstName: string,
        @Body("lastName") lastName: string,
        @Body("pronouns") pronouns: string,
        @Body("favoriteBusinesses") favoriteBusinesses: [string],
        @Body("reviewedBusinesses") reviewedBusinesses: [string],
    ): Promise<any> {  //  "any" is the type of response we will get back from this req
        const generatedId = await this.usersService.insertProduct(
            username,
            firstName,
            lastName,
            pronouns,
            favoriteBusinesses,
            reviewedBusinesses
        );
        return { id: generatedId };
    }

    @Get()
    async getAllUsers() {
        const users = await this.usersService.getAllUsers();
        //  .map() the users to give us the "_id" as just an "id"
        return users.map((user) => ({ id: user.id, title: user.title, description: user.description, price: user.price }));
    }

    @Get(":id")
    getOneUser(@Param("id") userId: string) {
        return this.usersService.getOneUser(userId);
    }

    @Patch(":id")
    async updateUser(
        @Param("id") userId: string,
        @Body("username") username: string,
        @Body("firstName") firstName: string,
        @Body("lastName") lastName: string,
        @Body("pronouns") pronouns: string,
        @Body("favoriteBusinesses") favoriteBusinesses: [string],
        @Body("reviewedBusinesses") reviewedBusinesses: [string]
    ) {
        await this.usersService.updateUser(
            userId,
            username,
            firstName,
            lastName,
            pronouns,
            favoriteBusinesses,
            reviewedBusinesses
        );
        return "User updated";
    }

    @Delete(":id")
    async removeUser(@Param("id") userId: string) {
        await this.usersService.deleteUser(userId);
        return "user deleted";
    }
}