import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_unsubscribe() {
  return (
    <EthereumMethod
      method="eth_unsubscribe"
      network="ethereum"
      cu={10}
      description={
        "Cancels an existing subscription so that no further events are sent."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="string"
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
    code: () => `wscat -c wss://eth.drpc.org \\ 
# wait for connection 
{"id":1,"jsonrpc":"2.0","method":"eth_unsubscribe","params":["0xe9549ac54eeec07f"]}
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_unsubscribe",
  params: ["0x9cef478923ff08bf67fde6c64013158d"]
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
  id: 1,
  method: "eth_unsubscribe",
  params: ["0x9cef478923ff08bf67fde6c64013158d"]
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
		"id":      1,
		"method":  "eth_unsubscribe",
		"params":  []interface{}{"0x9cef478923ff08bf67fde6c64013158d"},
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
    "id": 1,
    "method": "eth_unsubscribe",
    "params": ["0x9cef478923ff08bf67fde6c64013158d"]
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
        "id": 1,
        "method": "eth_unsubscribe",
        "params": ["0x9cef478923ff08bf67fde6c64013158d"]
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
    "jsonrpc":"2.0",
    "id":1,
    "result":true
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "subscription_id",
    type: "string",
    paramDescription:
      "A subscription ID that was previously generated in a eth_subscribe RPC request.",
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
    type: "boolean",
    paramDescription:
      "A boolean value indicating if the subscription was canceled successfully.",
  },
];

const USE_CASES = [
  "Stop receiving updates for specific blockchain events",
  "Unsubscribe from new block notifications",
  "Cancel pending transaction monitoring subscription",
];

const CONSTRAINTS = [
  "Requires valid subscription ID for unsubscription",
  "Node must support the eth_unsubscribe method",
  "Continuous connection needed until unsubscription confirmation",
];
