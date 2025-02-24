import Inquiry from "../models/inqury.js";
import { isCustomer, isHasAccount } from "./userPermision.js";

export async function inquiryAdd(req, res) {
  try {
    const data = req.body;

    if (isHasAccount(req)) {
      const newInquriy = new Inquiry(data);
      await newInquriy.save();
      res.json({
        message: "Inqury added successfully",
      });
      return;
    } else {
      res.status(403).json({
        message: "Please login",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "inquiry added unsuccessfully",
    });
  }
}
