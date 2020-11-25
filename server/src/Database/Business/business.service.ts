import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { IBusiness } from "./business.model";

@Injectable()
export class BusinessService {

    constructor(@InjectModel("Business") private readonly businessModel: Model<IBusiness>) {  //  "Business" is the model we created in business.model.ts
        //  <Business> comes from the "interface" we created in business.model.ts

    }

    private async findOneBusiness(businessId: string): Promise<IBusiness> {
        let business;
        try {
            business = await this.businessModel.findById(businessId);
        } catch (error) {
            throw new NotFoundException("Couldn't find business.");
        }
        if (!business) { throw new NotFoundException("Couldn't find business."); }
        return business;
    }

    async insertBusiness(
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
        let newBusiness;
        try {
            newBusiness = new this.businessModel({
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
            });  //  "this.businessModel" comes from the @InjectModel from the constructor above, it creates a new object from the business.model.ts blueprint
        } catch (error) {
            throw new NotFoundException("Could not add the business. Make sure you added fields for 'type' and 'name' as those are marked 'required' in the business.model file");
        }
        
        const result = await newBusiness.save();
        
        return result.id as string;
    }

    async getAllBusinesses() {
        const businesses = await this.businessModel.find().exec();  //  ".exec" makes the .find() return a promise?

        //  return business like this so we receive an array of business,
        //  returning "this.business" gives us a connection to business saved in memory and what we want instead is a copy of those business
        return businesses as IBusiness[];  //  this sets "business" as type "IBusiness"
    }

    async getAllByState(businessState: string) {
        businessState = businessState.toUpperCase();
        const result = await this.businessModel.find().where({ state: businessState }).exec();
        if (result.length <= 0) {
            throw new NotFoundException(`Couldn't find any businesses of state ${businessState}.`);
        } else {
            return result;
        }
    }

    async getAllByTypeAndState(businessType: string, businessState: string) {
        businessType = businessType.toLowerCase();
        businessState = businessState.toUpperCase();
        const result = await this.businessModel.find().where({ type: businessType, state: businessState }).exec();
        if (result.length <= 0) {
            throw new NotFoundException(`Couldn't find any businesses of state ${businessState} && type ${businessType}.`);
        } else {
            return result;
        }
    }

    async getOneBusiness(businessId: string) {
        const business = await this.findOneBusiness(businessId);
        return {
            type: business.type,
            name: business.name,
            city: business.city,
            state: business.state,
            website: business.website,
            description: business.description,
            contactName: business.contactName,
            phone: business.phone,
            email: business.email,
            memberOwned: business.memberOwned
        };
    }

    async updateBusiness(
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
        const updatedBusiness = await this.findOneBusiness(id);
        if (type) {
            updatedBusiness.type = type;
        }
        if (name) {
            updatedBusiness.name = name;
        }
        if (city) {
            updatedBusiness.city = city;
        }
        if (state) {
            updatedBusiness.state = state;
        }
        if (website) {
            updatedBusiness.website = website;
        }
        if (description) {
            updatedBusiness.description = description;
        }
        if (contactName) {
            updatedBusiness.contactName = contactName;
        }
        if (phone) {
            updatedBusiness.phone = phone;
        }
        if (email) {
            updatedBusiness.email = email;
        }
        if (memberOwned) {
            updatedBusiness.memberOwned = memberOwned;
        }
        updatedBusiness.save();
    }

    async deleteBusiness(businessId: string) {
        const result = await this.businessModel.deleteOne({ _id: businessId }).exec();
        if (result.n <= 0) {
            throw new NotFoundException("Couldn't find business.");
        } else {
            return "business deleted";
        }
    }
}