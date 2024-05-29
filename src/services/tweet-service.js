import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.HashtagRepository = new HashtagRepository();
  }
  async create(data) {
    const content = data.content;
    console.log(content);
    let tags = content.match(/#[a-zA-Z0-9_]+/g);

    // Log the extracted tags to see what was found
    console.log("Extracted tags:", tags);
    // Remove the '#' from each tag, if tags were found
    
     tags = tags ? tags.map((tag) => tag.substring(1)) : [];

    // Log the processed tags
    console.log("Processed tags:", tags);
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTag =await this.HashtagRepository.findByName(tags)

    alreadyPresentTag = alreadyPresentTag.map(tags => tags.title)
    

    let newTags = tags.filter((tag) => !alreadyPresentTag.includes(tag));

    newTags = newTags.map((tag) => {
      return { title: tag, tweet: [tweet.id] };
    });
    const response = await this.HashtagRepository.bulkCreate(newTags);
    console.log(response);
    // create hashtag and add here
    /**
     * 1.bulcreate in mongoose
     * 2. filter title of hashtag based on multiple tags
     * 3.how to add tweet id inside all the hashtags
     */
    return tweet;
  }
}

export { TweetService };
