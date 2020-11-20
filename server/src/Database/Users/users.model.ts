import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    pronouns: {
        type: String
    },
    favoriteBusinesses: {
        type: Array
    },
    reviewedBusinesses: {
        type: Array
    },
});

export interface User extends mongoose.Document {  //  this interface gets added as a type "<User>" in users.service.ts
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    pronouns: string;
    favoriteBusinesses: [string];
    reviewedBusinesses: [string];
}