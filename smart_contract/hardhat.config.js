require("@nomiclabs/hardhat-waffle");
module.exports = {
	solidity: "0.8.2",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/QqRGn6QNo-hp6bmbyVZrUlZEMe7qR17M",
			accounts: [
				"e64ecc35645e8554050b277e2dea8c100f5dba9d263fd123f7bb1b4478023b53",
			],
		},
	},
};
