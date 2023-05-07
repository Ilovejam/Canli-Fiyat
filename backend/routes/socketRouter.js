const express = require("express");

function SocketRouter(io) {
  const router = express.Router();
  var sendData = "abc";
  router.get("/socketapi", (req, res) => {
    io.emit("mod_forecast", sendData);
    res.json({
      message: "data delivered",
    });
  });

  return router;
}

module.exports = SocketRouter;
