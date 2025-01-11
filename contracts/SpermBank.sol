// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpermBank {
    struct BloodInfo {
        string bloodType;
        bool hav;
        bool hbv;
        bool hcv;
        bool venerealDisease;
    }

    struct SemenTestInfo {
        uint256 semenVolume; // in milliliters
        uint256 spermCount;  // per milliliter
        string spermMotility;
        string spermShape;
    }

    struct MedicalHistory {
        bool mentalRetardation;
        bool mentalIllness;
        bool epilepsy;
        string[] otherConditions;
    }

    struct PastHistory {
        bool drugUse;
        string[] otherConditions;
    }

    struct FamilyHistory {
        string relation;
        string condition;
    }

    struct InterviewInfo {
        MedicalHistory medicalHistory;
        PastHistory pastHistory;
        string[] geneticDisorders;
        FamilyHistory[] familyHistory;
    }

    struct PhysicalInfo {
        uint256 height; // in centimeters
        uint256 weight; // in kilograms
        string bodyType;
        string ethnicity;
        string personality;
        string education;
        string religion;
    }

    struct Donor {
        address donorAddress;
        string name;
        uint256 age;
        BloodInfo bloodInfo;
        SemenTestInfo semenTestInfo;
        InterviewInfo interviewInfo;
        PhysicalInfo physicalInfo;
        bool isRegistered;
    }

    mapping(address => Donor) public donors;
    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    event DonorRegistered(address donorAddress, string name);

    function registerDonor(
    string memory _name,
    uint256 _age,
    BloodInfo memory _bloodInfo,
    SemenTestInfo memory _semenTestInfo,
    InterviewInfo memory _interviewInfo,
    PhysicalInfo memory _physicalInfo
) public {
    require(!donors[msg.sender].isRegistered, "Donor already registered.");
    require(_age >= 18, "Donor must be at least 18 years old.");

    Donor storage donor = donors[msg.sender];
    donor.donorAddress = msg.sender;
    donor.name = _name;
    donor.age = _age;
    donor.bloodInfo = _bloodInfo;
    donor.semenTestInfo = _semenTestInfo;
    donor.physicalInfo = _physicalInfo;

    // FamilyHistory 복사
    for (uint256 i = 0; i < _interviewInfo.familyHistory.length; i++) {
        donor.interviewInfo.familyHistory.push(_interviewInfo.familyHistory[i]);
    }

    donor.interviewInfo.medicalHistory = _interviewInfo.medicalHistory;
    donor.interviewInfo.pastHistory = _interviewInfo.pastHistory;
    donor.interviewInfo.geneticDisorders = _interviewInfo.geneticDisorders;

    donor.isRegistered = true;

    emit DonorRegistered(msg.sender, _name);
}


    function getDonorInfo(address _donorAddress)
        public
        view
        onlyAdmin
        returns (Donor memory)
    {
        Donor memory donor = donors[_donorAddress];
        require(donor.isRegistered, "Donor not registered.");
        return donor;
    }
}
