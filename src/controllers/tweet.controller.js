import TweetService from "../services/tweet-service.js";
import uploadOnCloudinary from "../config/cloudinary.js";

const tweetService = new TweetService();

// create tweet controller
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
      message: "something went wrong while creating tweet",
      data: {},
      err: error,
    });
  }
};

const createTfweet = async (req, res) => {
  try {
    // Check if an image is provided in the request
    let imageUrl = "";
    if (req.files?.image?.length > 0) {
      const tweetimage = req.files.image[0].path;
      const imageUploaded = await uploadOnCloudinary(tweetimage);
      imageUrl = imageUploaded.secure_url; // Assuming secure_url is the URL of the uploaded image
    }

    // Add the image URL to req.body
    if (imageUrl) {
      req.body.image = imageUrl;
    }

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
      message: "Something went wrong while creating tweet",
      data: {},
      err: error,
    });
  }
};

const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(201).json({
      success: true,
      message: "Successfully fetched a new tweet",
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

export { createTweet, getTweet };
