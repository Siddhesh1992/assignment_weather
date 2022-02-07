const mongoose = require('mongoose');

const { Schema } = mongoose;

const CitySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('city', CitySchema);
