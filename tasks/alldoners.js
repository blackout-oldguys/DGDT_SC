import { ethers } from "ethers";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const abiJson = require("../artifacts/contracts/SpermBank.sol/SpermBank.json");
const abi = abiJson.abi;


dotenv.config({"path":"../.env"});

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY ,key2,key3,key4,contractaddr} = process.env;

let keys = [DEPLOYER_PRIVATE_KEY, key2, key3, key4 ]
async function main() {
  const noditRpcUrl = RPC_ENDPOINT
  const provider = new ethers.JsonRpcProvider(noditRpcUrl);

  const privateKey = key3;
  
  const contractAddress = contractaddr;
  
  
  
  var wallet; 
  var spermBank
  wallet = new ethers.Wallet(DEPLOYER_PRIVATE_KEY, provider);
  spermBank = new ethers.Contract(contractAddress, abi, wallet);
  // Admin 주소 확인
  const admin = await spermBank.admin();
  console.log("Admin:", admin);

  // 기증자 정보 조회
  const donorInfo = await spermBank.getAllDonors();
  console.log("Donor Info:", donorInfo);
}

main().catch((error) => {
  console.error("Error:", error);
});
