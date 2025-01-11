const { expect } = require("chai");

describe("SpermBank", function () {
  it("Should register a donor and retrieve donor info", async function () {
    const [admin, donor] = await ethers.getSigners();

    const SpermBank = await ethers.getContractFactory("SpermBank");
    const spermBank = await SpermBank.deploy();
    await spermBank.deployed();

    await spermBank.connect(donor).registerDonor("Alice", 25, "O+", "QmHash");
    const donorInfo = await spermBank.getDonorInfo(donor.address);

    expect(donorInfo.name).to.equal("Alice");
    expect(donorInfo.age).to.equal(25);
    expect(donorInfo.bloodType).to.equal("O+");
  });
});
