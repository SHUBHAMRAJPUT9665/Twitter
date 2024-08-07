import HashtagRepository from "../repository/hastag-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g);

    tags = tags
      ? tags.map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase())
      : [];

    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTag = await this.hashtagRepository.findByName(tags);

    let titleOfPresentTags = alreadyPresentTag.map((tag) => tag.title);

    let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
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

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }

  async getAll() {
    const tweets = await this.tweetRepository.getAll();
    return tweets;
  }
}

export default TweetService;
