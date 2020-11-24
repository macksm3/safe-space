// DEPENDENCIES
require('dotenv').config()
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";  // used to setup DB connection
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';

// CUSTOM IMPORTS
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./Database/Users/users.module";
import { BusinessModule } from "./Database/Business/business.module";

@Module({
    imports: [
        UsersModule,
        BusinessModule,
        MongooseModule.forRoot(process.env.MONGODB_URI),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "../..", "./client/dist"),
        }),
    ],  //  import other modules into this module, so we can get their Providers
    controllers: [AppController],  //  controllers accept requests, do stuff, and then give responses
    providers: [AppService],  //  services/classes that provide things to the controllers, such as grabbing stuff from a DB and sending the data to the controller
})
export class AppModule { }
