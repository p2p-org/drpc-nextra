import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getTransactionCount() {
  return (
    <EthereumMethod
      method="eth_getTransactionCount"
      network="ethereum"
      cu={11}
      description={
        "Returns the number of transactions sent from an address."
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
        "The integer of the number of transactions sent from an address encoded as hexadecimal."
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
  --data '{"method":"eth_getTransactionCount","params":["0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"],"id":1,"jsonrpc":"2.0"}'
 '
 `,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getTransactionCount",
  params: [
    "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
    "latest"
  ],
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
  method: "eth_getTransactionCount",
  params: [
    "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
    "latest"
  ],
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
		"method":  "eth_getTransactionCount",
		"params":  []interface{}{"0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"},
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
    "method": "eth_getTransactionCount",
    "params": [
        "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
        "latest"
    ],
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
        "method": "eth_getTransactionCount",
        "params": [
            "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
            "latest"
        ],
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
  "result": "0x31"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "The address from which the transaction count to be checked",
    },
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "Either the hex value of a block number OR a block hash OR One of the following block tag:",
    paramEnum: [
      {
        value: "latest",
        isDefault: true,
        description: "the blockchain's most recent block",
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
  }
];

const USE_CASES = [
  "Retrieve total transactions count from specific address",
  "Verify account activity by counting transactions",
  "Audit the number of sent transactions",
];

const CONSTRAINTS = [
  "Requires valid Ethereum address input",
  "Node synchronization with blockchain required.",
  "Depends on the latest blockchain state.",
];
