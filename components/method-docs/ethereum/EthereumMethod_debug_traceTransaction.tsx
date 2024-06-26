import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceTransaction() {
  return (
    <EthereumMethod
      method="debug_traceTransaction"
      network="ethereum"
      cu={90}
      description={
        "Attempts to run the transaction in the exact same manner as it was executed on the network."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Array of block traces."
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
--data '{"method":"debug_traceTransaction","params":["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", {"tracer": "callTracer"}], "id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
  method: "debug_traceTransaction",
  params: ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { tracer: "callTracer" }],
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
		"method":  "debug_traceTransaction",
		"params":  []interface{}{"0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", map[string]string{"tracer": "callTracer"}},
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
    "method": "debug_traceTransaction",
    "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
        "method": "debug_traceTransaction",
        "params": ["0x9e63085271890a141297039b3b711913699f1ee4db1acb667ad7ce304772036b", { "tracer": "callTracer" }],
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
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0x83806d539d4ea1c140489a06660319c9a303f874",
        "gas": "0x1a1f8",
        "input": "0x",
        "to": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "value": "0x7a16c911b4d00000"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x2982",
        "output": "0x"
      },
      "subtraces": 2,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "gas": "0x13e99",
        "input": "0x16c72721",
        "to": "0x2bd2326c993dfaef84f696526064ff22eba5b362",
        "value": "0x0"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x183",
        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
      },
      "subtraces": 0,
      "traceAddress": [
        0
      ],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x1c39ba39e4735cb65978d4db400ddd70a72dc750",
        "gas": "0x8fc",
        "input": "0x",
        "to": "0x70faa28a6b8d6829a4b1e649d26ec9a2a39ba413",
        "value": "0x7a16c911b4d00000"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [
        1
      ],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 2,
      "type": "call"
    }
  ],
  "id": 0
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: 'This describes the block number to fetch the transaction by.',
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: 'Currently supports callTracer and prestateTracer',
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "tracer",
          type: "string",
          paramDescription: 'Default: callTracer'
        },
        {
          paramName: "tracerConfig",
          type: "object",
          childrenParamsType: "boolean",
          childrenParams: [
              {
                paramName: "onlyTopCall",
                type: "boolean",
              },
          ],
        },
        {
          paramName: "timeout",
          type: "string",
          paramDescription: 'A duration string of decimal numbers that overrides the default timeout of 5 seconds for JavaScript-based tracing calls. Max timeout is "10s". Valid time units are "ns", "us", "ms", "s" each with optional fraction, such as "300ms" or "2s45ms".'
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
    paramDescription: "Is different for callTracer and prestateTracer",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "callTracer",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
            {
              paramName: "from",
              type: "string",
              paramDescription:
                  "The address of the sender.",
            },
            {
              paramName: "to",
              type: "string",
              paramDescription:
                  "The address of the receiver.",
            },
            {
              paramName: "value",
              type: "string",
              paramDescription:
                  "The value transferred in wei.",
            },
            {
              paramName: "gas",
              type: "string",
              paramDescription:
                  "The gas provided for the call.",
            },
            {
              paramName: "input",
              type: "string",
              paramDescription:
                  "The data sent along with the call.",
            },

            {
              paramName: "gasUsed",
              type: "string",
              paramDescription:
                  "The amount of gas used by the trace.",
            },
            {
              paramName: "output",
              type: "string",
              paramDescription:
                  "The output of the call.",
            },
            {
              paramName: "error",
              type: "string",
              paramDescription:
                  "Error, if any",
            },
            {
              paramName: "revertReason",
              type: "string",
              paramDescription:
                  "solidity revert reason, if any",
            },
            {
              paramName: "calls",
              type: "array",
              paramDescription:
                  "list of sub-calls",
              },
            ],
          },
      {
        paramName: "prestateTracer",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
           {
              paramName: "balance",
              type: "string",
              paramDescription:
                  "Balance in wei",
            },
            {
              paramName: "nonce",
              type: "uint64",
            },
            {
              paramName: "code",
              type: "string",
              paramDescription:
                  "Hex-encoded bytecode",
              },
            {
              paramName: "storage",
              type: "map[string]string",
              paramDescription:
                  "Storage slots of the contract",
              },
        ]
      }
        ],
      },
];

const USE_CASES = [
  "Debug detailed execution of a specific transaction",
  "Analyze smart contract interactions within a transaction",
  "Trace internal operations and calls of a transaction",
];

const CONSTRAINTS = [
  "Requires valid transaction hash and tracer parameter",
  "Node must support the debug_traceTransaction method",
  "High resource usage for tracing complex transactions",
];
