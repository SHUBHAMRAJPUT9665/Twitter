import Like from "../models/like.model";
import CrudRepository from "./crud-repository";

class LikeRepository extends CrudRepository {
    constructor(){
        super(Like)
    }

}

export default Like;