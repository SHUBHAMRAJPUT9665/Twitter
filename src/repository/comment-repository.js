import CrudRepository from "./crud-repository.js";
import Comment from "../models/comment.js";

class CommentRespository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo creaate");

      throw error;
    }
  }
}

export default CommentRespository;
