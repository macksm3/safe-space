import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { Member } from "../model/member.interface";
import { MemberService } from "../service/member.service";

@Controller("member")
export class MemberController {
    constructor(private readonly memberService: MemberService) {}

    @Get()
    findAll(): any {
        return this.memberService.findAll();
    }
}
