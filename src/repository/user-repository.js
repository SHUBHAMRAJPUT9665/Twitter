import User from "../models/User.model.js";

import CrudRepository from "./crud-repository.js";

class UserRespository extends CrudRepository{
    constructor(){
        super(User)
    }

    async findBy(data){
        try {
            const response = await User.findOne(data)
            return response;
        } catch (error) {
            throw error;
        }
    }
}


export default UserRespository