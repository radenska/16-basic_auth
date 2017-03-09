'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  userID: { type: Schema.Types.ObjectId, required: true },
  galleryID: { type: Schema.Types.ObjectId, required: true },
  objectKey: { type: String, required: true, unique: true },
  created: { type: Date, default: Date.now },
  imageURI: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('pic', picSchema);
