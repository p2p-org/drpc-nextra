import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_replayTransactionsvmTrace() {
  return (
    <EthereumMethod
      method="trace_replayTransactionsvmTrace"
      network="ethereum"
      cu={300}
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
        "Returning the traces."
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
  "method": "trace_replayTransaction",
  "params": [
    "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
    ["vmTrace"]
  ]
}'

`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "trace_replayTransaction",
  params: [
    "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
    ["vmTrace"]
  ],
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
  method: "trace_replayTransaction",
  params: [
    "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
    ["vmTrace"]
  ],
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
		"method":  "trace_replayTransaction",
		"params":  []interface{}{"0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f", []string{"vmTrace"}},
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
    "method": "trace_replayTransaction",
    "params": [
        "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
        ["vmTrace"]
    ],
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

async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${DRPC_ENDPOINT_URL}";

    let data = json!({
        "jsonrpc": "2.0",
        "method": "trace_replayTransaction",
        "params": [
            "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
            ["vmTrace"]
        ],
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
  "result": {
    "output": "0x",
    "stateDiff": null,
    "trace": [
      {
        "action": {
          "callType": "call",
          "from": "0x5cb2045c43d14a5f5e5f1ea60c5b02e0a93032cf",
          "gas": "0x76c0",
          "input": "0x",
          "to": "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e",
          "value": "0x186a0"
        },
        "blockHash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
        "blockNumber": 1234567,
        "result": {
          "gasUsed": "0x5208",
          "output": "0x"
        },
        "subtraces": 0,
        "traceAddress": [],
        "transactionHash": "0x02d4a872e096445e80d05276ee756cefef7f3b376bcec14246469c0cd97dad8f",
        "transactionPosition": 0,
        "type": "call"
      }
      // Additional trace objects can be included here
    ],
    "vmTrace": {
      "code": "0x...",
      "ops": [
        {
          "cost": 3,
          "ex": {
            "mem": null,
            "push": ["0x60"],
            "store": null,
            "used": 3
          },
          "pc": 0,
          "sub": null
        }
        // Additional VM trace operations can be included here
      ]
    }
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transactionHash",
    type: "string",
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
      {
        paramName: "vmTrace",
        type: "string",
        paramDescription:
          "The virtual machine trace.",
        childrenParamsType: "object",
        childrenParams: [
            {
              paramName: "code",
              type: "string",
              paramDescription:
                "The EVM code executed.",
            },
          {
            paramName: "ops",
            type: "array",
            paramDescription: "An array of operation objects representing the steps executed by the EVM.",
            childrenParamsType: "object",
            childrenParams: [
              {
                paramName: "cost",
                type: "number",
                paramDescription:
                    "The gas cost of the operation.",
              },
              {
                paramName: "ex",
                type: "object",
                childrenParamsType: "object",
                childrenParams: [
                  {
                    paramName: "mem",
                    type: "object",
                    paramDescription:
                        "The memory state.",
                  },
                  {
                    paramName: "push",
                    type: "array",
                    paramDescription:
                        "The items pushed onto the stack.",
                  },
                  {
                    paramName: "store",
                    type: "object",
                    paramDescription:
                        "The storage state.",
                  },
                  {
                    paramName: "used",
                    type: "number",
                    paramDescription:
                        "The gas used up to this point.",
                  },
                ],
              },
              {
                paramName: "pc",
                type: "number",
                paramDescription:
                    "The program counter.",
              },
              {
                paramName: "sub",
                type: "object",
                paramDescription:
                    "Sub-trace if the operation calls another contract.",
              },
            ],
          },
    ],
  },
  ],
  },
];

const USE_CASES = [
  "Analyze EVM execution path of a specific transaction",
  "Debug complex smart contract interactions within transactions",
  "Inspect gas usage and performance of single transaction",
];

const CONSTRAINTS = [
  "Requires valid transaction hash as input",
  "High computational load for complex transactions",
  "Detailed traces can result in large data responses",
];
