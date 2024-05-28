import { TweetRepository } from "../repository/index";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }
  async create(data) {

    const content = data.content;
    const tags = content.match(/#[a-zA-z0-9]_+/g);
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);

    // create hashtag and add here
     /**
      * 1.bulcreate in mongoose
      * 2. filter title of hashtag based on multiple tags
      * 3.how to add tweet id inside all the hashtags
      */
    return tweet;
  }
}

module.exports = TweetService;
