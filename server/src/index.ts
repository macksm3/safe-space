import "reflect-metadata";
import {createConnection} from "typeorm";
import {Student} from "./models/test"; 

createConnection().then(async connection => { 

    console.log("Inserting a new Student into the database..."); const std = new Student(); std.Name = "Student1"; 
    std.Country = "India"; 
    await connection.manager.save(std); console.log("Saved a new user with id: " + std.id); 
    
    console.log("Loading users from the database..."); 
    const stds = await connection.manager.find(Student); console.log("Loaded users: ", stds); 
    
    console.log("TypeORM with MongoDB"); 
 }).catch(error => console.log(error));
