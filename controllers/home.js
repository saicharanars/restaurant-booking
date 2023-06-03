const { error, Console } = require("console");
const path = require("path");
const rootDir = path.dirname(process.mainModule.filename);
const Order = require("../models/restaurant");

exports.getViewPath = async (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};
exports.postOrder = async (req, res, next) => {
  try {
    //const { name, email, phone } = req.body;
    const orderamount = req.body.orderamount;
    const orderdish = req.body.orderdish;
    const ordertable = req.body.ordertable;

    const data = await Order.create({
      orderamount: orderamount,
      orderdish: orderdish,
      ordertable: ordertable,
    });

    res.status(200).json({ orders: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getData = async (req, res, next) => {
  try {
    const data = await Order.findAll();
    res.status(200).json({ orders: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.postDeleteOrder = async (req, res, next) => {
  try {
    if (!req.params.id) {
      console.log("ID IS MISSING");
      return res.status(400).json({ err: "ID is missing" });
    }
    const uId = req.params.id;
    await Order.destroy({ where: { id: uId } });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

