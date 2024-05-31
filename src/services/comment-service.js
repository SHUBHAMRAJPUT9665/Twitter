import CommentRespository from "../repository/comment-repository";
import TweetRespository from "../repository/tweet-repository";

class CommentService {
    constructor(){
        this.CommentRepo = new CommentRespository();
    }


    async createComment(modelId , modelType , userId){

    }
}