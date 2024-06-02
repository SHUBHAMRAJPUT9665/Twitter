import UserRespository from "../repository/user-repository.js";

class UserService {

    constructor(){
        this.userRespository = new UserRespository();
    }

    async signup(data){
        const user = await this.userRespository.create(data);
        return user 
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRespository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }

    }

    async signin(data){
        
    }
}


export default UserService