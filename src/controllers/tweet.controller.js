import TweetService from "../services/tweet-service.js";
import uploadOnCloudinary from "../config/cloudinary.js";

const tweetService = new TweetService();

// Create tweet controller
const createTweet = async (req, res) => {
  try {
    let imageUrl = "";
    if (!req.files.image) {
      const response = await tweetService.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Successfully created a new tweet",
        data: response,
        err: {},
      });
    } else {
      const tweetimage = req.files.image[0].path;
      const imageUploaded = await uploadOnCloudinary(tweetimage);
      imageUrl = imageUploaded.secure_url;
      req.body.image = imageUrl;
      const response = await tweetService.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Successfully created a new tweet",
        data: response,
        err: {},
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating tweet",
      data: {},
      err: error,
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched the tweet",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the tweet",
      data: {},
      err: error,
    });
  }
};

const allTweet = async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10; // Default limit of 10 tweets
    const response = await tweetService.getAll(offset, limit);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched all tweets",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching all tweets",
      data: {},
      err: error,
    });
  }
};

export { createTweet, getTweet, allTweet };
