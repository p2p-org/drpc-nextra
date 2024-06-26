import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_subscribe() {
  return (
    <EthereumMethod
      method="eth_subscribe"
      network="ethereum"
      cu={10}
      description={
        "Subscribe to different Ethereum event types like newHeads, logs, pendingTransactions, and minedTransactions using WebSockets."
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
        "Returns the hex encoded subscription ID. "
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `// initiate websocket stream first
wscat -c wss://eth.drpc.org.org

// no param specification - return all mined txs  
{"jsonrpc":"2.0","id": 2, "method": "eth_subscribe", "params": ["alchemy_minedTransactions"]}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "eth_subscribe",
  params: ["newHeads"],
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
  method: "eth_subscribe",
  params: ["newHeads"],
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
		"method":  "eth_subscribe",
		"params":  []interface{}{"newHeads"},
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
    "method": "eth_subscribe",
    "params": ["newHeads"],
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
        "method": "eth_subscribe",
        "params": ["newHeads"],
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
  "result": "0x1234567890abcdef1234567890abcdef"
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "subscription_name",
    type: "string",
    paramDescription:
      "The type of event you want to subscribe. This method supports the following subscription types:",
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "newHeads",
          type: "string",
          paramDescription:
            "It fires a notification each time a new header is appended to the chain, including chain reorganizations.",
        },
        {
          paramName: "logs",
          type: "string",
          paramDescription:
            "It returns logs that are included in new imported blocks and match the given filter criteria.",
        },
        {
          paramName: "newPendingTransactions",
          type: "string",
          paramDescription:
            "It returns the hash for all transactions that are added to the pending state and are signed with a key that is available in the node.",
        },
    ]
  },

  {
    paramName: "flag",
    type: "boolean",
    paramDescription: "If true, method will return the full transaction data, otherwise only the transaction hash",
  },
  {
    paramName: "data",
    type: "object",
    paramDescription: "The arguments such as an address, multiple addresses, and topics.",
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
  },
];

const USE_CASES = [
  "Subscribe to new block headers for monitoring",
  "Track blockchain head changes in real-time",
  "Receive updates when new blocks are mined",
];

const CONSTRAINTS = [
  "Requires continuous WebSocket connection to Ethereum node",
  "Node must support eth_subscribe method",
  "Subscription management needed to handle multiple events",
];
