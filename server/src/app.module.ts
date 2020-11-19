// DEPENDENCIES
import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";

// CUSTOM IMPORTS
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MembersModule } from "./members/members.module";

// ENTITIES
import { MemberEntity } from "./members/model/member.entity";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "../..", "./client/dist"),
        }),
        TypeOrmModule.forRoot({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "safe-space",
            entities: [MemberEntity],
            synchronize: true, //  in PRODUCTION this can't be true
        }),
        MembersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
