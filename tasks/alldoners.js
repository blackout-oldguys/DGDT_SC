import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;

dotenv.config({ path: "../.env" });

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY } = process.env;

async function main() {
  // RPC 연결 설정
  const noditRpcUrl = RPC_ENDPOINT;
  const provider = new ethers.JsonRpcProvider(noditRpcUrl);

  // 지갑 생성
  const privateKey = DEPLOYER_PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // 컨트랙트 주소와 연결
  const contractAddress = "0xFFC4cd3c840D4962C57092aD5C19409edd93f0F7";
  const spermBank = new ethers.Contract(contractAddress, abi, wallet);

  // Admin 주소 확인
  const admin = await spermBank.admin();
  console.log("Admin:", admin);

  // 새로운 기증자 등록 데이터
  const donorData = {
    name: "donerver3",
    age: 30,
    bloodInfo: [
      "AB", // bloodType
      false, // hav
      false, // hbv
      false, // hcv
      false, // venerealDisease
    ],
    semenTestInfo: [
      2500, // semenVolume
      15000000, // spermCount
      "Normal", // spermMotility
      "Normal", // spermShape
    ],
    interviewInfo: [
      [
        false, // mentalRetardation
        false, // mentalIllness
        false, // epilepsy
        [], // otherConditions
      ],
      [
        false, // drugUse
        [], // otherConditions
      ],
      [], // geneticDisorders
      [
        ["father", "Hypertension"], // familyHistory: relation, condition
        ["mother", "Diabetes"],
      ],
    ],
    physicalInfo: [
      183, // height
      75, // weight
      "Athletic", // bodyType
      "Asian", // ethnicity
      "Extroverted", // personality
      "University", // education
      "None", // religion
    ],
  };

  // 새로운 기증자 등록
  try {
    const tx = await spermBank.registerDonor(
      donorData.name,
      donorData.age,
      donorData.bloodInfo,
      donorData.semenTestInfo,
      donorData.interviewInfo,
      donorData.physicalInfo
    );
    console.log("Transaction hash:", tx.hash);
    await tx.wait();
    console.log("Donor registered!");
  } catch (error) {
    console.error("Error registering donor:", error);
    return;
  }

  // 특정 기증자 정보 조회
  try {
    const donorInfo = await spermBank.getDonorInfo(wallet.address);
    console.log("Donor Info:", donorInfo);
  } catch (error) {
    console.error("Error retrieving donor info:", error);
    return;
  }

  // 모든 기증자 정보 조회
  try {
    const allDonors = await spermBank.getAllDonors(); // Solidity 컨트랙트에 함수가 정의되어 있어야 함
    console.log("All Donors:", allDonors);
  } catch (error) {
    console.error("Error retrieving all donors:", error);
    return;
  }
}

main().catch((error) => {
  console.error("Unexpected Error:", error);
});
