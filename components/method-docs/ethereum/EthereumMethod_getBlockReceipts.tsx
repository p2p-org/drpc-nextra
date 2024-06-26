import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getBlockReceipts() {
  return (
    <EthereumMethod
      method="eth_getBlockReceipts"
      network="ethereum"
      cu={80}
      description={
        "Get all transaction receipts for a given block on Ethereum."
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
        ""
      }
    />
  );
}

const CODE_SNIPPETS: Array<CodeSnippetObject> = [
  {
    language: "shell",
    code: () => `curl --request POST \\
     --url ${DRPC_ENDPOINT_URL}\\
     --header 'accept: application/json' \\
     --header 'content-type: application/json' \\
     --data '
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "eth_getBlockReceipts",
  "params": [
    "0x61A80"
  ]
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getBlockReceipts",
  params: ["0x61A80"]
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
  id: 1,
  jsonrpc: "2.0",
  method: "eth_getBlockReceipts",
  params: ["0x61A80"]
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
		"id":      1,
		"jsonrpc": "2.0",
		"method":  "eth_getBlockReceipts",
		"params":  []interface{}{"0x61A80"},
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
    "id": 1,
    "jsonrpc": "2.0",
    "method": "eth_getBlockReceipts",
    "params": ["0x61A80"]
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
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getBlockReceipts",
        "params": ["0x61A80"]
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
      "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
      "blockNumber": "0xfd30ae",
      "contractAddress": null,
      "cumulativeGasUsed": "0x19539",
      "effectiveGasPrice": "0x37fa79b2b9",
      "from": "0x018b6a6fea95a19fc274b335b7141749f8102fe6",
      "gasUsed": "0x19539",
      "logs": [
        {
          "address": "0x3bfcb1e14f2b1bfec9d611cd6b02d48ceef43491",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000018b6a6fea95a19fc274b335b7141749f8102fe6",
            "0x000000000000000000000000ac007d06c200f6056fd6a3a4e45a7cc75436d0df"
          ],
          "data": "0x000000000000000000000000000000000000000000006362590474087b0fbc61",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0xa106f8edddef0edaffbb75bfa57f9a0acd35fa3e2d5a16d8c1aa5550e5a0a91e",
          "transactionIndex": "0x0",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x0",
          "removed": false
        },
        {
          "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000ac007d06c200f6056fd6a3a4e45a7cc75436d0df",
            "0x000000000000000000000000018b6a6fea95a19fc274b335b7141749f8102fe6"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000c823d6f1d2c16f1",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0xa106f8edddef0edaffbb75bfa57f9a0acd35fa3e2d5a16d8c1aa5550e5a0a91e",
          "transactionIndex": "0x0",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x1",
          "removed": false
        },
        {
          "address": "0xac007d06c200f6056fd6a3a4e45a7cc75436d0df",
          "topics": [
            "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
          ],
          "data": "0x00000000000000000000000000000000000000000005fe0bf08051fbb54b0d66000000000000000000000000000000000000000000000000b51d1a883b4eb82a",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0xa106f8edddef0edaffbb75bfa57f9a0acd35fa3e2d5a16d8c1aa5550e5a0a91e",
          "transactionIndex": "0x0",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x2",
          "removed": false
        },
        {
          "address": "0xac007d06c200f6056fd6a3a4e45a7cc75436d0df",
          "topics": [
            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
            "0x000000000000000000000000def171fe48cf0115b1d80b88dc8eab59176fee57",
            "0x000000000000000000000000018b6a6fea95a19fc274b335b7141749f8102fe6"
          ],
          "data": "0x000000000000000000000000000000000000000000006362590474087b0fbc61000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c823d6f1d2c16f1",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0xa106f8edddef0edaffbb75bfa57f9a0acd35fa3e2d5a16d8c1aa5550e5a0a91e",
          "transactionIndex": "0x0",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x3",
          "removed": false
        }
      ],
      "logsBloom": "0x002000000000000000000000800000000000000000000000010000000000000000400000000000000000000000000200020000000800000000000000000000000000000000000000000000080000002000000080000000000000000000100000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000020001000000000000a0000004000000000000000000000000000000000000000000000000000000000000000100000000000000002000000000000000000000000000001020000041000000000000000000800200000000000000000000000000000000000000000000000100000000000",
      "status": "0x1",
      "to": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
      "transactionHash": "0xa106f8edddef0edaffbb75bfa57f9a0acd35fa3e2d5a16d8c1aa5550e5a0a91e",
      "transactionIndex": "0x0",
      "type": "0x0"
    },
    {
      "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
      "blockNumber": "0xfd30ae",
      "contractAddress": null,
      "cumulativeGasUsed": "0x2ea95",
      "effectiveGasPrice": "0x80332a380",
      "from": "0xcc8efeb2a5f50c81c5d7403676b198ae094b2f3c",
      "gasUsed": "0x1555c",
      "logs": [
        {
          "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x00000000000000000000000000000000500e2fece27a7600435d0c48d64e0c00",
            "0x000000000000000000000000e45b4a84e0ad24b8617a489d743c52b84b7acebe"
          ],
          "data": "0x0000000000000000000000000000000000000000000000003eca801435000000",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x20bdc488bc06a0a08d56651357ad551a6b57e2afa78fe00bab586ec7e5551bb1",
          "transactionIndex": "0x1",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x4",
          "removed": false
        },
        {
          "address": "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000e45b4a84e0ad24b8617a489d743c52b84b7acebe",
            "0x00000000000000000000000000000000500e2fece27a7600435d0c48d64e0c00"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000000017bcb000000",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x20bdc488bc06a0a08d56651357ad551a6b57e2afa78fe00bab586ec7e5551bb1",
          "transactionIndex": "0x1",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x5",
          "removed": false
        },
        {
          "address": "0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
          "topics": [
            "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000000605ec648fe83000000000000000000000000000000000000000000000010215ce53fa8e29637",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x20bdc488bc06a0a08d56651357ad551a6b57e2afa78fe00bab586ec7e5551bb1",
          "transactionIndex": "0x1",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x6",
          "removed": false
        },
        {
          "address": "0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
          "topics": [
            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
            "0x00000000000000000000000000000000500e2fece27a7600435d0c48d64e0c00",
            "0x00000000000000000000000000000000500e2fece27a7600435d0c48d64e0c00"
          ],
          "data": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003eca8014350000000000000000000000000000000000000000000000000000000000017bcb0000000000000000000000000000000000000000000000000000000000000000000000",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x20bdc488bc06a0a08d56651357ad551a6b57e2afa78fe00bab586ec7e5551bb1",
          "transactionIndex": "0x1",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x7",
          "removed": false
        }
      ],
      "logsBloom": "0x00200000000000000000000080000000000000000000000000000000000000000000010000000000000000000000000002000000080000000000000000000000001000000000000000000008000000200002000000000000000000000020000000000000000000000080000000000000000000000000000000000010000000000000000000000000000020000000000000000200000000080000004001000000000000000000000000000000000000000000000000000000001000000000000000000002000000000000000000000080000000080000001000000000000000000000200000000000000000000000000000000000000000000000000000000000",
      "status": "0x1",
      "to": "0x00000000500e2fece27a7600435d0c48d64e0c00",
      "transactionHash": "0x20bdc488bc06a0a08d56651357ad551a6b57e2afa78fe00bab586ec7e5551bb1",
      "transactionIndex": "0x1",
      "type": "0x2"
    },
    {
      "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
      "blockNumber": "0xfd30ae",
      "contractAddress": null,
      "cumulativeGasUsed": "0x67bf6",
      "effectiveGasPrice": "0x87a683780",
      "from": "0xcdb31987664a0fe4235d8ee36ee24d43c92e1a9d",
      "gasUsed": "0x39161",
      "logs": [
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000cdb31987664a0fe4235d8ee36ee24d43c92e1a9d",
            "0x000000000000000000000000382ffce2287252f930e1c8dc9328dac5bf282ba1"
          ],
          "data": "0x0000000000000000000000000000000000000000000000066402f27279b0d470",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x8",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000cdb31987664a0fe4235d8ee36ee24d43c92e1a9d",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750"
          ],
          "data": "0xfffffffffffffffffffffffffffffffffffffffffffffff99bfd0d8d864f2b8f",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x9",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000cdb31987664a0fe4235d8ee36ee24d43c92e1a9d",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750"
          ],
          "data": "0x000000000000000000000000000000000000000000000278ad23c2450f622750",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xa",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000cdb31987664a0fe4235d8ee36ee24d43c92e1a9d",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750"
          ],
          "data": "0xfffffffffffffffffffffffffffffffffffffffffffffd80eed94b4876ed043f",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xb",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750",
            "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"
          ],
          "data": "0x000000000000000000000000000000000000000000000278ad23c2450f622750",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xc",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750",
            "0x000000000000000000000000ccb63225a7b19dcf66717e4d40c9a72b39331d61"
          ],
          "data": "0x000000000000000000000000000000000000000000000278ad23c2450f622750",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xd",
          "removed": false
        },
        {
          "address": "0x949d48eca67b17269629c7194f4b727d4ef9e5d6",
          "topics": [
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750",
            "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xe",
          "removed": false
        },
        {
          "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000ccb63225a7b19dcf66717e4d40c9a72b39331d61",
            "0x000000000000000000000000e45b4a84e0ad24b8617a489d743c52b84b7acebe"
          ],
          "data": "0x000000000000000000000000000000000000000000000000267cde1d1840c2d7",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0xf",
          "removed": false
        },
        {
          "address": "0xccb63225a7b19dcf66717e4d40c9a72b39331d61",
          "topics": [
            "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
          ],
          "data": "0x0000000000000000000000000000000000000000000f21d9eced0ab0310bcd200000000000000000000000000000000000000000000000ec37a1f44792aeeeae",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x10",
          "removed": false
        },
        {
          "address": "0xccb63225a7b19dcf66717e4d40c9a72b39331d61",
          "topics": [
            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
            "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff",
            "0x000000000000000000000000e45b4a84e0ad24b8617a489d743c52b84b7acebe"
          ],
          "data": "0x000000000000000000000000000000000000000000000278ad23c2450f62275000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000267cde1d1840c2d7",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x11",
          "removed": false
        },
        {
          "address": "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000e45b4a84e0ad24b8617a489d743c52b84b7acebe",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750"
          ],
          "data": "0x000000000000000000000000000000000000000000000000000000e324c32ce2",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x12",
          "removed": false
        },
        {
          "address": "0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
          "topics": [
            "0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"
          ],
          "data": "0x00000000000000000000000000000000000000000000000000005f7ba185d1a100000000000000000000000000000000000000000000001047d9c35cc123590e",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x13",
          "removed": false
        },
        {
          "address": "0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
          "topics": [
            "0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822",
            "0x000000000000000000000000def1c0ded9bec7f1a1670819833240f027b25eff",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750"
          ],
          "data": "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000267cde1d1840c2d7000000000000000000000000000000000000000000000000000000e324c32ce20000000000000000000000000000000000000000000000000000000000000000",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x14",
          "removed": false
        },
        {
          "address": "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
          "topics": [
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
            "0x000000000000000000000000e66b31678d6c16e9ebf358268a790b763c133750",
            "0x000000000000000000000000cdb31987664a0fe4235d8ee36ee24d43c92e1a9d"
          ],
          "data": "0x000000000000000000000000000000000000000000000000000000e324c32ce2",
          "blockNumber": "0xfd30ae",
          "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
          "transactionIndex": "0x2",
          "blockHash": "0x62f212d84d6c053acbf451e844824445c09dc7ddd636bbaefc51014bbef34e1a",
          "logIndex": "0x15",
          "removed": false
        }
      ],
      "logsBloom": "0x00200000000000000000002080000000000000000001000000000000000000001000010000000000000000000000000002200000080000000000000000200000001000000004002001000008000000200002002000000000000000000020000000400040000040000080000000000040000000000000000000000010000000000000000000000000000000000000000000000200000000080000004000001000020000000000000000004000000000000000000000040000001000000000100000000002000002000000000000400080000000000000001002000020000000000010200000000000000000000000000000000000000000000000000000040000",
      "status": "0x1",
      "to": "0xe66b31678d6c16e9ebf358268a790b763c133750",
      "transactionHash": "0x43bc10747b6b5186c46b50351c987eece33c4053c86d89ddda8f9b41dd984f01",
      "transactionIndex": "0x2",
      "type": "0x2"
    },
    {
      "...": null
    }
  ]
}`;

const REQUEST_PARAMS: RequestParamProp = [

  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: "The block number in hexadecimal format or the block hash or the block tags:",
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
        paramName: "blockHash",
        type: "string",
        paramDescription:
          "32 Bytes - The hash of the block where the given transaction was included.",
      },
      {
        paramName: "blockNumber",
        type: "string",
        paramDescription:
          "The number of the block where the given transaction was included.",
      },
      {
        paramName: "transactionIndex",
        type: "string",
        paramDescription:
          "The index of the transaction within the block.",
      },
      {
        paramName: "transactionHash",
        type: "string",
        paramDescription: "32 Bytes - hash of the transaction",
      },
      {
        paramName: "from",
        type: "string",
        paramDescription:
          "I20 Bytes - address of the sender.",
      },
      {
        paramName: "to",
        type: "string",
        paramDescription:
          "20 Bytes - address of the receiver. null when its a contract creation transaction.",
      },
      {
        paramName: "cumulativeGasUsed",
        type: "string",
        paramDescription:
          "The total amount of gas used when this transaction was executed in the block.",
      },
      {
        paramName: "gasUsed",
        type: "string",
        paramDescription:
          "The amount of gas used by this specific transaction alone.",
      },
      {
        paramName: "contractAddress",
        type: "string",
        paramDescription:
          "20 Bytes - The contract address created, if the transaction was a contract creation, otherwise null",
      },
      {
        paramName: "logs",
        type: "array_of_objects",
        paramDescription:
            "Array of log objects, which this transaction generated.",
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
          {
            paramName: "logsBloom",
            type: "string",
            paramDescription:
                "256 Bytes - Bloom filter for light clients to quickly retrieve related logs.",
          },
          {
            paramName: "status",
            type: "integer",
            paramDescription:
                "Either 1 (success) or 0 (failure)",
          },
          {
            paramName: "effectiveGasPrice",
            type: "string",
          },
          {
            paramName: "type",
            type: "string",
          },
        ],
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve all transaction receipts for a specific block",
  "Verify transaction outcomes within a specific block",
  "Analyze transaction details for block-level auditing",
];

const CONSTRAINTS = [
  "Requires valid block number as parameter",
  "Node must support eth_getBlockReceipts method",
  "Accurate block number necessary for correct receipts",
];
