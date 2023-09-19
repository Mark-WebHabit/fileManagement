const whiteList = ["http://localhost:3000", "http://127.0.0.1:3000"];

export const CorsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, //allow cookies
};
