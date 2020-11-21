import * as mongoose from "mongoose";

export const ResourceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    site: {
        type: String
    },
    description: {
        type: String
    },
});

export interface IResource extends mongoose.Document {  //  this interface gets added as a type "<User>" in users.service.ts
    id: string;
    type: string;
    name: string;
    city: string;
    state: string;
    site: string;
    description: string;
}