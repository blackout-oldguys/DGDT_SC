/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { SpermBank, SpermBankInterface } from "../SpermBank";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "DonorRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "donors",
    outputs: [
      {
        internalType: "address",
        name: "donorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "bloodType",
        type: "string",
      },
      {
        internalType: "string",
        name: "geneticInfoHash",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isRegistered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_donorAddress",
        type: "address",
      },
    ],
    name: "getDonorInfo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_bloodType",
        type: "string",
      },
      {
        internalType: "string",
        name: "_geneticInfoHash",
        type: "string",
      },
    ],
    name: "registerDonor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061129c806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063c46a60a514610051578063ca0cdea814610084578063dad9fef0146100b9578063f851a440146100d5575b600080fd5b61006b60048036038101906100669190610955565b6100f3565b60405161007b9493929190610a2b565b60405180910390f35b61009e60048036038101906100999190610955565b610470565b6040516100b096959493929190610aaf565b60405180910390f35b6100d360048036038101906100ce9190610c86565b610671565b005b6100dd6108bd565b6040516100ea9190610d41565b60405180910390f35b60606000606080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461018a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018190610dce565b60405180910390fd5b60008060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461023b90610e1d565b80601f016020809104026020016040519081016040528092919081815260200182805461026790610e1d565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b50505050508152602001600282015481526020016003820180546102d790610e1d565b80601f016020809104026020016040519081016040528092919081815260200182805461030390610e1d565b80156103505780601f1061032557610100808354040283529160200191610350565b820191906000526020600020905b81548152906001019060200180831161033357829003601f168201915b5050505050815260200160048201805461036990610e1d565b80601f016020809104026020016040519081016040528092919081815260200182805461039590610e1d565b80156103e25780601f106103b7576101008083540402835291602001916103e2565b820191906000526020600020905b8154815290600101906020018083116103c557829003601f168201915b505050505081526020016005820160009054906101000a900460ff16151515158152505090508060a0015161044c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044390610e9a565b60405180910390fd5b80602001518160400151826060015183608001519450945094509450509193509193565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546104b990610e1d565b80601f01602080910402602001604051908101604052809291908181526020018280546104e590610e1d565b80156105325780601f1061050757610100808354040283529160200191610532565b820191906000526020600020905b81548152906001019060200180831161051557829003601f168201915b50505050509080600201549080600301805461054d90610e1d565b80601f016020809104026020016040519081016040528092919081815260200182805461057990610e1d565b80156105c65780601f1061059b576101008083540402835291602001916105c6565b820191906000526020600020905b8154815290600101906020018083116105a957829003601f168201915b5050505050908060040180546105db90610e1d565b80601f016020809104026020016040519081016040528092919081815260200182805461060790610e1d565b80156106545780601f1061062957610100808354040283529160200191610654565b820191906000526020600020905b81548152906001019060200180831161063757829003601f168201915b5050505050908060050160009054906101000a900460ff16905086565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160009054906101000a900460ff1615610700576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f790610f06565b60405180910390fd5b6012831015610744576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073b90610f98565b60405180910390fd5b6040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001828152602001600115158152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816108249190611164565b506040820151816002015560608201518160030190816108449190611164565b50608082015181600401908161085a9190611164565b5060a08201518160050160006101000a81548160ff0219169083151502179055509050507ff6bba8a2d47514955cc8e64ea9127b51d5615832d1fbd20ec40275f0876cfcbf33856040516108af929190611236565b60405180910390a150505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610922826108f7565b9050919050565b61093281610917565b811461093d57600080fd5b50565b60008135905061094f81610929565b92915050565b60006020828403121561096b5761096a6108ed565b5b600061097984828501610940565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109bc5780820151818401526020810190506109a1565b60008484015250505050565b6000601f19601f8301169050919050565b60006109e482610982565b6109ee818561098d565b93506109fe81856020860161099e565b610a07816109c8565b840191505092915050565b6000819050919050565b610a2581610a12565b82525050565b60006080820190508181036000830152610a4581876109d9565b9050610a546020830186610a1c565b8181036040830152610a6681856109d9565b90508181036060830152610a7a81846109d9565b905095945050505050565b610a8e81610917565b82525050565b60008115159050919050565b610aa981610a94565b82525050565b600060c082019050610ac46000830189610a85565b8181036020830152610ad681886109d9565b9050610ae56040830187610a1c565b8181036060830152610af781866109d9565b90508181036080830152610b0b81856109d9565b9050610b1a60a0830184610aa0565b979650505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610b67826109c8565b810181811067ffffffffffffffff82111715610b8657610b85610b2f565b5b80604052505050565b6000610b996108e3565b9050610ba58282610b5e565b919050565b600067ffffffffffffffff821115610bc557610bc4610b2f565b5b610bce826109c8565b9050602081019050919050565b82818337600083830152505050565b6000610bfd610bf884610baa565b610b8f565b905082815260208101848484011115610c1957610c18610b2a565b5b610c24848285610bdb565b509392505050565b600082601f830112610c4157610c40610b25565b5b8135610c51848260208601610bea565b91505092915050565b610c6381610a12565b8114610c6e57600080fd5b50565b600081359050610c8081610c5a565b92915050565b60008060008060808587031215610ca057610c9f6108ed565b5b600085013567ffffffffffffffff811115610cbe57610cbd6108f2565b5b610cca87828801610c2c565b9450506020610cdb87828801610c71565b935050604085013567ffffffffffffffff811115610cfc57610cfb6108f2565b5b610d0887828801610c2c565b925050606085013567ffffffffffffffff811115610d2957610d286108f2565b5b610d3587828801610c2c565b91505092959194509250565b6000602082019050610d566000830184610a85565b92915050565b7f4f6e6c792061646d696e2063616e20706572666f726d2074686973206163746960008201527f6f6e2e0000000000000000000000000000000000000000000000000000000000602082015250565b6000610db860238361098d565b9150610dc382610d5c565b604082019050919050565b60006020820190508181036000830152610de781610dab565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e3557607f821691505b602082108103610e4857610e47610dee565b5b50919050565b7f446f6e6f72206e6f7420726567697374657265642e0000000000000000000000600082015250565b6000610e8460158361098d565b9150610e8f82610e4e565b602082019050919050565b60006020820190508181036000830152610eb381610e77565b9050919050565b7f446f6e6f7220616c726561647920726567697374657265642e00000000000000600082015250565b6000610ef060198361098d565b9150610efb82610eba565b602082019050919050565b60006020820190508181036000830152610f1f81610ee3565b9050919050565b7f446f6e6f72206d757374206265206174206c656173742031382079656172732060008201527f6f6c642e00000000000000000000000000000000000000000000000000000000602082015250565b6000610f8260248361098d565b9150610f8d82610f26565b604082019050919050565b60006020820190508181036000830152610fb181610f75565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261101a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610fdd565b6110248683610fdd565b95508019841693508086168417925050509392505050565b6000819050919050565b600061106161105c61105784610a12565b61103c565b610a12565b9050919050565b6000819050919050565b61107b83611046565b61108f61108782611068565b848454610fea565b825550505050565b600090565b6110a4611097565b6110af818484611072565b505050565b5b818110156110d3576110c860008261109c565b6001810190506110b5565b5050565b601f821115611118576110e981610fb8565b6110f284610fcd565b81016020851015611101578190505b61111561110d85610fcd565b8301826110b4565b50505b505050565b600082821c905092915050565b600061113b6000198460080261111d565b1980831691505092915050565b6000611154838361112a565b9150826002028217905092915050565b61116d82610982565b67ffffffffffffffff81111561118657611185610b2f565b5b6111908254610e1d565b61119b8282856110d7565b600060209050601f8311600181146111ce57600084156111bc578287015190505b6111c68582611148565b86555061122e565b601f1984166111dc86610fb8565b60005b82811015611204578489015182556001820191506020850194506020810190506111df565b86831015611221578489015161121d601f89168261112a565b8355505b6001600288020188555050505b505050505050565b600060408201905061124b6000830185610a85565b818103602083015261125d81846109d9565b9050939250505056fea2646970667358221220a77f947664d79b3d24ea46d521d4e39a02714cec4084c1571250bb1649d2238364736f6c63430008130033";

type SpermBankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpermBankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SpermBank__factory extends ContractFactory {
  constructor(...args: SpermBankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SpermBank & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SpermBank__factory {
    return super.connect(runner) as SpermBank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpermBankInterface {
    return new Interface(_abi) as SpermBankInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SpermBank {
    return new Contract(address, _abi, runner) as unknown as SpermBank;
  }
}
