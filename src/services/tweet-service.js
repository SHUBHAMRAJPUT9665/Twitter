import HashtagRepository from "../repository/hastag-repository.js";
import TweetRespository from "../repository/tweet-repository.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRespository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    const content = data.content;
    
    let tags = content.match(/#[a-zA-Z0-9_]+/g);

    tags = tags
      ? tags.map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase())
      : [];

    // Log the processed tags
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTag = await this.hashtagRepository.findByName(tags);

    let titleOfPresenttags = alreadyPresentTag.map((tags) => tags.title);

    let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));

    newTags = newTags.map((tag) => {
      return { title: tag, tweet: [tweet.id] };
    });

    await this.hashtagRepository.bulkCreate(newTags);

    alreadyPresentTag.forEach((tag) => {
      tag.tweet.push(tweet.id);
      tag.save();
    });
    return tweet;
  }


  async get(tweetId){
    const tweet = await this.tweetRepository.getWithComments(tweetId)

    return tweet
  }
}

export default TweetService;
/*
    this is my #first #tweet . I am really #excited
*/
