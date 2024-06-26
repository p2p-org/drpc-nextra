import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByHashfull() {
  return (
    <EthereumMethod
      method="eth_getBlockByHashfull"
      network="ethereum"
      cu={60}
      description={
        "Returns information about a block by block hash."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns a block object with the following fields, or null when no block was found."
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL} \\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_getBlockByHash",
  "params": [
    true,
    true
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getBlockByHash",
  params: [true, true],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getBlockByHash",
  params: [true, true],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(res => console.log(res))
  .catch(error => console.error('Error:', error));
`,
  },
  {
    language: "go",
    code: () => `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "${DRPC_ENDPOINT_URL}"

	data := map[string]interface{}{
		"jsonrpc": "2.0",
		"method":  "eth_getBlockByHash",
		"params":  []interface{}{true, true},
		"id":      1,
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)

	fmt.Println(result)
}
`,
  },
  {
    language: "python",
    code: () => `import requests
import json

url = '${DRPC_ENDPOINT_URL}'

data = {
    "jsonrpc": "2.0",
    "method": "eth_getBlockByHash",
    "params": [true, true],
    "id": 1
}

response = requests.post(url, headers={'Content-Type': 'application/json'}, data=json.dumps(data))
res = response.json()

print(res)
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL}";

    let data = json!({
        "jsonrpc": "2.0",
        "method": "eth_getBlockByHash",
        "params": [true, true],
        "id": 1
    });

    let client = Client::new();
    let res = client.post(url)
        .json(&data)
        .send()
        .await?
        .json::<serde_json::Value>()
        .await?;

    println!("{:#?}", res);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x65746865726d696e652d6575312d32",
    "gasLimit": "0x47e7c4",
    "gasUsed": "0x6384",
    "hash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
    "logsBloom": "0x0",
    "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
    "mixHash": "0x75b1f48901cf1d37ad43c2b29eafeb1f3ae5cf5c5d55b1b3be6b2be4a25d6ec6",
    "nonce": "0x539bd4979b50162d",
    "number": "0x1b4",
    "parentHash": "0x8e3d7ea52a14b9d773c37d67e2a4b8e6a12573c3d60a1cd1a58455d3008d1c9d",
    "receiptsRoot": "0xbcdfc35b86bedf72e283106f1f9a03c8d99a6de2b1cba6b01ff3e78e924e05c8",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad0d4e8eeb004cfe8dec7d1f3469a7f5f",
    "size": "0x220",
    "stateRoot": "0x7d00dcd0e0d14e6f7d9dc57116d0e5f76b0abdc716a1d7e6b4df87eae7795b7a",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [
      {
        "blockHash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
        "blockNumber": "0x1b4",
        "from": "0x5cb2045c43d14a5f5e5f1ea60c5b02e0a93032cf",
        "gas": "0x7d3c",
        "gasPrice": "0xba43b7400",
        "hash": "0x1a85165ac88f73b7a290104f614cf08d8b4f3e193f41f209c3716d9c237139f5",
        "input": "0x",
        "nonce": "0x15",
        "to": "0x3535353535353535353535353535353535353535",
        "transactionIndex": "0x0",
        "value": "0x1bc16d674ec80000",
        "v": "0x1c",
        "r": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2",
        "s": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2"
      }
      // Additional transaction objects can be included here
    ],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "hash",
    type: "string",
    paramDescription:
      "The hash (32 bytes) of the block.",
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription:
      "It returns the full transaction objects when it is true otherwise it returns only the hashes of the transactions.",
  },
];

const RESPONSE_PARAMS: ResponseParam[] = [
  {
    paramName: "id",
    type: "integer",
  },
  {
    paramName: "jsonrpc",
    type: "string",
  },
  {
    paramName: "result",
    type: "object",
    paramDescription:
      "A block object with the following fields, or null when no block was found.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "8 Bytes - hash of the generated proof-of-work. null when its pending block.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block. null when its pending block.",
      },
      {
        paramName: "baseFeePerGas",
        type: "string",
        paramDescription:
          "the base fee, in wei, that is charged for each unit of gas used, during the execution of the given block, encoded as a hexadecimal.",
      },
      {
        paramName: "number",
        type: "string",
        paramDescription: "the block number. null when its pending block.",
      },
      {
        paramName: "parentHash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the parent block.",
      },
      {
        paramName: "sha3Uncles",
        type: "string",
        paramDescription:
          "32 Bytes - SHA3 of the uncles data in the block.",
      },
      {
        paramName: "logsBloom",
        type: "string",
        paramDescription:
          "256 Bytes - the bloom filter for the logs of the block. null when its pending block.",
      },
      {
        paramName: "transactionsRoot",
        type: "string",
        paramDescription:
          "32 Bytes - the root of the transaction trie of the block.",
      },
      {
        paramName: "stateRoot",
        type: "string",
        paramDescription:
          "32 Bytes - the root of the final state trie of the block.",
      },
      {
        paramName: "receiptsRoot",
        type: "string",
        paramDescription:
          "32 Bytes - the root of the receipts trie of the block.",
      },
      {
        paramName: "miner",
        type: "string",
        paramDescription:
          "20 Bytes - the address of the beneficiary to whom the mining rewards were given.",
      },
      {
        paramName: "difficulty",
        type: "string",
        paramDescription:
          "Integer of the difficulty for this block.",
      },
      {
        paramName: "totalDifficulty",
        type: "string",
        paramDescription:
          "Integer of the total difficulty of the chain until this block.",
      },
      {
        paramName: "extraData",
        type: "string",
        paramDescription:
          "The \"extra data\" field of this block.",
      },
      {
        paramName: "size",
        type: "string",
        paramDescription:
          "Integer the size of this block in bytes.",
      },
      {
        paramName: "gasLimit",
        type: "string",
        paramDescription:
          "The maximum gas allowed in this block.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription:
          "The total used gas by all transactions in this block.",
      },
      {
        paramName: "timestamp",
        type: "string",
        paramDescription:
          "The unix timestamp for when the block was collated.",
      },
      {
      paramName: "transactions",
      paramDescription:
        "An array of transaction objects - please see eth_getTransactionByHash for exact shape",
      type: "array",
      childrenParamsType: "object",
      childrenParams: [
        {
          paramName: "blockHash",
          type: "string",
          paramDescription:
            "The number of the block where the given transaction was included.",
        },
        {
          paramName: "blockNumber",
          type: "string",
          paramDescription:
            "The block number where this log was in. null when its pending. null when its pending log.",
        },
        {
          paramName: "transactionIndex",
          type: "string",
          paramDescription:
            "Integer of the transactions index position log was created from. null when its pending log.",
        },
        {
          paramName: "nonce",
          type: "string",
          paramDescription: "The number of transactions made by the sender prior to this one.",
        },
        {
          paramName: "hash",
          type: "string",
          paramDescription:
            "32 Bytes - hash of the transaction.",
        },
        {
          paramName: "from",
          type: "string",
          paramDescription:
            "20 Bytes - address of the sender.",
        },
        {
          paramName: "gas",
          type: "string",
          paramDescription:
            "Gas provided by the sender.",
        },
        {
          paramName: "gasPrice",
          type: "string",
          paramDescription:
            "Gas price provided by the sender in Wei.",
        },
        {
          paramName: "input",
          type: "string",
          paramDescription:
            "The data send along with the transaction.",
        },
        {
          paramName: "r",
          type: "string",
          paramDescription:
            "ECDSA signature r.",
        },
        {
          paramName: "s",
          type: "string",
          paramDescription:
            "ECDSA signature r.",
        },
        {
          paramName: "to",
          type: "string",
          paramDescription:
            "20 Bytes - address of the receiver. null when it's a contract creation transaction.",
        },
        {
          paramName: "v",
          type: "string",
          paramDescription:
            "ECDSA recovery id.",
        },
        {
          paramName: "value",
          type: "string",
          paramDescription:
            "Value transferred in Wei.",
        },
     ],
      },
      {
        paramName: "uncles",
        type: "array_of_strings",
        paramDescription:
          "Array of uncle hashes.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve full block details using block hash",
  "Get transactions and metadata for a specific block",
  "Analyze block data for blockchain synchronization checks",
];

const CONSTRAINTS = [
  "Requires valid block hash as input parameter",
  "Full transaction data increases response size significantly",
  "Node must be fully synchronized with the blockchain",
];
