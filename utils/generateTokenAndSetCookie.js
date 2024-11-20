const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (res, userId) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
    console.log("token", token);
	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production", // Make sure to use secure cookies in production
        sameSite: process.env.NODE_ENV === "production" ? "Strict" : "None", // Allow cross-origin in dev
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return token;
};
module.exports = generateTokenAndSetCookie;