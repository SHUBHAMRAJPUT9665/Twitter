import CrudRepository from "./crud-repository.js";
import Comment from "../models/comment.js";

class CommentRespository extends CrudRepository {
    constructor(){
        super(Comment)
    }
}

export default CommentRespository