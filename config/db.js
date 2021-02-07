const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (res) console.log("Connection established!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
