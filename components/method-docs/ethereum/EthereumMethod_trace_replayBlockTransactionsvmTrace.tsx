import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_trace_replayBlockTransactionsvmTrace() {
  return (
    <EthereumMethod
      method="trace_replayBlockTransactions#vmTrace"
      network="ethereum"
      cu={300}
      description={
        "Replays all transactions in a block returning the requested traces for each transaction."
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
  params: ["0x5BAD55FB00000000000000000000000000000000000000000000000000000000", ["vmTrace"]],
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
  params: ["0x5BAD55FB00000000000000000000000000000000000000000000000000000000", ["vmTrace"]],
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
		"params":  []interface{}{"0x5BAD55FB00000000000000000000000000000000000000000000000000000000", []string{"vmTrace"}},
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
    "params": ["0x5BAD55FB00000000000000000000000000000000000000000000000000000000", ["vmTrace"]],
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
        "params": ["0x5BAD55FB00000000000000000000000000000000000000000000000000000000", ["vmTrace"]],
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
        ]
      }
    }
  ]
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
  {
    paramName: "vmTrace",
    type: "string",
    paramDescription: 'To get a full trace of the virtual machine\'s state during the execution of the given of given transaction, including for any subcalls.'
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
  "Analyze EVM execution for a block of transactions",
  "Debug contract interactions within an entire block",
  "Inspect gas usage and execution paths in block",
];

const CONSTRAINTS = [
  "High computational resources for detailed VM tracing",
  "Requires access to a fully synchronized node",
  "Large response size for blocks with many transactions",
];
