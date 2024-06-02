import CommentService from "../services/comment-service.js";
const commentService = new CommentService();

export const createComment = async (req, res) => {
 // content in body
    try {
        const response = await commentService.create(req.query.modelId, req.body.modelType || req.query.modelType, req.body.userId, req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new comment',
            data: response,
            err: {}
        });
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: 'something went wrong',
            data: {},
            err: error
        });

    }
}

