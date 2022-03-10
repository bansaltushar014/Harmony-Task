const QRC20Token = artifacts.require("QRC20Token");

module.exports = function (deployer) {
  deployer.deploy(QRC20Token);
};
