// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15; 

import "https://github.com/kleros/tcr/blob/b84ae1c1df653d89b2af58f01e1f63a00f1373ab/contracts/LightGeneralizedTCR.sol";

import "./IEvidenceLocker.sol";
import "./IEvidenceDescriptor.sol";

contract EvidenceLocker is IEvidenceLocker { 

    address owner; 

    uint256 index; 

    uint256 [] metaEvidenceIds; 
    uint256 [] evidenceIds; 

    mapping(string=>bool) knownTag; 
    mapping(string=>uint256) idByTag; 
    mapping(uint256=>Tag) tagById; 
    

    mapping(string=>uint256[]) evidenceIdsByTagName;     
    mapping(string=>uint256[]) evidenceIdsBySearchTerm; 

    mapping(uint256=>uint256[]) tagIdsByEvidenceId; 

    mapping(uint256=>Evidence1497) evidenceById; 
    mapping(uint256=>bool) knownEvidenceId; 

    mapping(uint256=>uint256[]) disputesByEvidenceId; 
    mapping(uint256=>uint256[]) evidenceIdsByDispute;

    uint256 [] submissionIds; 
    mapping(uint256=>E1497Submission) submissionById; 
    

    constructor(address _owner) {
        owner = _owner; 
    }

    function getOwner() view external returns (address _owner){
        return owner; 
    }

    function getDisputes() view external returns (uint256 [] memory _metaEvidenceIds){
        return metaEvidenceIds;
    }

    function getAvailableEvidence() view external returns (Evidence1497 [] memory _evidence){
        _evidence = new Evidence1497[](evidenceIds.length);
        for(uint256 x = 0; x < evidenceIds.length; x++){
            _evidence[x] = evidenceById[evidenceIds[x]];
        }
        return _evidence; 
    }

    function getDisputes(uint256 _evidenceId) view external returns (uint256 [] memory _metaEvidenceId) {
        return disputesByEvidenceId[_evidenceId];
    }

    function getEvidence(uint256 _metaEvidenceId) view external returns (Evidence1497 [] memory _evidence) {
        return resolveIds(evidenceIdsByDispute[_metaEvidenceId]);
    }

    function findEvidence(string memory _searchTerm) view external returns (Evidence1497 [] memory _evidence){
        return resolveIds(evidenceIdsBySearchTerm[_searchTerm]);
    }

    function findEvidenceByTag(string memory _tag) view external returns (Evidence1497 [] memory _evidence){        
        return resolveIds(evidenceIdsByTagName[_tag]);
    }

    function getEvidenceById(uint256 _evidenceId) view external returns (Evidence1497 memory _evidence) { 
        return evidenceById[_evidenceId];
    }   

    function tagEvidence(string [] memory _tags, uint256 _evidenceId) external returns (bool _tagged){
        require(knownEvidenceId[_evidenceId], " unknown evidence id ");
        for(uint256 x = 0; x < _tags.length; x++) {
            evidenceIdsByTagName[_tags[x]].push(_evidenceId);
        }
        return true; 
    }

    function submitToDispute(address _lgtcrAddress, uint256 _metaEvidenceId, string memory _party, uint256 [] memory _evidence, string memory _ipfsAuditKey) external returns (uint256 _submissionId){
        _submissionId = getIndex();
        metaEvidenceIds.push(_metaEvidenceId) ;
        LightGeneralizedTCR lgtcr = LightGeneralizedTCR(_lgtcrAddress);

        Evidence1497 [] memory evidence_ = new Evidence1497[](_evidence.length);
        for(uint256 x = 0; x < _evidence.length; x++) {
            uint256 id_ = _evidence[x];
            Evidence1497 memory e_ = evidenceById[id_];
            evidence_[x] = e_;
            disputesByEvidenceId[id_].push(_metaEvidenceId); 
            evidenceIdsByDispute[_metaEvidenceId].push(id_);
            lgtcr.submitEvidence(bytes32(_metaEvidenceId), e_.content);
        }
        

        E1497Submission memory submission_ = E1497Submission({ 
                                                                id              : _submissionId,
                                                                metaEvidenceId  : _metaEvidenceId,
                                                                party           : _party, 
                                                                evidenceIds     : _evidence,
                                                                ipfsAuditKey    : _ipfsAuditKey 
                                                            });
        submissionById[_submissionId] = submission_;
        submissionIds.push(_submissionId);
        
        return _submissionId; 
    }

    function addEvidence(string memory _submitter,                         
                        string memory _title, 
                        string memory _shortDescription,
                        string memory _ipfsHash, 
                        string [] memory _searchTerms, 
                        string [] memory _tagNames) external returns (uint256 _evidenceId){
        _evidenceId = getIndex(); 
        evidenceIds.push(_evidenceId);
        evidenceById[_evidenceId] = Evidence1497({                                            
                                                id : _evidenceId,  
                                                sumbitter : _submitter,
                                                presenterAddress : msg.sender,   // address that presented this evidence
                                                title : _title, 
                                                shortDesciption : _shortDescription, 
                                                content : _ipfsHash, 
                                                searchTerms : _searchTerms, 
                                                dateAdded : block.timestamp, 
                                                status : "PRESENTED",
                                                lastActionBy : msg.sender,
                                                lastActionDate : block.timestamp
                                            });
        knownEvidenceId[_evidenceId] = true; 
        uint256 length_ = _tagNames.length; 
        if(_searchTerms.length > _tagNames.length) {
            length_ = _searchTerms.length; 
        }
        for(uint256 x = 0; x < length_; x++) {
           evidenceIdsBySearchTerm[_searchTerms[x]].push(_evidenceId);
           if(_tagNames.length > x){
               string memory tagName_ = _tagNames[x];
               Tag memory tag_; 
               if(!knownTag[tagName_]){
                    tag_ = Tag({
                                id : getIndex(),
                                name : tagName_, 
                                creator : msg.sender,
                                tagCreateDate : block.timestamp
                            });
                    tagById[tag_.id] = tag_;                    
                    idByTag[tag_.name] = tag_.id; 
                    knownTag[tag_.name] = true; 
               }
               else { 
                   tag_ = tagById[idByTag[tagName_]];
               }
               evidenceIdsByTagName[tag_.name].push(_evidenceId);  
               tagIdsByEvidenceId[_evidenceId].push(tag_.id);
           }
        }
    }

    function getEvidenceAuditLog()view external returns (uint256 [] memory _evidenceId, 
                                                        string [] memory _title, 
                                                        string[]  memory _status, 
                                                        address []  memory _lastActionedBy, 
                                                        uint256 [] memory _actionDate){
        _title = new string[](evidenceIds.length);
        _status = new string[](evidenceIds.length);
        _lastActionedBy = new address [](evidenceIds.length);
        _actionDate = new uint256[](evidenceIds.length);    

        for(uint256 x = 0; x < evidenceIds.length; x++) {
            Evidence1497 memory evidence_ = evidenceById[evidenceIds[x]];
            _title[x] = evidence_.title; 
            _status[x] = evidence_.status; 
            _lastActionedBy[x] = evidence_.lastActionBy;
            _actionDate[x] = evidence_.lastActionDate;        
        }

        return (evidenceIds, _title, _status, _lastActionedBy, _actionDate);
    }

    //============================================ INTERNAL ==================================================

    function updateLastAction(uint256 _evidenceId, string memory _status) internal { 
        Evidence1497 storage evidence_ = evidenceById[_evidenceId];
        evidence_.status = _status; 
        evidence_.lastActionBy =  msg.sender; 
        evidence_.lastActionDate = block.timestamp; 
    }

    function resolveIds(uint256 [] memory _ids) view internal returns (Evidence1497 [] memory _evidence){
        _evidence = new Evidence1497[](_ids.length); 
        for(uint256 x = 0; x < _ids.length; x++) {
            _evidence[x] = evidenceById[_ids[x]];
        }
        return _evidence; 
    }    

    function getIndex() internal returns (uint256 _index){
        _index = index; 
        index++;
        return _index; 
    }

}