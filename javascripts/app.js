accounts = window.accounts;
account = window.account;
wallet_address = window.wallet_address;
wallet_address_politiken = window.wallet_address_politiken;

// Step 1: Get a contract into my application
var json = require("../../build/contracts/Migrations.json");

// Step 2: Turn that contract into an abstraction I can use
var contract = require("truffle-contract");
window.Ekrone = contract(json);

//Step 3: Provision the contract with a web3 provider
Ekrone.setProvider(new Web3.providers.HttpProvider("http://"+window.location.hostname+":8545"));
Ekrone.setNetwork(1234);

window.web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("http://"+window.location.hostname+":8545"));

window.onload = function () {
  // //Check if Ekrone is undefined because of truffle serve did not pick the correct network id
  // if(!!!Ekrone.address)
  //   Ekrone.setNetwork(1234); //docker_env
  
  //code for Global to fill up the account (master account for installation)
  web3.eth.getAccounts(function (err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.  " + err);
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    //refreshBalance();
    showBalanceFor(account,'totalSupply');
  });

}