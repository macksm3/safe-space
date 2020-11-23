import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import { ResourcesService } from "./resources.service";

@Controller("api/resources")
export class ResourcesController {
    //  "readonly" means we won't change the "resourcesService" to another value/type
    constructor(private readonly resourcesService: ResourcesService) { } //  "resourceServices" can be called anything, "ResourcesService" is exported from service file

    @Post()
    async addResource(
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
        const generatedId = await this.resourcesService.insertResource(
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
    async getAllResources() {
        const resources = await this.resourcesService.getAllResources();
        //  .map() the resources to give us the "_id" as just an "id"
        return resources.map((resource) => ({
            id: resource.id,
            type: resource.type,
            name: resource.name,
            website: resource.website,
            description: resource.description,
            contactName: resource.contactName,
            city: resource.city,
            state: resource.state,
            phone: resource.phone,
            email: resource.email,
            memberOwned: resource.memberOwned
        }));
    }

    @Get(":id")
    getOneResource(@Param("id") resourceId: string) {
        return this.resourcesService.getOneResource(resourceId);
    }

    @Patch(":id")
    async updateResource(
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
        @Body("type") memberOwned: boolean
    ) {
        await this.resourcesService.updateResource(
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
        return "Resource updated";
    }

    @Delete(":id")
    async removeResource(@Param("id") resourceId: string) {
        await this.resourcesService.deleteResource(resourceId);
        return "Resource deleted";
    }
}