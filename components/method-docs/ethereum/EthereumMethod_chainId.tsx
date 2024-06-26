import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_chainId() {
  return (
    <EthereumMethod
      method="eth_chainId"
      network="ethereum"
      cu={0}
      description={
        "Returns the current network/chain ID, used to sign replay-protected transaction introduced in EIP-155."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="none"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns integer of the current chain ID."
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
 "method": "eth_chainId"
}
'`,
  },
  {
    language: "js",
    code: () => `const data = {
    id: 1,
    jsonrpc: "2.0",
    method: "eth_chainId"
};

fetch("${DRPC_ENDPOINT_URL}", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
`,
  },
  {
    language: "node",
    code: () => `const data = {
    id: 1,
    jsonrpc: "2.0",
    method: "eth_chainId"
};

fetch("${DRPC_ENDPOINT_URL}", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
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
    "id":      1,
    "jsonrpc": "2.0",
    "method":  "eth_chainId",
  }
  payload, err := json.Marshal(data)
  if err != nil {
    fmt.Println("Error:", err)
    return
  }

  req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  req.Header.Set("Content-Type", "application/json")
  req.Header.Set("Accept", "application/json")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  fmt.Println("Response Status:", resp.Status)
  // Handle response here
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
    "method": "eth_chainId"
}

response = requests.post("${DRPC_ENDPOINT_URL}", headers=headers, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let url = "${DRPC_ENDPOINT_URL}";
    let body = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_chainId"
    });

    let client = reqwest::Client::new();
    let res = client.post(url)
        .header("accept", "application/json")
        .header("content-type", "application/json")
        .body(body.to_string())
        .send()
        .await?;

    let text = res.text().await?;
    let v: Value = serde_json::from_str(&text)?;

    println!("{:?}", v);
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
    type: "string",
    paramDescription: "HEX string representing the current chain/network ID.",
  },
];

const USE_CASES = [
  "Verify chain ID before signing new transactions",
  "Ensure transactions are compatible with the head block",
  "Identify the Ethereum chain for network-specific operations",
];

const CONSTRAINTS = [
  "Chain ID must correspond to current head block",
  "Client must handle missing chain ID with errors",
  "Prefer eth_chainId over net_version for reliability",
];
