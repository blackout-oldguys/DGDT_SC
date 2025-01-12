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
        uint256 semenVolume; // in microliter
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
        BloodInfo bloodInfo;
        SemenTestInfo semenTestInfo;
        InterviewInfo interviewInfo;
        PhysicalInfo physicalInfo;
        bool isRegistered;
    }

    struct Donation {
        uint256 id; // Unique donation ID
        address donorAddress; // Address of the donor
        uint256 timestamp; // Donation timestamp
    }

    struct Receiver {
        address receiverAddress; // Address of the receiver
        address donorAddress; // Donor address
        uint256 timestamp; // Received timestamp
    }

    mapping(address => Donor) public donors;
    address[] public donorAddresses; // 모든 기부자의 주소를 저장하는 배열
    Donation[] public donations; // 모든 기증 기록
    Receiver[] public receivers; // 모든 수령 기록
    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action.");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    event DonorRegistered(address donorAddress);
    event DonationReceived(uint256 donationId, address donorAddress);
    event SpermReceived(address receiverAddress, address donorAddress);
    function registerDonor(
        BloodInfo memory _bloodInfo,
        SemenTestInfo memory _semenTestInfo,
        InterviewInfo memory _interviewInfo,
        PhysicalInfo memory _physicalInfo
    ) public {
        require(!donors[msg.sender].isRegistered, "Donor already registered.");

        Donor storage donor = donors[msg.sender];
        donor.donorAddress = msg.sender;
        donor.bloodInfo = _bloodInfo;
        donor.semenTestInfo = _semenTestInfo;
        donor.physicalInfo = _physicalInfo;

        // FamilyHistory 복사
        for (uint256 i = 0; i < _interviewInfo.familyHistory.length; i++) {
            donor.interviewInfo.familyHistory.push(
                _interviewInfo.familyHistory[i]
            );
        }

        donor.interviewInfo.medicalHistory = _interviewInfo.medicalHistory;
        donor.interviewInfo.pastHistory = _interviewInfo.pastHistory;
        donor.interviewInfo.geneticDisorders = _interviewInfo.geneticDisorders;

        donor.isRegistered = true;

        donorAddresses.push(msg.sender); // 새 기부자의 주소를 배열에 추가

        emit DonorRegistered(msg.sender);
    }


    function donateSperm() public {
        require(donors[msg.sender].isRegistered, "Donor is not registered.");
        uint256 donationId = donations.length;
        donations.push(
            Donation({ id: donationId, donorAddress: msg.sender, timestamp: block.timestamp })
        );

        emit DonationReceived(donationId, msg.sender);
    }

    function spermReceive(address _receiver, address _donorAddress) public {
        require(_donorAddress != address(0), "Donor address cannot be zero.");
        require(_receiver != address(0), "Receiver address cannot be zero.");

        // 수령 기록 추가
        receivers.push(
            Receiver({
                receiverAddress: _receiver,
                donorAddress: _donorAddress,
                timestamp: block.timestamp
            })
        );

        emit SpermReceived(_receiver, _donorAddress);
    }

    function getDonationHistory() public view returns (Donation[] memory) {
        return donations;
    }

    function getReceiverHistory() public view returns (Receiver[] memory) {
        return receivers;
    }

    function getReceiverByDonorAddress(address _donorAddress)
        public
        view
        returns (Receiver[] memory)
    {
        uint256 count;
        for (uint256 i = 0; i < receivers.length; i++) {
            if (receivers[i].donorAddress == _donorAddress) {
                count++;
            }
        }

        Receiver[] memory result = new Receiver[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < receivers.length; i++) {
            if (receivers[i].donorAddress == _donorAddress) {
                result[index] = receivers[i];
                index++;
            }
        }

        return result;
    }

    function getDonorInfo(address _donorAddress) public view returns (Donor memory) {
        Donor memory donor = donors[_donorAddress];
        require(donor.isRegistered, "Donor not registered.");
        return donor;
    }

    function getAllDonors() public view returns (Donor[] memory) {
        Donor[] memory allDonors = new Donor[](donorAddresses.length);
        for (uint256 i = 0; i < donorAddresses.length; i++) {
            allDonors[i] = donors[donorAddresses[i]];
        }
        return allDonors;
    }
}
