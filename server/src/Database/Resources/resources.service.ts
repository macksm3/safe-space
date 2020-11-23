import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IResource } from "./resources.model";

@Injectable()
export class ResourcesService {

    constructor(@InjectModel("Resource") private readonly resourceModel: Model<IResource>) {  //  "Resource" is the model we created in resources.model.ts
        //  <Resource> comes from the "interface" we created in resource.model.ts

    }

    private async findOneResource(resourceId: string): Promise<IResource> {
        let resource;
        try {
            resource = await this.resourceModel.findById(resourceId);
        } catch (error) {
            throw new NotFoundException("Couldn't find resource.");
        }
        if (!resource) { throw new NotFoundException("Couldn't find resource."); }
        return resource;
    }

    async insertResource(
        type: string,
        name: string,
        city: string,
        state: string,
        website: string,
        description: string,
        contactName: string,
        phone: string,
        email: string,
        memberOwned: boolean
    ) {
        const newResource = new this.resourceModel({
            type,
            name,
            city,
            state,
            website,
            description,
            contactName,
            phone,
            email,
            memberOwned
        });  //  "this.resourceModel" comes from the @InjectModel from the constructor above, it creates a new object from the resources.model.ts blueprint
        const result = await newResource.save();

        return result.id as string;
    }

    async getAllResources() {
        const resources = await this.resourceModel.find().exec();  //  ".exec" makes the .find() return a promise?

        //  return resources like this so we receive an array of resources,
        //  returning "this.resources" gives us a connection to resources saved in memory and what we want instead is a copy of those resources
        return resources as IResource[];  //  this sets "resources" as type "IResource"
    }

    async getOneResource(resourceId: string) {
        const resource = await this.findOneResource(resourceId);
        return {
            type: resource.type,
            name: resource.name,
            city: resource.city,
            state: resource.state,
            website: resource.website,
            description: resource.description,
            contactName: resource.contactName,
            phone: resource.phone,
            email: resource.email,
            memberOwned: resource.memberOwned
        };
    }

    async updateResource(
        id: string,
        type: string,
        name: string,
        city: string,
        state: string,
        website: string,
        description: string,
        contactName: string,
        phone: string,
        email: string,
        memberOwned: boolean
    ) {
        const updatedResource = await this.findOneResource(id);
        if (type) {
            updatedResource.type = type;
        }
        if (name) {
            updatedResource.name = name;
        }
        if (city) {
            updatedResource.city = city;
        }
        if (state) {
            updatedResource.state = state;
        }
        if (website) {
            updatedResource.website = website;
        }
        if (description) {
            updatedResource.description = description;
        }
        if (contactName) {
            updatedResource.contactName = contactName;
        }
        if (phone) {
            updatedResource.phone = phone;
        }
        if (email) {
            updatedResource.email = email;
        }
        if (memberOwned) {
            updatedResource.memberOwned = memberOwned;
        }
        updatedResource.save();
    }

    async deleteResource(resourceId: string) {
        const result = await this.resourceModel.deleteOne({ _id: resourceId }).exec();
        if (result.n <= 0) {
            throw new NotFoundException("Couldn't find resource.");
        } else {
            return "resource deleted";
        }
    }
}