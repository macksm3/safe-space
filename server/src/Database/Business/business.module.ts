import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { BusinessController } from "./business.controller";
import { BusinessSchema } from "./business.model";
import { BusinessService } from "./business.service";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Business", schema: BusinessSchema }])
    ],
    controllers: [BusinessController],
    providers: [BusinessService],
})
export class BusinessModule { }  //  import this "BusinessModule" into your AppModule so Nest will know about it.