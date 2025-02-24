import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { isHasAccount, itIsAdmin } from "./userPermision.js";

dotenv.config();

export async function userRegister(req, res) {
  try {
    const data = req.body;
    data.password = bcrypt.hashSync(data.password, 10);

    const isEmailAlready = await User.findOne({
      email: data.email,
    });
    if (isEmailAlready) {
      res.status(403).json({
        message: "Email Already use",
      });
    } else {
      const newUser = new User(data);
      await newUser.save();
      res.json({
        message: "Registration Completed, now you are member of our site",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Registration unsuccessfully,Please try again",
    });
  }
}

export async function userLogin(req, res) {
  try {
    const data = req.body;

    const checkEmail = await User.findOne({
      email: data.email,
    });

    if (checkEmail) {
      const isPasswordCorrect = bcrypt.compareSync(
        data.password,
        checkEmail.password
      );
      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            firstName: checkEmail.firstName,
            lastName: checkEmail.lastName,
            email: checkEmail.email,
            phone: checkEmail.phone,
            role: checkEmail.role,
            profile_Image: checkEmail.profile_Image,
          },
          process.env.SEKRET_KEY
        );

        res.json({
          message: "Login successfully",
          token: token,
          user: checkEmail,
        });
      } else {
        res.status(403).json({
          message: "Password is wrong please try again",
        });
      }
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Pleast try again",
    });
  }
}

export async function getUser(req, res) {
  try {
    const user_id = req.params.id;
    if (isHasAccount(req)) {
      const result = await User.findOne({
        _id: user_id,
      });
      res.json(result);
      return;
    } else {
      req.status(403).json({
        message: "plese login",
      });
    }
  } catch (err) {
    res.json({
      message: "Internal server error",
    });
  }
}

export async function getAllUser(req, res) {
  try {
    if (isHasAccount(req)) {
      if (itIsAdmin(req)) {
        const result = await User.find();
        res.json(result);
        return;
      } else {
        res.status(403).json({
          message: "cant do this task it can onlt admin!",
        });
        return;
      }
    } else {
      res.status(403).json({
        message: "Please login first!",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
}

export async function userUpdate(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    if (isHasAccount(req)) {
      await User.updateOne(
        {
          _id: id,
        },
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        }
      );
      res.json({
        message: "Update successful",
      });

      return;
    } else {
      res.status(403).json({
        message: "Please login first",
      });
    }
  } catch (err) {
    res.status(503).json(err);
  }
}

export async function deleteUser(req, res) {
  try {

    const id = req.params.id;

    if(isHasAccount(req)){

        await User.deleteOne({
            _id : id
        })
        res.json({
            message : "Deleted successfully"
        })
        return
    }else{
        res.status(403).json({
            message : "Please login first"
        })
        return
    }
  } catch (err) {
    res.status(503).json({
      err: err,
    });
  }
}
