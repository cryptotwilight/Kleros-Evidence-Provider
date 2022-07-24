iEvidenceLockerAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_sumbitter",
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
				"name": "searchTerms",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_tags",
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
						"name": "party",
						"type": "string"
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
						"name": "submissionDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct IEvidenceLocker.Evidence[]",
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
						"name": "party",
						"type": "string"
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
						"name": "submissionDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct IEvidenceLocker.Evidence[]",
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
				"name": "_status",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "lastActionedBy",
				"type": "address[]"
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
						"name": "party",
						"type": "string"
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
						"name": "submissionDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					}
				],
				"internalType": "struct IEvidenceLocker.Evidence",
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
				"internalType": "uint256",
				"name": "_evidenceId",
				"type": "uint256"
			}
		],
		"name": "removeEvidence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_removed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
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