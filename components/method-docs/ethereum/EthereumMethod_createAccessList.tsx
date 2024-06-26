import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_createAccessList() {
  return (
    <EthereumMethod
      method="eth_createAccessList"
      network="ethereum"
      cu={30}
      description={
        ". Returns list of addresses and storage keys that are read and written by the transaction (except the sender account and precompiles), plus the estimated gas consumed when the access list is added."
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
        ""
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
--data '{
	"method":"eth_getBlockByHash",
	"params":["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3",false],
	"id":1,
	"jsonrpc":"2.0"
}'
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getBlockByHash",
  params: ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", false],
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
  params: ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", false],
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
		"params": []interface{}{
			"0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3",
			false,
		},
		"id": 1,
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
    "params": ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", false],
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
        "params": ["0x3f07a9c83155594c000642e7d60e8a8a00038d03e9849171a05ed0e2d47acbb3", false],
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
  "id": 0,
  "jsonrpc": "string",
  "result": {
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0x5b3c3f3f5cbf12c9c9d79b97c52b8f26a89e55e1"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "The block number in hexadecimal format or the string latest, earliest, pending, safe or finalized.",
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription:
      "The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions.",
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
        "A block object, or null when no block was found. The block object contains the following fields:",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "accessList",
        type: "array_of_objects",
        paramDescription: "List of objects containing addresses and storage keys",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "address",
            type: "string",
            paramDescription: "Address read or written by the transaction",
          },
          {
            paramName: "storageKeys",
            type: "string",
            paramDescription: "List of storage keys used by the transaction",
          },
        ],
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription:
            "Estimated gas consumed when the access list is added. ",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve specific block details using block hash",
  "Verify block transactions and metadata by hash",
  "Analyze block data for blockchain consistency checks",
];

const CONSTRAINTS = [
  "Requires valid block hash input",
  "Node must be synchronized with blockchain",
  "Accurate hash essential for correct block details",
];
