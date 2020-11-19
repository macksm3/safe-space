// DEPENDENCIES
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// CUSTOM IMPORTS
import { MemberService } from "./service/member.service";
import { MemberController } from "./controller/member.controller";
import { MemberEntity } from "./model/member.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MemberEntity])],
    providers: [MemberService],
    controllers: [MemberController],
})
export class MembersModule {}
