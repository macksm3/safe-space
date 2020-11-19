import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MemberEntity } from "../model/member.entity";
import { Member } from "../model/member.interface";

import { getConnection } from "typeorm";

@Injectable()
export class MemberService {
    constructor(
        @InjectRepository(MemberEntity)
        private membersRepository: Repository<Member>
    ) {}

    findAll(): Promise<Member[]> {
        return this.membersRepository.find();
    }

    findOne(id: string): Promise<Member> {
        return this.membersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.membersRepository.delete(id);
    }

    async create(): Promise<Member> {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(MemberEntity)
            .values([
                { firstName: "Timber", lastName: "Saw" },
                { firstName: "Phantom", lastName: "Lancer" },
            ])
            .execute();
        return;
    }
}
