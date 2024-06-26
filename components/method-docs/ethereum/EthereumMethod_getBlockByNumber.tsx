import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockByNumber() {
  return (
    <EthereumMethod
      method="getBlockByNumber"
      network="ethereum"
      cu={24}
      description={
        "Returns information of the block matching the given block number."
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
        "A block object, or null when no block was found. The block object contains the following fields:"
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
   "finalized",
   "finalized"
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
    params: ['finalized', 'finalized']
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
    params: ['finalized', 'finalized']
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
        "params":  []interface{}{"finalized", "finalized"},
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
    "params": ["finalized", "finalized"]
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
        "params": ["finalized", "finalized"]
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
  "id": 0,
  "result": {
    "number": "0x1b4",
    "difficulty": "0x4ea3f27bc",
    "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
    "gasLimit": "0x1388",
    "gasUsed": "0x0",
    "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
    "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
    "nonce": "0x689056015818adbe",
    "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x220",
    "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
    "timestamp": "0x55ba467c",
    "totalDifficulty": "0x78ed983323d",
    "transactions": [],
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "uncles": []
  }
}`;

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
  "Verify transactions in a specific block",
  "Compare block details for node sync",
  "Monitor contract events for off-chain triggers",
];

const CONSTRAINTS = [
  "Response delays due to network latency",
  "Slight data discrepancies until finality",
  "Strain on resources with frequent requests",
];
