import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;


dotenv.config({"path":"../.env"});

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY } = process.env;


async function main() {
  console.log("DEPLOYER_PRIVATE_KEY:", DEPLOYER_PRIVATE_KEY);

  const noditRpcUrl = RPC_ENDPOINT
  const provider = new ethers.JsonRpcProvider(noditRpcUrl);

  const privateKey = DEPLOYER_PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x467FB975D455181eC75307Df3af64E408bE2ACC1";

  const spermBank = new ethers.Contract(contractAddress, abi, wallet);

  // Admin 주소 확인
  const admin = await spermBank.admin();
  console.log("Admin:", admin);

  // 새로운 기증자 등록
  const tx = await spermBank.registerDonor("Alice", 30, "O+", "QmExampleHash");
  console.log("Transaction hash:", tx.hash);
  await tx.wait();
  console.log("Donor registered!");

  // 기증자 정보 조회
  const donorInfo = await spermBank.getDonorInfo(wallet.address);
  console.log("Donor Info:", donorInfo);
}

main().catch((error) => {
  console.error("Error:", error);
});
