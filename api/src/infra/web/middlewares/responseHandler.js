function responseHandler(req, res, next) {
  const oldJson = res.json;

  res.json = function (data) {
    const statusCode = res.statusCode || 200;

    const statusTexts = {
      200: "OK",
      201: "Created",
      400: "Bad Request",
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      500: "Internal Server Error"
    };

    oldJson.call(res, {
      status: statusCode,
      statusText: statusTexts[statusCode] || "ERROR",
      data: data
    });
  };

  next();
}

module.exports = responseHandler;
