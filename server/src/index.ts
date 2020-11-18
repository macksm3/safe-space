import "reflect-metadata";
import {createConnection} from "typeorm";
import {Member} from "./models/test";   //  Member will be the Collection name in Mongo 

createConnection().then(async connection => { 

    console.log("Inserting a new Member into the database..."); const std = new Member(); std.Name = "Member1"; 
    std.Country = "India"; 
    await connection.manager.save(std); console.log("Saved a new user with id: " + std.id); 
    
    console.log("Loading users from the database..."); 
    const stds = await connection.manager.find(Member); console.log("Loaded users: ", stds); 
    
    console.log("TypeORM with MongoDB"); 
 }).catch(error => console.log(error));
