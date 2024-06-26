import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getProof() {
  return (
    <EthereumMethod
      method="eth_getProof"
      network="ethereum"
      cu={11}
      description={
        "Returns the account and storage values of the specified account including the Merkle-proof."
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
        "Returns an account object"
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
  --data '{"method":"eth_getProof","params":["0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"],"latest"],"id":1,"jsonrpc":"2.0"}'
`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  method: "eth_getProof",
  params: [
    "0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",
    ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"],
    "latest"
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
  method: "eth_getProof",
  params: [
    "0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",
    ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"],
    "latest"
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
		"method":  "eth_getProof",
		"params":  []interface{}{"0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842", []string{"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"}, "latest"},
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
    "method": "eth_getProof",
    "params": [
        "0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",
        ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"],
        "latest"
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
        "method": "eth_getProof",
        "params": [
            "0x7F0d15C7FAae65896648C8273B6d7E43f58Fa842",
            ["0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"],
            "latest"
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
  "id": 0,
  "result": {
    "address": "0x7f0d15c7faae65896648c8273b6d7e43f58fa842",
    "accountProof": [
      "0xf90211a057682dd97c339167d0a923ea54273e2ecf10702b67721ad3f9dff813f2ce0205a0fdceda99d6ddafb971c700c4b834d60f651119ca5aca87fc6f1f93a50072340da04dc6877fcc14e1f3aa14a4abf6dfd3c4957d09e6bb3b440285031744c11f132da0b1db67ba601ccce18bf0c21833f1b943ecee49faa6abb53eb6d6baf2fa1d8082a039560b068a263acf368271fddb16c933521abb6e71bd571fdf2d033cdb5989d0a05c4e7aa3801447c022a9a1a3cc6353cffd5fc12a79300d29b75a1458f4678fa4a0de3f8e66a7e24847f28cf583647d7c0b90478cc2af63dba191c6cbadd90190afa0fe194f0dc6bedccce2b6465da90006cb79c030ad3a153c7d55c7c75027212f35a07d65d91165e2847c9f4a2e2807a0576f08f6ec1b6a66c78adc286f8f1b7ccceea0c2259f5449843134f1c278c770e1fa461244a76abef7b57664286820b7c16859a0c72dbc74e05bd68b032d35a5adf421f82fe4168469901c6448b8433a666cb225a0f9346c583a6ee2d0e75ce3d723d984864b7457856e661754d4ecfee0f9cdaae4a046d70957c59daa3b7df45ab746fcfb50bbae9d410ac347e34f1150bb1fd187d7a0207fb3edb0fc6dc93bdcb945362a855d51e7e0ab49d2d6f9544f07099596d930a0eeeb359a10e708f2402e82f74c145d5b4d5962ef4d2faee61ac69d2d013dd483a04cf4e8b6125c2dbc61c4d89b6c430c667478c2782290f6f724bfc9d590494b5d80",
      "0xf90211a0b49c47e0d17fb4712af35919868d2e76f0cd0e73136e13d8cfe770a3bd7f451da0062f402a21167f08e4dca605f3ae7ad469771b8c2eab144ca3969a315645a74da033be642d7a3ee96cae88d3802a2095c1396118916f40d3ea7c222da96abf6bbca02c727c2053211a155eb4ff470635f490e43af9021ac3774dd552a4792072c21ea0dfb381dd62c54f3a5822c2e4deb265fe2d265b82eedb3091898e656d012f296ea0143e4a197aca20cd16d343198daa6593b70cbfbaf16e1656377d4f236c36a229a0655ad4a1dbcdb7f7d20f37b3672efab67fb47689a43bcea0664aec2f9cfc1836a0e9b7b0cd1e938547d3d9b80b84b0bd9c655cb7bea89116f9f1f3ef965e44ebefa0b4389e2a2e575012f2f9ed30ac0deb070962e09761556bcd2467d040322466c4a08644dfbab56761aee5d30f84a976a63f51241dd1328ca5bd1a2f1eaf9f443d72a04720528ec98003cb2161893e8cc80956e961aa028d0c08a4dcde7f21b49334cda0b652b1b93681ba43bda591ea314b82455b984779d36dd6b26d7b87bb1b608826a0497574f2a2fda281f5925bdcd55d66369dc57c5f1d5b0be5282454b6a433f2dea0c2823c53ccf4fcf0559e8371c511694f437a65e8d8d087a367a48e35738f0702a0e78ad0adff1f3b65bbedaf46760ccb6f18e8157f05681351f168cc62f819bbb9a066d05b1e7d4cda97dfdb6e5f025c31cc8dbc0a0cb389eb86ddc365acb7543af080",
    ],
    "balance": "0x0",
    "codeHash": "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
    "nonce": "0x0",
    "storageHash": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "storageProof": [
      {
        "key": "0x00000000000000000000000000000000",
        "value": "0x0",
        "proof": []
      }
    ]
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "address",
    type: "string",
    paramDescription:
      "The address of the account for which the balance is to be checked.",
  },
  {
    paramName: "storageKeys",
    type: "array_of_strings",
    paramDescription: "An array of storage-keys that should be proofed and included",
  },
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "The block number as a string in hexadecimal format or tags.",
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
        paramName: "address",
        type: "string",
        paramDescription: "20 Bytes - address from which this log originated.",
      },
      {
        paramName: "accountProof",
        type: "array_of_strings",
        paramDescription:
          "An array of rlp-serialized MerkleTree-Nodes which starts with the stateRoot-Node and follows the path of the SHA3 address as key.",
      },
      {
        paramName: "balance",
        type: "string",
        paramDescription:
          "The current balance of the account in wei.",
      },
      {
        paramName: "codeHash",
        type: "string",
        paramDescription:
          "A 32 byte hash of the code of the account.",
      },
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "The hash of the generated proof-of-work. Null if pending.",
      },
      {
        paramName: "storageHash",
        type: "string",
        paramDescription:
          "A 32 byte SHA3 of the storageRoot.",
      },
      {
        paramName: "storageProof",
        type: "array_of_objects",
        paramDescription:
          "An array of storage-entries as requested. Each entry is an object with the following fields:",
      },
      {
        paramName: "key",
        type: "integer",
      },
      {
        paramName: "value",
        type: "integer",
      },
      {
        paramName: "proof",
        type: "array",
        paramDescription: " Array of rlp-serialized MerkleTree-Nodes.",
      },
    ],
  },
];

const USE_CASES = [
  "Verify account state with Merkle proof inclusion",
  "Audit specific contract storage slots for accuracy",
  "Validate Merkle proof inclusion",
];

const CONSTRAINTS = [
  "Requires specific account address",
  "Accurate storage keys are essential for proofs",
  "Dependent on latest block data",
];
