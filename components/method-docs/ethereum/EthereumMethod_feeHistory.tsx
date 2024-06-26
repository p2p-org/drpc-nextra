import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_feeHistory() {
  return (
    <EthereumMethod
      method="eth_feeHistory"
      network="ethereum"
      cu={15}
      description={
        "Returns a list of addresses owned by client."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="array"
      responseParamsDescription={
        ""
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
  "method": "eth_feeHistory",
  "params": [
    4,
    4,
    4
  ]
}`,
  },
  {
    language: "js",
    code: () => `const url = ${DRPC_ENDPOINT_URL};

const data = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_feeHistory',
  params: [
    '0x5', // Replace with your block count
    'latest',
    []
  ]
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
    code: () => `const https = require('https');

const data = JSON.stringify({
  id: 1,
  jsonrpc: "2.0",
  method: "eth_feeHistory",
  params: [4, 4, 4]
});

const options = {
  hostname: '${DRPC_ENDPOINT_URL}',
  path: '/v2/docs-demo',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let responseBody = '';
  
  res.on('data', chunk => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(responseBody));
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
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
  "io/ioutil"
)

func main() {
  url := "${DRPC_ENDPOINT_URL}"
  jsonData := map[string]interface{}{
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_feeHistory",
    "params": []interface{}{4, 4, 4},
  }
  
  jsonValue, _ := json.Marshal(jsonData)
  request, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonValue))
  if err != nil {
    fmt.Println(err)
    return
  }
  request.Header.Set("Accept", "application/json")
  request.Header.Set("Content-Type", "application/json")
  
  client := &http.Client{}
  response, err := client.Do(request)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer response.Body.Close()
  
  body, _ := ioutil.ReadAll(response.Body)
  fmt.Println(string(body))
}
`,
  },
  {
    language: "python",
    code: () => `import requests
import json

url = "${DRPC_ENDPOINT_URL}"

headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

payload = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_feeHistory",
    "params": [4, 4, 4]
}

response = requests.post(url, headers=headers, data=json.dumps(payload))

print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::blocking::Client;
use serde_json::json;
use std::error::Error;

fn main() -> Result<(), Box<dyn Error>> {
    let client = Client::new();
    let url = "${DRPC_ENDPOINT_URL}";

    let request_body = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_feeHistory",
        "params": [4, 4, 4]
    });

    let response = client
        .post(url)
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&request_body)
        .send()?;

    let response_text = response.text()?;
    println!("{}", response_text);

    Ok(())
}
}
    
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "oldestBlock": "0x130b1e6",
    "reward": [
      [
        "0x5041e1e",
        "0xdd221b80"
      ],
      [
        "0x5041e1e",
        "0xb8346df0"
      ],
      [
        "0x55d4a80",
        "0xb2d05e00"
      ],
      [
        "0x4dd9818",
        "0x3b9aca00"
      ]
    ],
    "baseFeePerGas": [
      "0x52d80a82c",
      "0x50f43f659",
      "0x50012de8d",
      "0x4e30357d6",
      "0x57efff9e7"
    ],
    "gasUsedRatio": [
      0.40875283333333334,
      0.45308523333333334,
      0.4091907,
      0.9987537
    ],
    "baseFeePerBlobGas": [
      "0x1",
      "0x1",
      "0x1",
      "0x1",
      "0x1"
    ],
    "blobGasUsedRatio": [
      0.5,
      1,
      0.6666666666666666,
      1
    ]
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
    {
    paramName: "blockCount",
    type: "integer",
  },
   {
    paramName: "newestBlock",
    type: "string",
  },
  {
    paramName: "rewardPercentiles",
    type: "array_of_integers",
    paramDescription: "optional",
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
    type: "array_of_strings",
    paramDescription: "An array of addresses owned by the client.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "oldestBlock",
        type: "int64",
        paramDescription: "An array of block base fees per gas."
      },
    {
        paramName: "gasUsedRatio",
        type: "array_of_numbers",
        paramDescription: "An array representing the ratios of block gas used. "
      },
    {
        paramName: "reward",
        type: "array_of_arrays_of_strings",
        paramDescription: "A two-dimensional array showing the effective priority fees per gas at the specified block percentiles. "
      },
    {
        paramName: "baseFeePerBlobGas",
        type: "array_of_strings",
        paramDescription: "An array of base fees per blob gas for blocks. "
      },
    {
        paramName: "blobGasUsedRatio",
        type: "array_of_numbers",
        paramDescription: "An array showing the ratios of blob gas used in blocks."
      },
    ]
  },
];

const USE_CASES = [
  "Retrieve gas price history",
  "DApp Authentication: Verify user's Ethereum addresses",
  "Account Selection UI: Populate account dropdown menus",
];

const CONSTRAINTS = [
  "Requires access to historical block data",
  "High computational load for large data ranges",
  "Accuracy depends on node synchronization state",
];
