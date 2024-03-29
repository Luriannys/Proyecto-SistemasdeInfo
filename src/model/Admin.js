import { Group } from "./Group"

class user extends admin{
    constructor(){
    }
    createGroup(Name,Cat,CreationYear,Instagram,Email,Desc){
        newgroup= new Group(Name,Cat,CreationYear,Instagram,Email,Desc);
        return(newgroup);
    }
}