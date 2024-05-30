import Like from "../models/like.model.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
    constructor(){
        super(Like)
    }

    async findByUserAndLikeable(data){

        try {
            const response = await Like.findOne(data)
        } catch (error) {
            
        }

    }
}
export default LikeRepository;