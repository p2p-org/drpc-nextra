import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_rawTransaction() {
  return (
    <EthereumMethod
      method="trace_rawTransaction"
      network="ethereum"
      cu={75}
      description={
        "Traces a call to eth_sendRawTransaction without making the call, returning the traces."
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
  --data '{"method":"trace_rawTransaction","params":["RAW_TRANSACTION_DATA",["trace"]],"id":1,"jsonrpc":"2.0"}' `,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_rawTransaction",
  params: ["RAW_TRANSACTION_DATA", ["trace"]],
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
  method: "trace_rawTransaction",
  params: ["RAW_TRANSACTION_DATA", ["trace"]],
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
		"method":  "trace_rawTransaction",
		"params":  []interface{}{"RAW_TRANSACTION_DATA", []string{"trace"}},
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
    "method": "trace_rawTransaction",
    "params": ["RAW_TRANSACTION_DATA", ["trace"]],
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
        "method": "trace_rawTransaction",
        "params": ["RAW_TRANSACTION_DATA", ["trace"]],
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
        "gas": "0x76c0",
        "input": "0x",
        "to": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        "value": "0x0"
      },
      "blockHash": "0x1e3b87c5ea233b9d8c19ad7d7beaf0fa8dd3d74157b1441a13f8a18e176a11db",
      "blockNumber": 13328707,
      "result": {
        "gasUsed": "0x5208",
        "output": "0x"
      },
      "subtraces": 0,
      "traceAddress": [],
      "transactionHash": "0x17104ac9d3312d8c136b7f44d4b8b47852618065ebfa534bd2d3b5ef218ca1f3",
      "transactionPosition": 0,
      "type": "call"
    }
    // Additional traces can be included here
  ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "data",
    type: "string",
    paramDescription: 'The raw transaction data/string (RAW_TRANSACTION_DATA)',
  },
  {
    paramName: "array",
    type: "array",
    paramDescription: 'The type of trace, which can be one of the following:',
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "vmTrace",
          type: "string",
          paramDescription: 'To get a full trace of the virtual machine\'s state during the execution of the given of given transaction, including for any subcalls.'
        },
        {
          paramName: "traceType",
          type: "string",
          paramDescription: 'Type of trace, one or more of: "trace", "stateDiff".'
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
        paramName: "output",
        type: "string",
        paramDescription:
            "The data which is returned as an output encoded in hexadecimal format.",
      },
      {
        paramName: "stateDiff",
        type: "string",
        paramDescription:
            "It returns the information on altered Ethereum state due to execution of the given transaction.",
      },
      {
        paramName: "trace",
        type: "object",
        paramDescription: "It is used to retrieve the basic trace of the given information",
        childrenParamsType: "object",
        childrenParams: [
          {
            paramName: "action",
            type: "string",
            paramDescription:
                "The action to be performed on the receiver id.",
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
            ],
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
            ],
          },
          {
            paramName: "subtraces",
            type: "string",
            paramDescription:
                "The traces of contract calls made by the transaction.",
          },
          {
            paramName: "traceAddress",
            type: "string",
            paramDescription:
                "The list of addresses where the call was executed, the address of the parents, and the order of the current sub call",
          },
          {
            paramName: "type",
            type: "string",
            paramDescription:
                "The type of trace.",
          },
          {
            paramName: "vmTrace",
            type: "string",
            paramDescription:
                "It is used to get a full trace of the virtual machine's state during the execution of the given transaction, including for any sub-calls.",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Validate the execution paths of smart contracts within a given transaction.",
  "Analyze the detailed gas usage of a transaction",
  "Investigate the root causes of transaction",
];

const CONSTRAINTS = [
  "Invalid or corrupted transaction data will result in errors",
  "Not all nodes may have tracing capabilities enabled",
  "The types of traces must be specified correctly in the request.",
];
