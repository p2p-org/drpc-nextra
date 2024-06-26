import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getLogs() {
  return (
    <EthereumMethod
      method="eth_getLogs"
      network="ethereum"
      cu={60}
      description={
        "Returns an array of all logs matching a given filter object"
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_objects"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "Returns array of log objects, or an empty array if nothing has changed since last poll."
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
 "method": "eth_getLogs",
 "params": [
   {
     "address": [
       "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
     ],
     "fromBlock": "0x429d3b",
     "toBlock": "latest",
     "topics": [
       "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
       "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
       "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
     ]
   }
 ]
}'`,
  },
  {
    language: "js",
    code: () => `const axios = require('axios');

axios.post("${DRPC_ENDPOINT_URL}", {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getLogs",
  params: [
    {
      address: [
        "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
      ],
      fromBlock: "0x429d3b",
      toBlock: "latest",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ]
    }
  ]
}, {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
`,
  },
  {
    language: "node",
    code: () => `const axios = require('axios');

axios.post("${DRPC_ENDPOINT_URL}", {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getLogs",
  params: [
    {
      address: [
        "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
      ],
      fromBlock: "0x429d3b",
      toBlock: "latest",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ]
    }
  ]
}, {
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
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
    "id":      1,
    "jsonrpc": "2.0",
    "method":  "eth_getLogs",
    "params": []map[string]interface{}{
      {
        "address": []string{
          "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
        },
        "fromBlock": "0x429d3b",
        "toBlock":   "latest",
        "topics": []string{
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
          "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078",
        },
      },
    },
  }
  payload, err := json.Marshal(data)
  if err != nil {
    fmt.Println("Error:", err)
    return
  }

  req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  req.Header.Set("Content-Type", "application/json")
  req.Header.Set("Accept", "application/json")

  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  fmt.Println("Response Status:", resp.Status)
  // Handle response here
}
`,
  },
  {
    language: "python",
    code: () => `import requests

headers = {
  'accept': 'application/json',
  'content-type': 'application/json'
}

data = {
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_getLogs",
  "params": [
    {
      "address": [
        "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
      ],
      "fromBlock": "0x429d3b",
      "toBlock": "latest",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ]
    }
  ]
}

response = requests.post("${DRPC_ENDPOINT_URL}", headers=headers, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest;
use serde_json::{json, Value};

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
  let url = "${DRPC_ENDPOINT_URL}";
  let body = json!({
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getLogs",
    "params": [
      {
        "address": [
          "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907"
        ],
        "fromBlock": "0x429d3b",
        "toBlock": "latest",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
          "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
        ]
      }
    ]
  });

  let client = reqwest::Client::new();
  let res = client.post(url)
    .header("accept", "application/json")
    .header("content-type", "application/json")
    .body(body.to_string())
    .send()
    .await?;

  let text = res.text().await?;
  let v: Value = serde_json::from_str(&text)?;

  println!("{:?}", v);
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
      "address": "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
      "blockHash": "0x8243343df08b9751f5ca0c5f8c9c0460d8a9b6351066fae0acbd4d3e776de8bb",
      "blockNumber": "0x429d3b",
      "data": "0x000000000000000000000000000000000000000000000000000000012a05f200",
      "logIndex": "0x56",
      "removed": false,
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
        "0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078"
      ],
      "transactionHash": "0xab059a62e22e230fe0f56d8555340a29b2e9532360368f810595453f6fdd213b",
      "transactionIndex": "0xac"
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription:
      "The block hash to filter logs from. If this parameter is present, then the fromBlock and toBlock parameters are ignored.",
  },
  {
    paramName: "address",
    type: "string",
    paramDescription:
      "Contract address or a list of addresses from which logs should originate.",
  },
  {
    paramName: "fromBlock",
    type: "string",
  },
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
    paramName: "topics",
    type: "array",
    paramDescription:
      "Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with 'or' options.",
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
    paramDescription:
      "Array of log objects, or an empty array if nothing has changed since last poll.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block where this log was in. null when its pending. null when its pending log",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "The block number where this log was in. null when its pending. null when its pending log.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "Integer of the transactions index position log was created from. null when its pending log.",
      },
      {
        paramName: "address",
        type: "string",
        paramDescription: "20 Bytes - address from which this log originated.",
      },
      {
        paramName: "logIndex",
        type: "string",
        paramDescription:
          "Integer of the log index position in the block. null when its pending log.",
      },
      {
        paramName: "data",
        type: "string",
        paramDescription:
          "Contains one or more 32 Bytes non-indexed arguments of the log.",
      },
      {
        paramName: "removed",
        type: "boolean",
        paramDescription:
          "true when the log was removed, due to a chain reorganization. false if its a valid log.",
      },
      {
        paramName: "topics",
        type: "array_of_strings",
        paramDescription:
          "Array of zero to four 32 Bytes DATA of indexed log arguments. In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declare the event with the anonymous specifier.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription:
          "Hash of the transactions this log was created from. null when its pending log.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve event logs from specific smart contract addresses",
  "Monitor emitted events within a defined block range",
  "Filter logs by topics for transaction analysis",
];

const CONSTRAINTS = [
  "A maximuim of 5,000 parameters in a single request",
  "A maximum of 10,000 results can be returned by a single query",
  "Query duration must not exceed 10 seconds",
];
