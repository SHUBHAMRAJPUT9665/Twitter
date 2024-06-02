import UserRespository from "../repository/user-repository.js";

class UserService {

    constructor(){
        this.userRespository = new UserRespository();
    }

    async signup(data){
        const user = await this.userRespository.create(data);
        return user 
    }
}


export default UserService