import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_filter() {
  return (
    <EthereumMethod
      method="trace_filter"
      network="ethereum"
      cu={75}
      description={
        "Returns traces matching given filter."
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
        "The block traces, which have the following fields (please note that all return types are hexadecimal representations of their data type unless otherwise stated):"
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
  --data '{"method":"trace_filter","params":[{"fromBlock":"0xccb943","toBlock":"0xccb943","fromAddress":["0xEdC763b3e418cD14767b3Be02b667619a6374076"]}],"id":1,"jsonrpc":"2.0"}'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_filter",
  params: [{
    fromBlock: "0xccb943",
    toBlock: "0xccb943",
    fromAddress: ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
  }],
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
  method: "trace_filter",
  params: [{
    fromBlock: "0xccb943",
    toBlock: "0xccb943",
    fromAddress: ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
  }],
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
		"method":  "trace_filter",
		"params": []interface{}{
			map[string]interface{}{
				"fromBlock":   "0xccb943",
				"toBlock":     "0xccb943",
				"fromAddress": []string{"0xEdC763b3e418cD14767b3Be02b667619a6374076"},
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
    "method": "trace_filter",
    "params": [{
        "fromBlock": "0xccb943",
        "toBlock": "0xccb943",
        "fromAddress": ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
    }],
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
        "method": "trace_filter",
        "params": [{
            "fromBlock": "0xccb943",
            "toBlock": "0xccb943",
            "fromAddress": ["0xEdC763b3e418cD14767b3Be02b667619a6374076"]
        }],
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
  "result": [
    {
      "action": {
        "callType": "call",
        "from": "0xEdC763b3e418cD14767b3Be02b667619a6374076",
        "gas": "0x15f90",
        "input": "0x",
        "to": "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
        "value": "0x0"
      },
      "blockHash": "0x5c0b4b4d3a64311a802cd51e0dd0f656b5d4016a2cf2f3d780e8b1cfe1b6ac2e",
      "blockNumber": 13498499,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 1,
      "type": "call"
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "fromBlock",
    type: "string",
    paramDescription: 'The Quantity or Tag from this block',
  },
  {
    paramName: "toBlock",
    type: "string",
    paramDescription: 'The Quantity or Tag to this block'
  },
  {
    paramName: "fromAddress",
    type: "string",
    paramDescription: 'An array addresses of the senders'
  },
  {
    paramName: "toAddress",
    type: "string",
    paramDescription: 'An array addresses of the receivers'
  },
  {
    paramName: "after",
    type: "string",
    paramDescription: 'The offset trace number'
  },
  {
    paramName: "count",
    type: "string",
    paramDescription: 'The Quantity or Tag to this block'
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
  "Filter traces for transactions from specific addresses",
  "Analyze smart contract interactions in a block range",
  "Debug specific account activities within block intervals",
];

const CONSTRAINTS = [
  "Requires valid block range and address parameters",
  "Node must support the trace_filter method",
  "Accurate results depend on node's data completeness",
];
