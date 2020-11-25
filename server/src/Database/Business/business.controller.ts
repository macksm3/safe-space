import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { BusinessService } from "./business.service";

@Controller("api/business")
export class BusinessController {
    //  "readonly" means we won't change the "businessService" to another value/type
    constructor(private readonly businessService: BusinessService) { } //  "businessServices" can be called anything, "BusinessService" is exported from service file

    @Post()
    async addBusiness(
        @Body("type") type: string,
        @Body("name") name: string,
        @Body("city") city: string,
        @Body("state") state: string,
        @Body("website") website: string,
        @Body("description") description: string,
        @Body("contactName") contactName: string,
        @Body("phone") phone: string,
        @Body("email") email: string,
        @Body("memberOwned") memberOwned: boolean
    ): Promise<any> {  //  "any" is the type of response we will get back from this req
        const generatedId = await this.businessService.insertBusiness(
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
        );
        return { id: generatedId };
    }

    @Get()
    async getAllBusiness() {
        const business = await this.businessService.getAllBusinesses();
        //  .map() the business to give us the "_id" as just an "id"
        return business.map((business) => ({
            id: business.id,
            type: business.type,
            name: business.name,
            website: business.website,
            description: business.description,
            contactName: business.contactName,
            city: business.city,
            state: business.state,
            phone: business.phone,
            email: business.email,
            memberOwned: business.memberOwned
        }));
    }

    @Get(":state")
    getAllByState(
        @Param("state") businessState: string
    ) {
        return this.businessService.getAllByState(businessState);
    }

    @Get(":type/:state")
    getAllByTypeAndState(
        @Param("type") businessType: string,
        @Param("state") businessState: string
    ) {
        return this.businessService.getAllByTypeAndState(businessType, businessState);
    }

    @Get(":id")
    getOneBusiness(@Param("id") businessId: string) {
        return this.businessService.getOneBusiness(businessId);
    }

    @Patch(":id")
    async updateBusiness(
        @Param("id") id: string,
        @Body("type") type: string,
        @Body("name") name: string,
        @Body("city") city: string,
        @Body("state") state: string,
        @Body("website") website: string,
        @Body("description") description: string,
        @Body("contactName") contactName: string,
        @Body("phone") phone: string,
        @Body("email") email: string,
        @Body("memberOwned") memberOwned: boolean
    ) {
        await this.businessService.updateBusiness(
            id,
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
        );
        return "Business updated";
    }

    @Delete(":id")
    async removeBusiness(@Param("id") businessId: string) {
        await this.businessService.deleteBusiness(businessId);
        return "Business deleted";
    }
}