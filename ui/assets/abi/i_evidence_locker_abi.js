iEvidenceLockerAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_submitter",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shortDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_searchTerms",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_tagNames",
				"type": "string[]"
			}
		],
		"name": "addEvidence",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_searchTerm",
				"type": "string"
			}
		],
		"name": "findEvidence",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "sumbitter",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "presenterAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDesciption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "searchTerms",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "dateAdded",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "lastActionBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastActionDate",
						"type": "uint256"
					}
				],
				"internalType": "struct IEvidenceDescriptor.Evidence1497[]",
				"name": "_evidence",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_tag",
				"type": "string"
			}
		],
		"name": "findEvidenceByTag",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "sumbitter",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "presenterAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDesciption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "searchTerms",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "dateAdded",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "lastActionBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastActionDate",
						"type": "uint256"
					}
				],
				"internalType": "struct IEvidenceDescriptor.Evidence1497[]",
				"name": "_evidence",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailableEvidence",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "sumbitter",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "presenterAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDesciption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "searchTerms",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "dateAdded",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "lastActionBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastActionDate",
						"type": "uint256"
					}
				],
				"internalType": "struct IEvidenceDescriptor.Evidence1497[]",
				"name": "_evidence",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"name": "getDisputes",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_metaEvidenceIds",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDisputes",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_metaEvidenceIds",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_metaEvidenceId",
				"type": "uint256"
			}
		],
		"name": "getEvidence",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "sumbitter",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "presenterAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDesciption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "searchTerms",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "dateAdded",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "lastActionBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastActionDate",
						"type": "uint256"
					}
				],
				"internalType": "struct IEvidenceDescriptor.Evidence1497[]",
				"name": "_evidence",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEvidenceAuditLog",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_evidenceId",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "_title",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_status",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "lastActionedBy",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_actionDate",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"name": "getEvidenceById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "sumbitter",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "presenterAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDesciption",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "searchTerms",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "dateAdded",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "lastActionBy",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "lastActionDate",
						"type": "uint256"
					}
				],
				"internalType": "struct IEvidenceDescriptor.Evidence1497",
				"name": "_evidence",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_arbitrable",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_metaEvidenceId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_party",
				"type": "string"
			},
			{
				"internalType": "uint256[]",
				"name": "_evidence",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_ipfsAuditKey",
				"type": "string"
			}
		],
		"name": "submitToDispute",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_submissionId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_tags",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"name": "tagEvidence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_tagged",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]