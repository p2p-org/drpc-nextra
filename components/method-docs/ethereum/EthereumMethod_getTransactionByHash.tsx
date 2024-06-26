import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionByHash() {
  return (
    <EthereumMethod
      method="eth_getTransactionByHash"
      network="ethereum"
      cu={11}
      description={
        "Returns the information about a transaction requested by transaction hash."
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
  --data '{"method":"eth_getTransactionByHash","params":["0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"],"id":1,"jsonrpc":"2.0"}'
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getTransactionByHash",
  params: ["0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"],
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
  method: "eth_getTransactionByHash",
  params: ["0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"],
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
		"method":  "eth_getTransactionByHash",
		"params":  []interface{}{"0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"},
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
    "method": "eth_getTransactionByHash",
    "params": ["0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"],
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
        "method": "eth_getTransactionByHash",
        "params": ["0xb1fac2cb5074a4eda8296faebe3b5a3c10b48947dd9a738b2fdf859be0e1fbaf"],
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
    "blockHash": "0x1d59ff54b1eb26b013ce3cb5fc9dab3705b415a67127a003c3e61eb445bb8df2",
    "blockNumber": "0x5daf3b",
    "hash": "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b",
    "input": "0x68656c6c6f21",
    "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
    "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c",
    "v": "0x25",
    "gas": "0xc350",
    "from": "0xa7d9ddbe1f17865597fbd27ec712455208b6b76d",
    "transactionIndex": "0x41",
    "to": "0xf02c1c8e6114b1dbe8937a39260b5b0a374432bb",
    "type": "0x0",
    "value": "0xf3dbb76162000",
    "nonce": "0x15",
    "gasPrice": "0x4a817c800"
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
  "Retrieve transaction details using transaction hash",
  "Verify transaction status and details by hash",
  "Audit transaction data for specific hash",
];

const CONSTRAINTS = [
  "Requires valid transaction hash input",
  "Node must be synchronized with blockchain",
  "Depends on latest blockchain data availability",
];
