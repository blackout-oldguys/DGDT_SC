import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
import { matchesGlob } from "path";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;

dotenv.config({ path: "../.env" });

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY ,key2,key3,key4,contractaddr,receiver,giver} = process.env;

let keys = [DEPLOYER_PRIVATE_KEY, key2, key3, key4 ]

async function main() {
  // RPC 연결 설정
  const noditRpcUrl = RPC_ENDPOINT;
  const provider = new ethers.JsonRpcProvider(noditRpcUrl);

  // 지갑 생성
  const privateKey = DEPLOYER_PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // 컨트랙트 주소와 연결
  const contractAddress = contractaddr;
  const spermBank = new ethers.Contract(contractAddress, abi, wallet);

  // Admin 주소 확인
  const admin = await spermBank.admin();
  console.log("Admin:", admin);

  // 모든 기증자 정보 조회
  try {
    const allDonors = await spermBank.getAllDonors(); // Solidity 컨트랙트에 함수가 정의되어 있어야 함
    console.log("All Donors:", allDonors);
  } catch (error) {
    console.error("Error retrieving all donors:", error);
    return;
  }

  // 정자 수령하기 (관리자만 호출 가능)
  // 정자 수령하기 (관리자만 호출 가능)
try {
  // 수령자와 기증자의 주소 확인
  const receiverAddress = receiver;
  const donorAddress = giver;

  console.log("Receiver Address:", receiverAddress);
  console.log("Donor Address:", donorAddress);

  // 관리자 주소 검증
  const adminAddress = await spermBank.admin();
  if (wallet.address.toLowerCase() !== adminAddress.toLowerCase()) {
    throw new Error("Current wallet is not the admin.");
  }

  // 정자 수령 함수 호출
  const receiveTx = await spermBank.spermReceive(receiverAddress, donorAddress);
  console.log("Receive transaction hash:", receiveTx.hash);
  await receiveTx.wait();
  console.log(`Sperm received successfully by ${receiverAddress}`);
} catch (error) {
  console.error("Error receiving sperm:", error);
}


  // 기증 기록 조회
  try {
    const donations = await spermBank.getDonationHistory();
    console.log("Donation History:", donations);
  } catch (error) {
    console.error("Error retrieving donation history:", error);
    return;
  }

  // 수령 기록 조회
  try {
    const receivers = await spermBank.getReceiverHistory();
    console.log("Receiver History:", receivers);
  } catch (error) {
    console.error("Error retrieving receiver history:", error);
    return;
  }
}

main().catch((error) => {
  console.error("Unexpected Error:", error);
});
