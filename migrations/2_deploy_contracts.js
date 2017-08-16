var ConvertLib = artifacts.require("./ConvertLib.sol");
var Ekrone = artifacts.require("./Ekrone.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Ekrone);
  deployer.deploy(Ekrone);
};
