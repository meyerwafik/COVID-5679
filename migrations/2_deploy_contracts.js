var OwnerFactory = artifacts.require("./OwnerFactory.sol");

var Ownable = artifacts.require("./Ownable.sol");

var PointsFactory = artifacts.require("./PointsFactory.sol");

var Transfering = artifacts.require("./transfering.sol");
module.exports = function (deployer) {
    deployer.deploy(Transfering);
    deployer.deploy(PointsFactory);
    deployer.deploy(Ownable);
    deployer.deploy(OwnerFactory);
};
