// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15; 

import "./IEvidenceDescriptor.sol";

interface IEvidenceLocker is IEvidenceDescriptor {

    function getOwner() view external returns (address _owner);

    function getDisputes() view external returns (uint256 [] memory _metaEvidenceIds);

    function getAvailableEvidence() view external returns (Evidence1497 [] memory _evidence);

    function getDisputes(uint256 _evidenceId) view external returns (uint256 [] memory _metaEvidenceIds); 

    function findEvidence(string memory _searchTerm) view external returns (Evidence1497 [] memory _evidence);

    function getEvidence(uint256 _metaEvidenceId) view external returns (Evidence1497 [] memory _evidence);

    function findEvidenceByTag(string memory _tag) view external returns (Evidence1497 [] memory _evidence);

    function getEvidenceById(uint256 _evidenceId) view external returns (Evidence1497 memory _evidence);    

    function tagEvidence(string [] memory _tags, uint256 _evidenceId) external returns (bool _tagged);

    function submitToDispute(address _arbitrable, uint256 _metaEvidenceId, string memory _party, 
                                uint256 [] memory _evidence, string memory _ipfsAuditKey) external returns (uint256 _submissionId);


    function addEvidence(string memory _submitter, 
                        string memory _title, 
                        string memory _shortDescription,
                        string memory _ipfsHash, 
                        string [] memory _searchTerms, 
                        string [] memory _tagNames) external returns (uint256 _evidenceId);


    function getEvidenceAuditLog() view external returns (uint256 [] memory _evidenceId, 
                                                            string[] memory _title, 
                                                            string[]  memory _status, 
                                                            address[]  memory lastActionedBy, 
                                                            uint256 [] memory _actionDate);    
}