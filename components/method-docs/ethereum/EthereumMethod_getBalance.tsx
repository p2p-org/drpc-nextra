import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBalance() {
  return (
    <EthereumMethod
      method="eth_getBalance"
      network="ethereum"
      cu={11}
      description={"Returns the balance of the account of a given address."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="object"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
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
 "params": [
   "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
   "latest"
 ],
 "method": "eth_getBalance"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [
        '0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8',
        'latest'
    ]
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const fetch = require('node-fetch');

const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBalance',
    params: [
        '0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8',
        'latest'
    ]
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
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
    headers := map[string]string{
        "Accept":       "application/json",
        "Content-Type": "application/json",
    }

    data := map[string]interface{}{
        "id":      1,
        "jsonrpc": "2.0",
        "method":  "eth_getBalance",
        "params":  []interface{}{"0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8", "latest"},
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
        fmt.Println(err)
        return
    }

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println(err)
        return
    }

    for key, value := range headers {
        req.Header.Set(key, value)
    }

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
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

url = '${DRPC_ENDPOINT_URL}'
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": [
        "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
        "latest"
    ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let url = "${DRPC_ENDPOINT_URL}";
    let client = Client::new();

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBalance",
        "params": [
            "0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
            "latest"
        ]
    });

    let response = client.post(url)
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;

    let response_json: serde_json::Value = response.json().await?;
    println!("{:#?}", response_json);

    Ok(())
}   
`,
  },
];

const RESPONSE_JSON = `{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
  }`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription: "Address to check for balance.",
  },
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "The block number or block hash to search up to",
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
    type: "string",
    paramDescription:
      "The ETH balance of the specified address in hexadecimal value, measured in wei.",
  },
];

const USE_CASES = [
  "Check account balance before sending a transaction",
  "Verify wallet balance for automated payments processing",
  "Monitor account balance changes for security alerts",
];

const CONSTRAINTS = [
  "Requires a valid Ethereum account address",
  "Node must be synchronized with the latest state",
  "Network latency may delay balance retrieval",
];
