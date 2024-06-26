import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_block() {
  return (
    <EthereumMethod
      method="trace_block"
      network="ethereum"
      cu={90}
      description={
        "Returns traces created at given block."
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
        "Returns the array of Block traces"
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
  "method": "trace_block",
  "params": [
    "latest"
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_block",
  params: ["latest"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
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
  method: "trace_block",
  params: ["latest"],
  id: 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
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
		"method":  "trace_block",
		"params":  []interface{}{"latest"},
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
    "method": "trace_block",
    "params": ["latest"],
    "id": 1
}

response = requests.post(url, headers={'accept': 'application/json', 'content-type': 'application/json'}, data=json.dumps(data))
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
        "method": "trace_block",
        "params": ["latest"],
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
        "from": "0xaa7b131dc60b80d3cf5e59b5a21a666aa039c951",
        "gas": "0x0",
        "input": "0x",
        "to": "0xd40aba8166a212d6892125f079c33e6f5ca19814",
        "value": "0x4768d7effc3fbe"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x07da28d752aba3b9dd7060005e554719c6205c8a3aea358599fc9b245c52f1f6",
      "transactionPosition": 0,
      "type": "call"
    },
    {
      "action": {
        "callType": "call",
        "from": "0x4f11ba23bb526c0486d83c6a8f18f632f3fc172a",
        "gas": "0x0",
        "input": "0x",
        "to": "0x7ed1e469fcb3ee19c0366d829e291451be638e59",
        "value": "0x446cde325fbfbe"
      },
      "blockHash": "0x7eb25504e4c202cf3d62fd585d3e238f592c780cca82dacb2ed3cb5b38883add",
      "blockNumber": 3068185,
      "result": {
        "gasUsed": "0x0",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x056f11efb5da4ff7cf8523cfcef08393e5dd2ff3ab3223e4324426d285d7ae92",
      "transactionPosition": 1,
      "type": "call"
    },
    {
      "...": null
    }
  ],
  "id": 0
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "array_of_strings",
    paramDescription: "The block number or block hash to search up to",
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
  "Analyze internal transactions for the latest block",
  "Trace smart contract executions in the newest block",
  "Investigate transaction behavior within the most recent block",
];

const CONSTRAINTS = [
  "Requires access to the latest block data",
  "Node must support the trace_block method",
  "AHigh computational cost for tracing recent blocks",
];
