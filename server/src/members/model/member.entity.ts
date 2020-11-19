//
//  Entity is a model for a MongoDB collection
// 

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MemberEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true, length: 20 })
    username: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    pronouns: string;

    @Column()
    sexualOrientation: string;

    @Column("simple-array")
    favoriteBusinesses: string[];

    @Column("simple-array")
    reviewedBusinesses: string[];
}
