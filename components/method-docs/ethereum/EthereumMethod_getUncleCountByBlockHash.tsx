import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getUncleCountByBlockHash() {
  return (
    <EthereumMethod
      method="eth_getUncleCountByBlockHash"
      network="ethereum"
      cu={15}
      description={
        "Returns the number of uncles in a block matching the given block hash."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="string"
      responseParamsDescription={
        "The integer value of the number of uncles in the block encoded as hexadecimal."
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
  --data '{"method":"eth_getUncleCountByBlockHash","params":["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],"id":1,"jsonrpc":"2.0"}'
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getUncleCountByBlockHash",
  params: ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
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
  method: "eth_getUncleCountByBlockHash",
  params: ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
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
		"method":  "eth_getUncleCountByBlockHash",
		"params":  []interface{}{"0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"},
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
    "method": "eth_getUncleCountByBlockHash",
    "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
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
        "method": "eth_getUncleCountByBlockHash",
        "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
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
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "hash",
    type: "string",
    paramDescription: 'The hash of the block to get uncles for.',
  },
];

const RESPONSE_PARAMS: ResponseParam[] = [
  {
    paramName: "uncles",
    type: "string",
    paramDescription: "The integer value of the number of uncles in the block encoded as hexadecimal."
  },
];

const USE_CASES = [
  "Count uncle blocks in a specific block",
  "Verify uncle block count for blockchain analysis",
  "Monitor uncle block occurrences in a given block",
];

const CONSTRAINTS = [
  "Requires valid block hash input",
  "Node must be synchronized with the blockchain",
  "Accurate block hash is essential for results",
];
