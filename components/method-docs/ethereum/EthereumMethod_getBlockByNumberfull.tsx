import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByNumberfull() {
  return (
    <EthereumMethod
      method="getBlockByNumberfull"
      network="ethereum"
      cu={60}
      description={
        "Returns an array of all logs matching a given filter object"
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
  "method": "eth_getBlockByNumber",
  "params": [
    true,
    true
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['true', 'true']
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
`,
  },
  {
    language: "node",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const data = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['true', 'true']
};

fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
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
    headers := map[string]string{
        "Accept":       "application/json",
        "Content-Type": "application/json",
    }

    data := map[string]interface{}{
        "id":      1,
        "jsonrpc": "2.0",
        "method":  "eth_getBlockByNumber",
        "params":  []interface{}{"true", "true"},
    }

    jsonData, err := json.Marshal(data)
    if err != nil {
        fmt.Println(err)
        return
    }

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Println(err)
        return
    }

    for key, value := range headers {
        req.Header.Set(key, value)
    }

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
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

url = '${DRPC_ENDPOINT_URL}'
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

data = {
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["true", "true"]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
`,
  },
  {
    language: "rust",
    code: () => `use reqwest::Client;
use serde_json::json;
use tokio;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let url = "${DRPC_ENDPOINT_URL}";
    let client = Client::new();

    let data = json!({
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": ["true", "true"]
    });

    let response = client.post(url)
        .header("Accept", "application/json")
        .header("Content-Type", "application/json")
        .json(&data)
        .send()
        .await?;

    let response_json: serde_json::Value = response.json().await?;
    println!("{:#?}", response_json);

    Ok(())
}
`,
  },
];

const RESPONSE_JSON = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x65746865726d696e652d6575312d32",
    "gasLimit": "0x47e7c4",
    "gasUsed": "0x6384",
    "hash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
    "logsBloom": "0x0",
    "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
    "mixHash": "0x75b1f48901cf1d37ad43c2b29eafeb1f3ae5cf5c5d55b1b3be6b2be4a25d6ec6",
    "nonce": "0x539bd4979b50162d",
    "number": "0x1b4",
    "parentHash": "0x8e3d7ea52a14b9d773c37d67e2a4b8e6a12573c3d60a1cd1a58455d3008d1c9d",
    "receiptsRoot": "0xbcdfc35b86bedf72e283106f1f9a03c8d99a6de2b1cba6b01ff3e78e924e05c8",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad0d4e8eeb004cfe8dec7d1f3469a7f5f",
    "size": "0x220",
    "stateRoot": "0x7d00dcd0e0d14e6f7d9dc57116d0e5f76b0abdc716a1d7e6b4df87eae7795b7a",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [
      {
        "blockHash": "0x5bad55fbd7e0f20eac95f45f55f997216de10aaf176314c236b0c3c93c5d1f17",
        "blockNumber": "0x1b4",
        "from": "0x5cb2045c43d14a5f5e5f1ea60c5b02e0a93032cf",
        "gas": "0x7d3c",
        "gasPrice": "0xba43b7400",
        "hash": "0x1a85165ac88f73b7a290104f614cf08d8b4f3e193f41f209c3716d9c237139f5",
        "input": "0x",
        "nonce": "0x15",
        "to": "0x3535353535353535353535353535353535353535",
        "transactionIndex": "0x0",
        "value": "0x1bc16d674ec80000",
        "v": "0x1c",
        "r": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2",
        "s": "0x5e1d3a76fbf824220e68236e2d51cb98f349a5a6e4f43e3f471f5d0421d4aee2"
      }
    ],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription:
      "The block number in hexadecimal format or the string latest, earliest, pending, safe or finalized.",
    paramEnum: [
      {
        value: "pending",
        description:
          "A sample next block built by the client on top of latest and containing the set of transactions usually taken from local mempool. Intuitively, you can think of these as blocks that have not been mined yet.",
      },
      {
        value: "latest",
        description:
          "The most recent block in the canonical chain observed by the client, this block may be re-orged out of the canonical chain even under healthy/normal conditions.",
      },
      {
        value: "safe",
        description:
          "The most recent crypto-economically secure block, cannot be re-orged outside of manual intervention driven by community coordination. Intuitively, this block is “unlikely” to be re-orged.",
      },
      {
        value: "finalized",
        description:
          "The most recent crypto-economically secure block, that has been accepted by >2/3 of validators. Cannot be re-orged outside of manual intervention driven by community coordination. Intuitively, this block is very unlikely to be re-orged.",
      },
      {
        value: "earliest",
        description:
          "The lowest numbered block the client has available. Intuitively, you can think of this as the first block created.",
      },
    ],
  },
  {
    paramName: "transaction_detail_flag",
    type: "boolean",
    paramDescription:
      "The method returns the full transaction objects when this value is true otherwise, it returns only the hashes of the transactions",
  },
];

const RESPONSE_PARAMS: ResponseParam[] = [
  {
    paramName: "baseFeePerGas",
    type: "string",
    paramDescription:
      "A string of the base fee encoded in hexadecimal format. Please note that this response field will not be included in a block requested before the EIP-1559 upgrade",
  },
  {
    paramName: "difficulty",
    type: "integer",
    paramDescription:
      "The integer of the difficulty for this block encoded as a hexadecimal",
  },

  {
    paramName: "extraData",
    paramDescription: "The “extra data” field of this block",
    type: "string",
  },

  {
    paramName: "gasLimit",
    paramDescription:
      "The maximum gas allowed in this block encoded as a hexadecimal",
    type: "string",
  },

  {
    paramName: "gasUsed",
    paramDescription:
      "The total used gas by all transactions in this block encoded as a hexadecimal",
    type: "string",
  },

  {
    paramName: "hash",
    paramDescription: "The block hash of the requested block. null if pending",
    type: "string",
  },

  {
    paramName: "logsBloom",
    paramDescription:
      "The bloom filter for the logs of the block. null if pending",
    type: "string",
  },

  {
    paramName: "miner",
    paramDescription:
      "The address of the beneficiary to whom the mining rewards were given",
    type: "string",
  },

  {
    paramName: "mixHash",
    paramDescription: "A string of a 256-bit hash encoded as a hexadecimal",
    type: "string",
  },

  {
    paramName: "nonce",
    paramDescription:
      "The hash of the generated proof-of-work. null if pending",
    type: "string",
  },

  {
    paramName: "number",
    paramDescription:
      "The block number of the requested block encoded as hexadecimal. null if pending",
    type: "string",
  },

  {
    paramName: "parentHash",
    paramDescription: "The hash of the parent block",
    type: "string",
  },

  {
    paramName: "receiptsRoot",
    paramDescription: "The root of the receipts trie of the block",
    type: "string",
  },

  {
    paramName: "sha3Uncles",
    paramDescription: "The SHA3 of the uncles data in the block",
    type: "string",
  },

  {
    paramName: "size",
    paramDescription:
      "The size of this block in bytes as an Integer value encoded as hexadecimal",
    type: "string",
  },

  {
    paramName: "stateRoot",
    paramDescription: "The root of the final state trie of the block",
    type: "string",
  },

  {
    paramName: "timestamp",
    paramDescription: "The UNIX timestamp for when the block was collated",
    type: "string",
  },

  {
    paramName: "totalDifficulty",
    paramDescription:
      "The integer of the total difficulty of the chain until this block encoded as a hexadecimal",
    type: "string",
  },

  {
    paramName: "transactions",
    paramDescription:
      "An array of transaction objects - please see eth_getTransactionByHash for exact shape",
    type: "array",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "The number of the block where the given transaction was included.",
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
        paramName: "nonce",
        type: "string",
        paramDescription: "The number of transactions made by the sender prior to this one.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the transaction.",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription:
          "20 Bytes - address of the sender.",
      },
      {
        paramName: "gas",
        type: "string",
        paramDescription:
          "Gas provided by the sender.",
      },
      {
        paramName: "gasPrice",
        type: "string",
        paramDescription:
          "Gas price provided by the sender in Wei.",
      },
      {
        paramName: "input",
        type: "string",
        paramDescription:
          "The data send along with the transaction.",
      },
      {
        paramName: "r",
        type: "string",
        paramDescription:
          "ECDSA signature r.",
      },
      {
        paramName: "s",
        type: "string",
        paramDescription:
          "ECDSA signature r.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription:
          "20 Bytes - address of the receiver. null when it's a contract creation transaction.",
      },
      {
        paramName: "v",
        type: "string",
        paramDescription:
          "ECDSA recovery id.",
      },
      {
        paramName: "value",
        type: "string",
        paramDescription:
          "Value transferred in Wei.",
      },
    ],
  },

  {
    paramName: "transactionsRoot",
    paramDescription: "The root of the transaction trie of the block",
    type: "string",
  },

  {
    paramName: "uncles",
    paramDescription: "An array of uncle hashes",
    type: "array",
  },
];

const USE_CASES = [
  "Retrieve full block details for forensic analysis",
  "Get all transactions within a specific block",
  "Monitor blockchain activity for a specific block",
];

const CONSTRAINTS = [
  "Requires accurate block number or tag",
  "Full transaction data increases response size",
  "Node must be fully synchronized with network",
];
