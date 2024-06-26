import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_estimateGas() {
  return (
    <EthereumMethod
      method="eth_getEstimateGas"
      network="ethereum"
      cu={60}
      description={
        "Generates an estimate of the gas needed for a transaction without adding it to the blockchain."
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
        "Returns the amount of gas used."
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
  "method": "eth_estimateGas",
  "params": [
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    },
    {
      "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
      "gas": "0x0",
      "gasPrice": "0x9184e72a000",
      "value": "0x0",
      "data": "0x"
    }
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `
const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_estimateGas",
  params: [
    {
      from: "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
      to: "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
      value: "0x186a0"
    }
  ],
  id: 1,
  jsonrpc: "2.0"
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
  method: "eth_estimateGas",
  params: [
    {
      from: "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
      to: "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
      value: "0x186a0"
    }
  ],
  id: 1,
  jsonrpc: "2.0"
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
		"method": "eth_estimateGas",
		"params": []interface{}{
			map[string]interface{}{
				"from":  "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
				"to":    "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
				"value": "0x186a0",
			},
		},
		"id":      1,
		"jsonrpc": "2.0",
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
    "method": "eth_estimateGas",
    "params": [
        {
            "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
            "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
            "value": "0x186a0"
        }
    ],
    "id": 1,
    "jsonrpc": "2.0"
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
        "method": "eth_estimateGas",
        "params": [
            {
                "from": "0x8D97689C9818892B700e27F316cc3E41e17fBeb9",
                "to": "0xd3CdA913deB6f67967B99D67aCDFa1712C293601",
                "value": "0x186a0"
            }
        ],
        "id": 1,
        "jsonrpc": "2.0"
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
  "result": "0xb1770efb14906e509893b6190359658208ae64d0c56e22f748a1b0869885559e"
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "transaction",
    type: "object",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "from",
        type: "string",
        paramDescription:
          "The address from which the transaction is sent.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription:
          "The address to which the transaction is addressed.",
      },
      {
        paramName: "gas",
        type: "integer",
        paramDescription: "The integer of gas provided for the transaction execution",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription: "The integer of gasPrice used for each paid gas (hexadecimal)",
      },
      {
        paramName: "value",
        type: "integer",
        paramDescription:
          "The integer of value sent with this transaction (hexadecimal)",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "The hash of the method signature and encoded parameters.",
      },
    ],
  },
  {
    paramName: "object",
    type: "object",
    paramDescription: "The state override set with address-to-state mapping where each address maps to an object containing",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "balance",
        type: "string",
        paramDescription:
          "Fake balance to set for the account before executing the call.",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "Fake nonce to set for the account before executing the call.",
      },
      {
        paramName: "code",
        type: "integer",
        paramDescription: "Fake EVM bytecode to inject into the account",
      },
      {
        paramName: "stateDiff",
        type: "string",
        paramDescription: "Fake key-value mapping to override all slots in the account storage",
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
    type: "string",
    paramDescription:
        "Returns the amount of gas used.",
  },
];

const USE_CASES = [
  "Estimate the gas needed for a transaction",
  "Plan transactions to use optimal gas amounts",
  "Optimize gas usage",
];

const CONSTRAINTS = [
  'Requires valid Ethereum addresses',
  'Estimates vary with network conditions',
  'Calculation depends on the node\'s processing speed',
];
