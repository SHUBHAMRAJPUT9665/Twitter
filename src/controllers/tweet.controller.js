import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();


// create tweet controller
const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a new tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong while creating tweet",
      data: {},
      err: error,
    });
  }
};

export { createTweet };
