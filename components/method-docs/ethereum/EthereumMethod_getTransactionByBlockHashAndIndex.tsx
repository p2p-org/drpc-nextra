import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionByBlockHashAndIndex() {
  return (
    <EthereumMethod
      method="eth_getTransactionByBlockHashAndIndex"
      network="ethereum"
      cu={19}
      description={
        "Returns information about a transaction by block hash and transaction index position."
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
        "A transaction object, or null when no transaction was found."
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
  --data '{"method":"eth_getTransactionByBlockHashAndIndex","params":["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b","0x0"],"id":1,"jsonrpc":"2.0"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getTransactionByBlockHashAndIndex",
  params: ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x0"],
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
  method: "eth_getTransactionByBlockHashAndIndex",
  params: ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x0"],
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
		"method":  "eth_getTransactionByBlockHashAndIndex",
		"params":  []interface{}{"0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x0"},
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
    "method": "eth_getTransactionByBlockHashAndIndex",
    "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x0"],
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
        "method": "eth_getTransactionByBlockHashAndIndex",
        "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x0"],
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
    "blockHash": "0xbf06c77f6ed9a65441795eb8c2ccd694b3fc9b4d1be6066bf7ed52c73c5ec97c",
    "blockNumber": "0xfb6d2d",
    "from": "0x2b94cb7ce403ccc9ca89aea9aa8cddb409e6fb6a",
    "gas": "0x5208",
    "gasPrice": "0x2757a4abf6",
    "maxFeePerGas": "0x314492d449",
    "maxPriorityFeePerGas": "0x59682f00",
    "hash": "0x32b8edb39cd1f9d1299253ceb734539745f9bba284c7c7a2391ac62223192c68",
    "input": "0x",
    "nonce": "0xa2",
    "to": "0x514368a3dfb523dd8e0e049d9b22e20eec96eaf7",
    "transactionIndex": "0x64",
    "value": "0x16423069e486f18",
    "type": "0x2",
    "accessList": [],
    "chainId": "0x1",
    "v": "0x0",
    "r": "0x98695bf77dc2aed3308c913e9a5ac273d1de992f61da7eb7352174b30d9ce2e6",
    "s": "0x186b72d1ee15e3e76a7ed301062a2da3d93b1727135f063d845dca258445fab1",
    "yParity": "0x0"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription: 'The block hash'
  },
  {
    paramName: "index",
    type: "string",
    paramDescription: 'An integer of the transaction index position encoded as a hexadecimal'
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
      "Array of log objects, or an empty array if nothing has changed since last poll.",
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
];

const USE_CASES = [
  "Retrieve specific contract storage value by address",
  "Verify current state of contract storage slots",
  "Audit smart contract storage for data integrity",
];

const CONSTRAINTS = [
  "Requires valid smart contract address input",
  "Needs accurate specific storage slot key",
  "Depends on the latest blockchain state data",
];
