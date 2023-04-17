// creating user schema using models to save data in database in a document inside a particular collection
//the collection name in database is users


const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    contactNo: {
      type: Number,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },
    // cpassword: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    tokens: [
      {
        token: {
          type: String,
          require: true,
        },
      },
    ],
  },
  { timeStamps: true }
);
userSchema.methods.generateAuthToken = async function () {
 nsole.log(error);
  // }
  try {
   
    let newtoken = jwt.sign({ _id: this._id }, `${process.env.SECRET_KEY}`);

    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (error) {
    console.log(error);
  }
};


const User = mongoose.model("USER", userSchema);
module.exports = User;
