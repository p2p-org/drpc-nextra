import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_newFilter() {
  return (
    <EthereumMethod
      method="eth_newFilter"
      network="ethereum"
      cu={20}
      description={
        "Creates a filter object, based on filter options, to notify when the state changes (logs)."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns a filter id."
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
  --data '{"jsonrpc":"2.0","method":"eth_newFilter","params":[{"fromBlock": "0xe20360", "toBlock": "0xe20411", "address": "0x6b175474e89094c44da98b954eedeac495271d0f","topics": []}],"id":1}'
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_newFilter",
  params: [
    {
      fromBlock: "0xe20360",
      toBlock: "0xe20411",
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      topics: []
    }
  ],
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
  method: "eth_newFilter",
  params: [
    {
      fromBlock: "0xe20360",
      toBlock: "0xe20411",
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      topics: []
    }
  ],
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
		"method":  "eth_newFilter",
		"params": []interface{}{
			map[string]interface{}{
				"fromBlock": "0xe20360",
				"toBlock":   "0xe20411",
				"address":   "0x6b175474e89094c44da98b954eedeac495271d0f",
				"topics":    []interface{}{},
			},
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
    "method": "eth_newFilter",
    "params": [
        {
            "fromBlock": "0xe20360",
            "toBlock": "0xe20411",
            "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "topics": []
        }
    ],
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
        "method": "eth_newFilter",
        "params": [
            {
                "fromBlock": "0xe20360",
                "toBlock": "0xe20411",
                "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "topics": []
            }
        ],
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
    paramName: "blockHash",
    type: "string",
    paramDescription:
      "The block hash to filter logs from. If this parameter is present, then the fromBlock and toBlock parameters are ignored.",
  },
  {
    paramName: "address",
    type: "array_of_strings",
    paramDescription:
      "Contract address or a list of addresses from which logs should originate.",
  },
  {
    paramName: "fromBlock",
    type: "string",
    paramDescription: "String - Either the hex value of a block number OR block tags:",
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
        description: "transactions broadcasted but not yet included in a block",
      },
    ],
  },
  {
    paramName: "toBlock",
    type: "string",
    paramDescription: "Either the hex value of a block number OR block tags:",
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
        description: "transactions broadcasted but not yet included in a block",
      },
    ],
  },
  {
    paramName: "topics",
    type: "array_of_strings",
    paramDescription:
      "Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options.",
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
  },
];

const USE_CASES = [
  "Monitor contract events within specific block range",
  "Filter logs from a particular smart contract",
  "Track specific events for auditing or analytics",
];

const CONSTRAINTS = [
  "Requires valid block range and contract address",
  "Node must support filter creation functionality",
  "Accurate block and address input essential for results",
];
