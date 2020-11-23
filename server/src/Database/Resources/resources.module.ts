import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ResourcesController } from "./resources.controller";
import { ResourceSchema } from "./resources.model";
import { ResourcesService } from "./resources.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Resource", schema: ResourceSchema }])
    ],
    controllers: [ResourcesController],
    providers: [ResourcesService],
})
export class ResourcesModule { }  //  import this "ResourcesModule" into your AppModule so Nest will know about it.