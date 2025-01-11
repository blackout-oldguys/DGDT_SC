import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;

dotenv.config({ path: "../.env" });

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY, key2, key3, key4, contractaddr } = process.env;

let keys = [DEPLOYER_PRIVATE_KEY, key2, key3, key4];

async function main() {
  const noditRpcUrl = RPC_ENDPOINT;
  const provider = new ethers.JsonRpcProvider(noditRpcUrl);

  const contractAddress = contractaddr;

  for (let i = 0; i < keys.length; i++) {
    // 지갑 생성
    const wallet = new ethers.Wallet(keys[i], provider);
    const spermBank = new ethers.Contract(contractAddress, abi, wallet);

    // Admin 주소 확인
    const admin = await spermBank.admin();
    console.log(`Admin: ${admin}`);

    // 중복 등록 방지 확인
    const donorInfo = await spermBank.donors(wallet.address);
    if (donorInfo.isRegistered) {
      console.log(`Wallet ${wallet.address} is already registered.`);
      continue;
    }

    // 새로운 기증자 데이터 생성
    const donorData = {
      bloodInfo: {
        bloodType: "AB" + (i + 1),
        hav: false,
        hbv: false,
        hcv: false,
        venerealDisease: false,
      },
      semenTestInfo: {
        semenVolume: 2500,
        spermCount: 15000000,
        spermMotility: "Normal",
        spermShape: "Normal",
      },
      interviewInfo: {
        medicalHistory: {
          mentalRetardation: false,
          mentalIllness: false,
          epilepsy: false,
          otherConditions: [],
        },
        pastHistory: {
          drugUse: false,
          otherConditions: [],
        },
        geneticDisorders: [],
        familyHistory: [
          { relation: "father", condition: "Hypertension" },
          { relation: "mother", condition: "Diabetes" },
        ],
      },
      physicalInfo: {
        height: 183,
        weight: 75,
        bodyType: "Athletic",
        ethnicity: "Asian",
        personality: "Extroverted",
        education: "University",
        religion: "None",
      },
    };

    // 기부자 등록
    const tx = await spermBank.registerDonor(
      donorData.bloodInfo,
      donorData.semenTestInfo,
      donorData.interviewInfo,
      donorData.physicalInfo
    );

    console.log(`Transaction hash for wallet ${wallet.address}: ${tx.hash}`);
    await tx.wait();
    console.log(`Donor registered for wallet ${wallet.address}`);
  }
}

main().catch((error) => {
  console.error("Error:", error);
});
