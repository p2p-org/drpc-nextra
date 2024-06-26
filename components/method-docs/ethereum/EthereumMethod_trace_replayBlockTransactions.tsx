import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_replayBlockTransactions() {
  return (
    <EthereumMethod
      method="trace_replayBlockTransactions"
      network="ethereum"
      cu={90}
      description={
        "Replays the block that is already present in the database."
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
-d '{"method":"trace_replayBlockTransactions","params":["0x2ed119",["trace"]],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_replayBlockTransactions",
  params: ["0x2ed119", ["trace"]],
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
  method: "trace_replayBlockTransactions",
  params: ["0x2ed119", ["trace"]],
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
		"method":  "trace_replayBlockTransactions",
		"params":  []interface{}{"0x2ed119", []string{"trace"}},
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
    "method": "trace_replayBlockTransactions",
    "params": ["0x2ed119", ["trace"]],
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
        "method": "trace_replayBlockTransactions",
        "params": ["0x2ed119", ["trace"]],
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
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [
      {
        "action": {
          "callType": "call",
          "from": "0x6f1fb6efdf50f34bfa3f2bc0e5576edd71631638",
          "gas": "0x1dcd11f8",
          "input": "0xa67a6a45000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000",
          "to": "0x1e0447b19bb6ecfdae1e4ae1694b0c3659614e4e",
          "value": "0x0"
        },
        "error": "Reverted",
        "subtraces": 0,
        "traceAddress": [],
        "type": "call"
      }
    ],
    "vmTrace": null
  },
  "id": 0
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "toBlock",
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
  {
          paramName: "traceType",
          type: "string",
          paramDescription: 'Type of trace, one or more of: "trace", "stateDiff".'
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
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "action",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
            {
              paramName: "callType",
              type: "string",
              paramDescription:
                "The type of call.",
            },
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
        ]
      },
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "The hash of the block where the trace occurred.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "The number of the block where the trace occurred.",
      },
      {
        paramName: "result",
        type: "string",
        childrenParamsType: "object",
        childrenParams: [
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
        ]
      },
      {
        paramName: "subtraces",
        type: "integer",
        paramDescription: "The number of subtraces created by this trace.",
      },
      {
        paramName: "traceAddress",
        type: "array_of_strings",
        paramDescription:
          "The trace address indicating the position of this trace in the call stack.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription:
          "The hash of the transaction to which this trace belongs.",
      },
      {
        paramName: "transactionPosition",
        type: "string",
        paramDescription:
          "The position of the transaction in the block.",
      },
      {
        paramName: "type",
        type: "string",
        paramDescription:
          "The type of trace.",
      },
    ],
  },
];

const USE_CASES = [
  "Analyze execution trace of raw transactions",
  "Debug smart contract interactions in raw transactions",
  "Investigate gas usage within specific raw transactions",
];

const CONSTRAINTS = [
  "Requires accurate raw transaction encoding",
  "Limited to nodes with tracing enabled",
  "High resource usage for detailed trace analysis",
];
