import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { RecourceController } from "./recources.controller";
import { Recourcechema } from "./recources.model";
import { RecourceService } from "./recources.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Resource", schema: ResourceSchema }])
    ],
    controllers: [RecourcesController],
    providers: [RecourcesService],
})
export class RecourcesModule { }  //  import this "RecourcesModule" into your AppModule so Nest will know about it.