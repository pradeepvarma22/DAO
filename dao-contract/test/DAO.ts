import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {

  async function deployOneYearLockFixture() {
  }

  describe("Deployment", function () {


    it("Deploy", async function () {
    await loadFixture(deployOneYearLockFixture);

    });


  });
  
});
