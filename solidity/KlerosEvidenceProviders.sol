// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15; 

import "./IKlerosEvidenceProvider.sol";
import "./EvidenceLocker.sol";

contract KlerosEvidenceProvider is IKlerosEvidenceProvider{

    address administrator; 
    address [] lockers; 

    mapping(address=>bool) hasLocker; 
    mapping(address=>address) lockerAddressByOwner; 

    constructor(address _admin) {
        administrator = _admin; 
    }

    function getLockers() view external returns (address[] memory _lockers){
        return lockers; 
    }

    function getLocker(address _owner) view external returns (address _locker){
        return lockerAddressByOwner[_owner];
    }

    function getLocker() view external returns (address _locker){
        return lockerAddressByOwner[msg.sender];
    }

    function createLocker() external returns (address _locker){
        if(!hasLocker[msg.sender]) {
            EvidenceLocker locker_ = new EvidenceLocker(msg.sender);
            _locker = address(locker_);
            lockers.push(_locker);
            lockerAddressByOwner[msg.sender] = _locker;
        }
    }

}