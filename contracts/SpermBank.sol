// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SpermBank {
    struct Donor {
        address donorAddress;
        string name;
        uint256 age;
        string bloodType;
        string geneticInfoHash;
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
        string memory _bloodType,
        string memory _geneticInfoHash
    ) public {
        require(!donors[msg.sender].isRegistered, "Donor already registered.");
        require(_age >= 18, "Donor must be at least 18 years old.");

        donors[msg.sender] = Donor(
            msg.sender,
            _name,
            _age,
            _bloodType,
            _geneticInfoHash,
            true
        );

        emit DonorRegistered(msg.sender, _name);
    }

    function getDonorInfo(address _donorAddress)
        public
        view
        onlyAdmin
        returns (string memory, uint256, string memory, string memory)
    {
        Donor memory donor = donors[_donorAddress];
        require(donor.isRegistered, "Donor not registered.");
        return (donor.name, donor.age, donor.bloodType, donor.geneticInfoHash);
    }
}
