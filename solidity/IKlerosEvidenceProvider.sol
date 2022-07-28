// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15; 

interface IKlerosEvidenceProvider { 

    function getLockers() view external returns (address[] memory _lockers);

    function getLocker(address _owner) view external returns (address _locker);

    function getLocker() view external returns (address _locker);

    function createLocker() external returns (address _locker);
}