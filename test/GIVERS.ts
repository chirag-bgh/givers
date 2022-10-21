import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import BigNumber from "bignumber.js"
describe("Tocken Contract", function () {

  
  /*
  Expected tests:

1. Total supply equal to what you set.
2. Transfer to wallets that are excluded and not excluded from fee.
3. Make sure adding liquidity works.
4. Check that the fees are sent to appropriate wallets correctly.
5. Make sure swap and liquify works.
*/

  async function deployTokenFixture() {
    const TOTAL_SUPPLY = 1000000000;
  
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, charityWallet, marketingWallet] = await ethers.getSigners();

    const givers = await ethers.getContractFactory("GIVERS");
    const GIVERS = await givers.deploy( charityWallet.address, marketingWallet.address);
    

    return { givers, GIVERS, charityWallet, marketingWallet, owner, otherAccount, TOTAL_SUPPLY };

    console.log(TOTAL_SUPPLY);
  }

  describe("Deployment", function () {

    it("Should set the right total supply", async function  () {
        const {TOTAL_SUPPLY,GIVERS} = await loadFixture(deployTokenFixture);
        expect(new BigNumber((await GIVERS.totalSupply()).toString()).div(10**18)).to.equal(new BigNumber(TOTAL_SUPPLY));
    });



    
  });

  
    
    
    

});
