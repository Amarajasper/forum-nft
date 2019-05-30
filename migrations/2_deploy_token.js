const ToTERC721 = artifacts.require("ToTContract");

module.exports = function(deployer) {
  deployer.deploy(ToTERC721);
};