import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionReceipt() {
  return (
    <EthereumMethod
      method="eth_getTransactionReceipt"
      network="ethereum"
      cu={30}
      description={
        "Returns the receipt of a transaction by transaction hash."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_strings"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "A transaction receipt object, or null when no receipt was found."
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl ${DRPC_ENDPOINT_URL} \\
  -X POST \\
  -H "Content-Type: application/json" \\
  --data '{"method":"eth_getTransactionReceipt","params":["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getTransactionReceipt",
  params: ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
  id: 1,
  jsonrpc: "2.0"
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
  method: "eth_getTransactionReceipt",
  params: ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
  id: 1,
  jsonrpc: "2.0"
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
		"method":  "eth_getTransactionReceipt",
		"params":  []interface{}{"0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"},
		"id":      1,
		"jsonrpc": "2.0",
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
    "method": "eth_getTransactionReceipt",
    "params": ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
    "id": 1,
    "jsonrpc": "2.0"
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
        "method": "eth_getTransactionReceipt",
        "params": ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
        "id": 1,
        "jsonrpc": "2.0"
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
    "transactionHash": "0x8fc90a6c3ee3001cdcbbb685b4fbe67b1fa2bec575b15b0395fea5540d0901ae",
    "blockHash": "0x58a945e1558810523df00490ff28cbe111b37851c44679ce5be1eeaebb4b4907",
    "blockNumber": "0xeb8822",
    "logsBloom": "0x00000000000100000000008000000000000000000000000000000000000000000010000000000000001000000000000000000000000000000000000000000000000000000000000008008008000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000010000000000000000000000000000000000000000000000000010002000000000000000400000000000400200001000000000000000000000000040000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000",
    "gasUsed": "0x1a14b",
    "contractAddress": null,
    "cumulativeGasUsed": "0x76c649",
    "transactionIndex": "0x4e",
    "from": "0x5067c042e35881843f2b31dfc2db1f4f272ef48c",
    "to": "0x3ee18b2214aff97000d974cf647e7c347e8fa585",
    "type": "0x0",
    "effectiveGasPrice": "0x2d7003407",
    "logs": [
      {
        "blockHash": "0x58a945e1558810523df00490ff28cbe111b37851c44679ce5be1eeaebb4b4907",
        "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "logIndex": "0x6c",
        "data": "0x000000000000000000000000000000000000000000000000000000001debea42",
        "removed": false,
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000005067c042e35881843f2b31dfc2db1f4f272ef48c",
          "0x0000000000000000000000003ee18b2214aff97000d974cf647e7c347e8fa585"
        ],
        "blockNumber": "0xeb8822",
        "transactionIndex": "0x4e",
        "transactionHash": "0x8fc90a6c3ee3001cdcbbb685b4fbe67b1fa2bec575b15b0395fea5540d0901ae"
      },
      {
        "blockHash": "0x58a945e1558810523df00490ff28cbe111b37851c44679ce5be1eeaebb4b4907",
        "address": "0x98f3c9e6e3face36baad05fe09d375ef1464288b",
        "logIndex": "0x6d",
        "data": "0x000000000000000000000000000000000000000000000000000000000001371e000000000000000000000000000000000000000000000000000000006eca00000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000000000000000000000000008501000000000000000000000000000000000000000000000000000000001debea42000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000267c46aa713cfe47608dd1c16f8a0325208df084c3cbebf9f366ad0eafc2653e4000100000000000000000000000000000000000000000000000000000000001e8542000000000000000000000000000000000000000000000000000000",
        "removed": false,
        "topics": [
          "0x6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b2",
          "0x0000000000000000000000003ee18b2214aff97000d974cf647e7c347e8fa585"
        ],
        "blockNumber": "0xeb8822",
        "transactionIndex": "0x4e",
        "transactionHash": "0x8fc90a6c3ee3001cdcbbb685b4fbe67b1fa2bec575b15b0395fea5540d0901ae"
      }
    ],
    "status": "0x1"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "hash",
    type: "string",
    paramDescription:
      "The hash of a transaction.",
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
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "32 Bytes - The hash of the block where the given transaction was included.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "The number of the block where the given transaction was included.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "The index of the transaction within the block.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription: "32 Bytes - hash of the transaction",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription:
          "I20 Bytes - address of the sender.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription:
          "20 Bytes - address of the receiver. null when its a contract creation transaction.",
      },
      {
        paramName: "cumulativeGasUsed",
        type: "string",
        paramDescription:
          "The total amount of gas used when this transaction was executed in the block.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription:
          "The amount of gas used by this specific transaction alone.",
      },
      {
        paramName: "contractAddress",
        type: "string",
        paramDescription:
          "20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null",
      },
      {
        paramName: "logs",
        type: "array_of_objects",
        paramDescription:
            "Array of log objects, which this transaction generated.",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "blockHash",
            type: "string",
            paramDescription:
                "32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log",
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
            paramName: "address",
            type: "string",
            paramDescription: "20 Bytes - address from which this log originated.",
          },
          {
            paramName: "logIndex",
            type: "string",
            paramDescription:
                "Integer of the log index position in the block. null when its pending log.",
          },
          {
            paramName: "data",
            type: "string",
            paramDescription:
                "Contains one or more 32 Bytes non-indexed arguments of the log.",
          },
          {
            paramName: "removed",
            type: "boolean",
            paramDescription:
                "true when the log was removed, due to a chain reorganization. false if its a valid log.",
          },
          {
            paramName: "topics",
            type: "array_of_strings",
            paramDescription:
                "Array of zero to four 32 Bytes DATA of indexed log arguments. In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declare the event with the anonymous specifier.",
          },
          {
            paramName: "transactionHash",
            type: "string",
            paramDescription:
                "Hash of the transactions this log was created from. null when its pending log.",
          },
          {
            paramName: "logsBloom",
            type: "string",
            paramDescription:
                "256 Bytes - Bloom filter for light clients to quickly retrieve related logs.",
          },
          {
            paramName: "status",
            type: "integer",
            paramDescription:
                "Either 1 (success) or 0 (failure)",
          },
          {
            paramName: "effectiveGasPrice",
            type: "string",
          },
          {
            paramName: "type",
            type: "string",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve general information about a transaction's details",
  "Track transaction status effectively",
  "Obtain contract address from contract creation transaction",
];

const CONSTRAINTS = [
  "Requires valid transaction hash input",
  "Returns null for pending or unknown transactions",
  "Dependent on node synchronization with the blockchain",
];
