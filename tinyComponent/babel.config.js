module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				useBuiltIns: "entry",
				corejs: "2"
			}
		]
	],
	include: ["src/**"]
};
