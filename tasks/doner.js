import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;

dotenv.config({ path: "../.env" });

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY, key2, key3, key4, contractaddr } = process.env;

let keys = [DEPLOYER_PRIVATE_KEY, key2, key3, key4];

const donorData1 = {
  bloodInfo: {
    bloodType: "A",
    hav: true,
    hbv: false,
    hcv: true,
    venerealDisease: false,
  },
  semenTestInfo: {
    semenVolume: 3000,
    spermCount: 20000000,
    spermMotility: "Excellent",
    spermShape: "Normal",
  },
  interviewInfo: {
    medicalHistory: {
      mentalRetardation: false,
      mentalIllness: true,
      epilepsy: false,
      otherConditions: ["Asthma"],
    },
    pastHistory: {
      drugUse: true,
      otherConditions: ["Smoking"],
    },
    geneticDisorders: ["Sickle Cell Anemia"],
    familyHistory: [
      { relation: "father", condition: "Heart Disease" },
      { relation: "mother", condition: "Cancer" },
    ],
  },
  physicalInfo: {
    height: 175,
    weight: 70,
    bodyType: "Slim",
    ethnicity: "Caucasian",
    personality: "Introverted",
    education: "Master",
    religion: "Christianity",
  },
};

const donorData2 = {
  bloodInfo: {
    bloodType: "B",
    hav: false,
    hbv: true,
    hcv: false,
    venerealDisease: true,
  },
  semenTestInfo: {
    semenVolume: 2800,
    spermCount: 18000000,
    spermMotility: "Good",
    spermShape: "Abnormal",
  },
  interviewInfo: {
    medicalHistory: {
      mentalRetardation: true,
      mentalIllness: false,
      epilepsy: false,
      otherConditions: [],
    },
    pastHistory: {
      drugUse: false,
      otherConditions: ["Surgery"],
    },
    geneticDisorders: ["Thalassemia"],
    familyHistory: [
      { relation: "father", condition: "Diabetes" },
      { relation: "mother", condition: "Arthritis" },
    ],
  },
  physicalInfo: {
    height: 180,
    weight: 80,
    bodyType: "Muscular",
    ethnicity: "Hispanic",
    personality: "Ambivert",
    education: "HighSchool",
    religion: "Buddhism",
  },
};

const donorData3 = {
  bloodInfo: {
    bloodType: "O",
    hav: false,
    hbv: false,
    hcv: true,
    venerealDisease: false,
  },
  semenTestInfo: {
    semenVolume: 2500,
    spermCount: 14000000,
    spermMotility: "Average",
    spermShape: "Normal",
  },
  interviewInfo: {
    medicalHistory: {
      mentalRetardation: false,
      mentalIllness: false,
      epilepsy: true,
      otherConditions: ["Migraines"],
    },
    pastHistory: {
      drugUse: false,
      otherConditions: ["Allergy"],
    },
    geneticDisorders: ["Hemophilia"],
    familyHistory: [
      { relation: "father", condition: "Stroke" },
      { relation: "mother", condition: "Thyroid Disorder" },
    ],
  },
  physicalInfo: {
    height: 178,
    weight: 72,
    bodyType: "Average",
    ethnicity: "African",
    personality: "Introverted",
    education: "PhD",
    religion: "Catholic",
  },
};

const donorData4 = {
  bloodInfo: {
    bloodType: "AB",
    hav: true,
    hbv: true,
    hcv: false,
    venerealDisease: false,
  },
  semenTestInfo: {
    semenVolume: 3200,
    spermCount: 22000000,
    spermMotility: "Excellent",
    spermShape: "Perfect",
  },
  interviewInfo: {
    medicalHistory: {
      mentalRetardation: false,
      mentalIllness: false,
      epilepsy: false,
      otherConditions: ["Fractures"],
    },
    pastHistory: {
      drugUse: true,
      otherConditions: ["Minor Surgery"],
    },
    geneticDisorders: ["Cystic Fibrosis"],
    familyHistory: [
      { relation: "father", condition: "Parkinson's" },
      { relation: "mother", condition: "Osteoporosis" },
    ],
  },
  physicalInfo: {
    height: 185,
    weight: 78,
    bodyType: "Athletic",
    ethnicity: "Asian",
    personality: "Extroverted",
    education: "Bachelor",
    religion: "Islam",
  },
};

let donors = [donorData1, donorData2, donorData3, donorData4];

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
    

    // 기부자 등록
    const tx = await spermBank.registerDonor(
      donors[i].bloodInfo,
      donors[i].semenTestInfo,
      donors[i].interviewInfo,
      donors[i].physicalInfo
    );

    console.log(`Transaction hash for wallet ${wallet.address}: ${tx.hash}`);
    await tx.wait();
    console.log(`Donor registered for wallet ${wallet.address}`);
  }
}

main().catch((error) => {
  console.error("Error:", error);
});
