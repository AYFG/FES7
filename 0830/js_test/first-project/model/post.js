const mongooese = require("mongoose");
const Schema = mongooese.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  create_date: { type: Date, defalut: new Date() },
});

module.exports = mongooese.model("post", postSchema);
