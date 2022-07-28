// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15; 

interface IEvidenceDescriptor  {

    struct Evidence1497 { 
        uint256 id;         
        string sumbitter;
        address presenterAddress;  // address that presented this evidence
        string title; 
        string shortDesciption; 
        string content; 
        string [] searchTerms; 
        uint256 dateAdded; 
        string status; 
        address lastActionBy;
        uint256 lastActionDate;
    }

    struct Tag { 
        uint256 id; 
        string name; 
        address creator; 
        uint256 tagCreateDate; 
    }

    struct E1497Submission { 
        uint256 id; 
        uint256 metaEvidenceId;
        string party; 
        uint256 [] evidenceIds; 
        string ipfsAuditKey; 
    }

}