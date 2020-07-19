exports.getDate = function () {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return date.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const day = new Date();

  const options = {
    weekday: "long",
  };

  return day.toLocaleDateString("en-US", options);
};
