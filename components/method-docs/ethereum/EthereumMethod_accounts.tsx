import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_accounts() {
  return (
    <EthereumMethod
      method="eth_accounts"
      network="ethereum"
      cu={0}
      description={"Returns a list of addresses owned by client."}
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
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
    code: () => `curl --request POST \\
    --url ${DRPC_ENDPOINT_URL} \\
    --header 'accept: application/json' \\
    --header 'content-type: application/json' \\
    --data '
{
 "id": 1,
 "jsonrpc": "2.0",
 "method": "eth_accounts"
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
    method: 'eth_accounts'
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
    method: 'eth_accounts'
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
        "method":  "eth_accounts",
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

headers = {
  'accept': 'application/json',
  'content-type': 'application/json'
}

data = {
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "address": [
        "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
      ],
      "fromBlock": "0x429d3b",
      "toBlock": "latest",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ]
    }
  ]
}

response = requests.post("${DRPC_ENDPOINT_URL}", headers=headers, json=data)
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
        "method": "eth_accounts"
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
    "result": []
}`;

const REQUEST_PARAMS: RequestParamProp = null;

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
    type: "array_of_strings",
    paramDescription: "An array of addresses owned by the client",
  },
];

const USE_CASES = [
  "Retrieve a list of managed Ethereum accounts",
  "Verify available accounts on the connected node",
  "Populate account dropdown menus",
];

const CONSTRAINTS = [
  "Requires node with account management capability",
  "Risk of exposing addresses",
  "Depends on node's current account configuration",
];
