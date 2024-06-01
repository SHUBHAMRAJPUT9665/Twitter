import CommentRespository from "../repository/comment-repository.js";
import TweetRespository from "../repository/tweet-repository.js";
class CommentService {
    constructor() {
        this.commentRepository = new CommentRespository();
        this.tweetRepository = new TweetRespository();
    }

    async create(modelId, modelType, userId, content) {
        if(modelType == 'Tweet') {
            console.log("inside model type")
            var commentable = await this.tweetRepository.get(modelId);
        } else if(modelType == 'Comment') {
            var commentable = await this.commentRepository.get(modelId);
        } else {
            throw new Error('unknown model type');
        }

        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: []
        });       
         console.log('COMMENT',comment)
         console.log('commetable',commentable)

        // commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }
}

export default CommentService;
