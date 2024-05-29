import { Hashtag } from '../models/hastag.model.js'; // Ensure the path and extension are correct

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {  // Corrected method name
    try {
      const tag = await Hashtag.findByIdAndDelete(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList){
    try {
      const tags = await Hashtag.find({
        title:titleList
      }).select('title -_id')
      return tags
    } catch (error) {
      
    }
  }
}
export { HashtagRepository }; // Ensure correct export syntax
