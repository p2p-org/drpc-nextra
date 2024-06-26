import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionByBlockNumberAndIndex() {
  return (
    <EthereumMethod
      method="eth_getTransactionByBlockNumberAndIndex"
      network="ethereum"
      cu={13}
      description={
        "Returns information about a transaction by block number and transaction index position."
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
        "A block object with the following fields, or null when no block was found."
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
  --data '{"method":"eth_getTransactionByBlockNumberAndIndex","params":["0xc5043f", "0x0"],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_getTransactionByBlockNumberAndIndex",
  params: ["0xc5043f", "0x0"],
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
  method: "eth_getTransactionByBlockNumberAndIndex",
  params: ["0xc5043f", "0x0"],
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
		"method":  "eth_getTransactionByBlockNumberAndIndex",
		"params":  []interface{}{"0xc5043f", "0x0"},
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
    "method": "eth_getTransactionByBlockNumberAndIndex",
    "params": ["0xc5043f", "0x0"],
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
        "method": "eth_getTransactionByBlockNumberAndIndex",
        "params": ["0xc5043f", "0x0"],
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
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "array_of_strings",
    paramDescription: "The block number as a string in hexadecimal format or tags:",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "the blockchain's most recent block",
      },
      {
        value: "safe",
        description: "a block validated by the beacon chain",
      },
      {
        value: "finalized",
        description: "a block confirmed by over two-thirds of validators",
      },
      {
        value: "earliest",
        description: "the first or genesis block",
      },
      {
        value: "pending",
        description: "transactions broadcasted but not yet included in a block.",
      },
    ],
  },
  {
    paramName: "index",
    type: "string",
    paramDescription:
      "An integer of the transaction index position encoded as a hexadecimal.",
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
    type: "array_of_objects",
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
        paramName: "maxFeePerGas",
        type: "string",
        paramDescription:
          "The maximum fee per gas set in the transaction.",
      },
      {
        paramName: "maxPriorityFeePerGas",
        type: "string",
        paramDescription:
            "The maximum priority gas fee set in the transaction.",
      },
      {
        paramName: "input",
        type: "string",
        paramDescription:
          "The data send along with the transaction.",
      },
      {
        paramName: "chainID",
        type: "string",
        paramDescription:
          "The chain id of the transaction, if any.",
      },
      {
        paramName: "v",
        type: "string",
        paramDescription:
          "ECDSA recovery id.",
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
        paramName: "value",
        type: "string",
        paramDescription:
          "Value transferred in Wei.",
      },
      {
        paramName: "type",
        type: "string",
        paramDescription:
          "The transaction type.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve transaction details by block number and index",
  "Verify transaction order within a specific block",
  "Audit transactions for a given block and index",
];

const CONSTRAINTS = [
  "Requires valid block number and index",
  "Node must be synchronized with the blockchain",
  "Accurate input parameters are necessary for results",
];
