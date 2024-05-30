import LikeRepository from "../repository/like-repository.js";
import TweetRespository from "../repository/tweet-repository.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRespository = new TweetRespository();
  }

  async toggleLike(modelId, modelType, userId) {

    if (modelType == "Tweet") {
      var likeabel = await this.tweetRespository.get(modelId);
      likeabel.populate({path:'likes'});




    } else if (modelType == "Comment") {
      // todo
    } else {
      throw new Error("unknown model type");
    }

    const exits = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeabel: modelId,
    });

    if (exits) {
      likeabel.likes.pull(exits.id);
      await likeabel.save();
      await exits.remove();
      var isAdded = true
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeabel: modelId,
      });

      console.log(newLike)
      likeabel.likes.push(newLike);
    
      await likeabel.save();
      isAdded = false;
    }
    return isAdded;
  }
}

export default LikeService;
