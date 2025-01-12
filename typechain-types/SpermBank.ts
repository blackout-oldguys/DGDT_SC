/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace SpermBank {
  export type BloodInfoStruct = {
    bloodType: string;
    hav: boolean;
    hbv: boolean;
    hcv: boolean;
    venerealDisease: boolean;
  };

  export type BloodInfoStructOutput = [
    bloodType: string,
    hav: boolean,
    hbv: boolean,
    hcv: boolean,
    venerealDisease: boolean
  ] & {
    bloodType: string;
    hav: boolean;
    hbv: boolean;
    hcv: boolean;
    venerealDisease: boolean;
  };

  export type SemenTestInfoStruct = {
    semenVolume: BigNumberish;
    spermCount: BigNumberish;
    spermMotility: string;
    spermShape: string;
  };

  export type SemenTestInfoStructOutput = [
    semenVolume: bigint,
    spermCount: bigint,
    spermMotility: string,
    spermShape: string
  ] & {
    semenVolume: bigint;
    spermCount: bigint;
    spermMotility: string;
    spermShape: string;
  };

  export type MedicalHistoryStruct = {
    mentalRetardation: boolean;
    mentalIllness: boolean;
    epilepsy: boolean;
    otherConditions: string[];
  };

  export type MedicalHistoryStructOutput = [
    mentalRetardation: boolean,
    mentalIllness: boolean,
    epilepsy: boolean,
    otherConditions: string[]
  ] & {
    mentalRetardation: boolean;
    mentalIllness: boolean;
    epilepsy: boolean;
    otherConditions: string[];
  };

  export type PastHistoryStruct = {
    drugUse: boolean;
    otherConditions: string[];
  };

  export type PastHistoryStructOutput = [
    drugUse: boolean,
    otherConditions: string[]
  ] & { drugUse: boolean; otherConditions: string[] };

  export type FamilyHistoryStruct = { relation: string; condition: string };

  export type FamilyHistoryStructOutput = [
    relation: string,
    condition: string
  ] & { relation: string; condition: string };

  export type InterviewInfoStruct = {
    medicalHistory: SpermBank.MedicalHistoryStruct;
    pastHistory: SpermBank.PastHistoryStruct;
    geneticDisorders: string[];
    familyHistory: SpermBank.FamilyHistoryStruct[];
  };

  export type InterviewInfoStructOutput = [
    medicalHistory: SpermBank.MedicalHistoryStructOutput,
    pastHistory: SpermBank.PastHistoryStructOutput,
    geneticDisorders: string[],
    familyHistory: SpermBank.FamilyHistoryStructOutput[]
  ] & {
    medicalHistory: SpermBank.MedicalHistoryStructOutput;
    pastHistory: SpermBank.PastHistoryStructOutput;
    geneticDisorders: string[];
    familyHistory: SpermBank.FamilyHistoryStructOutput[];
  };

  export type PhysicalInfoStruct = {
    height: BigNumberish;
    weight: BigNumberish;
    bodyType: string;
    ethnicity: string;
    personality: string;
    education: string;
    religion: string;
  };

  export type PhysicalInfoStructOutput = [
    height: bigint,
    weight: bigint,
    bodyType: string,
    ethnicity: string,
    personality: string,
    education: string,
    religion: string
  ] & {
    height: bigint;
    weight: bigint;
    bodyType: string;
    ethnicity: string;
    personality: string;
    education: string;
    religion: string;
  };

  export type DonorStruct = {
    donorAddress: AddressLike;
    bloodInfo: SpermBank.BloodInfoStruct;
    semenTestInfo: SpermBank.SemenTestInfoStruct;
    interviewInfo: SpermBank.InterviewInfoStruct;
    physicalInfo: SpermBank.PhysicalInfoStruct;
    isRegistered: boolean;
  };

  export type DonorStructOutput = [
    donorAddress: string,
    bloodInfo: SpermBank.BloodInfoStructOutput,
    semenTestInfo: SpermBank.SemenTestInfoStructOutput,
    interviewInfo: SpermBank.InterviewInfoStructOutput,
    physicalInfo: SpermBank.PhysicalInfoStructOutput,
    isRegistered: boolean
  ] & {
    donorAddress: string;
    bloodInfo: SpermBank.BloodInfoStructOutput;
    semenTestInfo: SpermBank.SemenTestInfoStructOutput;
    interviewInfo: SpermBank.InterviewInfoStructOutput;
    physicalInfo: SpermBank.PhysicalInfoStructOutput;
    isRegistered: boolean;
  };

  export type DonationStruct = {
    id: BigNumberish;
    donorAddress: AddressLike;
    timestamp: BigNumberish;
  };

  export type DonationStructOutput = [
    id: bigint,
    donorAddress: string,
    timestamp: bigint
  ] & { id: bigint; donorAddress: string; timestamp: bigint };

  export type ReceiverStruct = {
    receiverAddress: AddressLike;
    donorAddress: AddressLike;
    timestamp: BigNumberish;
  };

  export type ReceiverStructOutput = [
    receiverAddress: string,
    donorAddress: string,
    timestamp: bigint
  ] & { receiverAddress: string; donorAddress: string; timestamp: bigint };
}

export interface SpermBankInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "admin"
      | "donateSperm"
      | "donations"
      | "donorAddresses"
      | "donors"
      | "getAllDonors"
      | "getDonationHistory"
      | "getDonorInfo"
      | "getReceiverByDonorAddress"
      | "getReceiverHistory"
      | "receivers"
      | "registerDonor"
      | "spermReceive"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DonationReceived"
      | "DonorRegistered"
      | "SpermReceived"
  ): EventFragment;

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "donateSperm",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "donorAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "donors", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "getAllDonors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDonationHistory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDonorInfo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiverByDonorAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiverHistory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerDonor",
    values: [
      SpermBank.BloodInfoStruct,
      SpermBank.SemenTestInfoStruct,
      SpermBank.InterviewInfoStruct,
      SpermBank.PhysicalInfoStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "spermReceive",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donateSperm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donations", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donorAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllDonors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDonationHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDonorInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiverByDonorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiverHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receivers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerDonor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spermReceive",
    data: BytesLike
  ): Result;
}

export namespace DonationReceivedEvent {
  export type InputTuple = [
    donationId: BigNumberish,
    donorAddress: AddressLike
  ];
  export type OutputTuple = [donationId: bigint, donorAddress: string];
  export interface OutputObject {
    donationId: bigint;
    donorAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DonorRegisteredEvent {
  export type InputTuple = [donorAddress: AddressLike];
  export type OutputTuple = [donorAddress: string];
  export interface OutputObject {
    donorAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SpermReceivedEvent {
  export type InputTuple = [
    receiverAddress: AddressLike,
    donorAddress: AddressLike
  ];
  export type OutputTuple = [receiverAddress: string, donorAddress: string];
  export interface OutputObject {
    receiverAddress: string;
    donorAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SpermBank extends BaseContract {
  connect(runner?: ContractRunner | null): SpermBank;
  waitForDeployment(): Promise<this>;

  interface: SpermBankInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  admin: TypedContractMethod<[], [string], "view">;

  donateSperm: TypedContractMethod<[], [void], "nonpayable">;

  donations: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint] & {
        id: bigint;
        donorAddress: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  donorAddresses: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  donors: TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        string,
        SpermBank.BloodInfoStructOutput,
        SpermBank.SemenTestInfoStructOutput,
        SpermBank.InterviewInfoStructOutput,
        SpermBank.PhysicalInfoStructOutput,
        boolean
      ] & {
        donorAddress: string;
        bloodInfo: SpermBank.BloodInfoStructOutput;
        semenTestInfo: SpermBank.SemenTestInfoStructOutput;
        interviewInfo: SpermBank.InterviewInfoStructOutput;
        physicalInfo: SpermBank.PhysicalInfoStructOutput;
        isRegistered: boolean;
      }
    ],
    "view"
  >;

  getAllDonors: TypedContractMethod<
    [],
    [SpermBank.DonorStructOutput[]],
    "view"
  >;

  getDonationHistory: TypedContractMethod<
    [],
    [SpermBank.DonationStructOutput[]],
    "view"
  >;

  getDonorInfo: TypedContractMethod<
    [_donorAddress: AddressLike],
    [SpermBank.DonorStructOutput],
    "view"
  >;

  getReceiverByDonorAddress: TypedContractMethod<
    [_donorAddress: AddressLike],
    [SpermBank.ReceiverStructOutput[]],
    "view"
  >;

  getReceiverHistory: TypedContractMethod<
    [],
    [SpermBank.ReceiverStructOutput[]],
    "view"
  >;

  receivers: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint] & {
        receiverAddress: string;
        donorAddress: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;

  registerDonor: TypedContractMethod<
    [
      _bloodInfo: SpermBank.BloodInfoStruct,
      _semenTestInfo: SpermBank.SemenTestInfoStruct,
      _interviewInfo: SpermBank.InterviewInfoStruct,
      _physicalInfo: SpermBank.PhysicalInfoStruct
    ],
    [void],
    "nonpayable"
  >;

  spermReceive: TypedContractMethod<
    [_receiver: AddressLike, _donorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "donateSperm"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "donations"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint] & {
        id: bigint;
        donorAddress: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "donorAddresses"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "donors"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        string,
        SpermBank.BloodInfoStructOutput,
        SpermBank.SemenTestInfoStructOutput,
        SpermBank.InterviewInfoStructOutput,
        SpermBank.PhysicalInfoStructOutput,
        boolean
      ] & {
        donorAddress: string;
        bloodInfo: SpermBank.BloodInfoStructOutput;
        semenTestInfo: SpermBank.SemenTestInfoStructOutput;
        interviewInfo: SpermBank.InterviewInfoStructOutput;
        physicalInfo: SpermBank.PhysicalInfoStructOutput;
        isRegistered: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAllDonors"
  ): TypedContractMethod<[], [SpermBank.DonorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getDonationHistory"
  ): TypedContractMethod<[], [SpermBank.DonationStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getDonorInfo"
  ): TypedContractMethod<
    [_donorAddress: AddressLike],
    [SpermBank.DonorStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceiverByDonorAddress"
  ): TypedContractMethod<
    [_donorAddress: AddressLike],
    [SpermBank.ReceiverStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceiverHistory"
  ): TypedContractMethod<[], [SpermBank.ReceiverStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "receivers"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint] & {
        receiverAddress: string;
        donorAddress: string;
        timestamp: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerDonor"
  ): TypedContractMethod<
    [
      _bloodInfo: SpermBank.BloodInfoStruct,
      _semenTestInfo: SpermBank.SemenTestInfoStruct,
      _interviewInfo: SpermBank.InterviewInfoStruct,
      _physicalInfo: SpermBank.PhysicalInfoStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "spermReceive"
  ): TypedContractMethod<
    [_receiver: AddressLike, _donorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DonationReceived"
  ): TypedContractEvent<
    DonationReceivedEvent.InputTuple,
    DonationReceivedEvent.OutputTuple,
    DonationReceivedEvent.OutputObject
  >;
  getEvent(
    key: "DonorRegistered"
  ): TypedContractEvent<
    DonorRegisteredEvent.InputTuple,
    DonorRegisteredEvent.OutputTuple,
    DonorRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "SpermReceived"
  ): TypedContractEvent<
    SpermReceivedEvent.InputTuple,
    SpermReceivedEvent.OutputTuple,
    SpermReceivedEvent.OutputObject
  >;

  filters: {
    "DonationReceived(uint256,address)": TypedContractEvent<
      DonationReceivedEvent.InputTuple,
      DonationReceivedEvent.OutputTuple,
      DonationReceivedEvent.OutputObject
    >;
    DonationReceived: TypedContractEvent<
      DonationReceivedEvent.InputTuple,
      DonationReceivedEvent.OutputTuple,
      DonationReceivedEvent.OutputObject
    >;

    "DonorRegistered(address)": TypedContractEvent<
      DonorRegisteredEvent.InputTuple,
      DonorRegisteredEvent.OutputTuple,
      DonorRegisteredEvent.OutputObject
    >;
    DonorRegistered: TypedContractEvent<
      DonorRegisteredEvent.InputTuple,
      DonorRegisteredEvent.OutputTuple,
      DonorRegisteredEvent.OutputObject
    >;

    "SpermReceived(address,address)": TypedContractEvent<
      SpermReceivedEvent.InputTuple,
      SpermReceivedEvent.OutputTuple,
      SpermReceivedEvent.OutputObject
    >;
    SpermReceived: TypedContractEvent<
      SpermReceivedEvent.InputTuple,
      SpermReceivedEvent.OutputTuple,
      SpermReceivedEvent.OutputObject
    >;
  };
}
