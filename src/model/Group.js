export class Group{
    constructor(Name,Cat,CreationYear,Instagram,Email,Desc){
        this.Name=Name;
        this.Cat=Cat; //Categoria
        this.CreationYear=CreationYear; //Fecha de creacion
        this.Instagram=Instagram;
        this.Email=Email;
        this.Desc=Desc;
        this.Prate;//Rating promedio
        this.Members=[];
        this.Partnerts;  //Contribuidores
        this.Comments;
        this.Available;
    }

    AddMember(Member){
        this.Members.push(Member);
        Member.belongsto.push(this);
    }

    DeleteMember(Member){
        let index =this.MembersindexOf(Member);
        if (index>-1){
            this.Members.splice(index,1);
            Member.belongsto.splice(index,1);
        }        
    }

    UpdateAg(Name,Cat,Instagram,Email,Desc){
        this.Name=Name;
        this.Cat=Cat;
        this.Instagram=Instagram;
        this.Email=Email;
        this.Desc=Desc;
    }
}
