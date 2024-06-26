import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_debug_traceBlockByHash() {
  return (
    <EthereumMethod
      method="debug_traceBlockByHash"
      network="ethereum"
      cu={90}
      description={
        "Replays the block that is already present in the database."
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
--data '{"method":"debug_traceBlockByHash","params":["0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}'

`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  jsonrpc: "2.0",
  method: "debug_traceBlockByHash",
  params: ["0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", { tracer: "callTracer" }],
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
  method: "debug_traceBlockByHash",
  params: ["0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", { tracer: "callTracer" }],
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
		"method":  "debug_traceBlockByHash",
		"params":  []interface{}{"0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", map[string]string{"tracer": "callTracer"}},
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
    "method": "debug_traceBlockByHash",
    "params": ["0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", { "tracer": "callTracer" }],
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
        "method": "debug_traceBlockByHash",
        "params": ["0x97b49e43632ac70c46b4003434058b18db0ad809617bd29f3448d46ca9085576", { "tracer": "callTracer" }],
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
      "result": {
        "type": "CALL",
        "from": "0xe088776deabb472ffd2843e330e79c880a5f979e",
        "to": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
        "value": "0xec5162",
        "gas": "0x7df99",
        "gasUsed": "0x34e29",
        "input": "0x00e051479210030000000000000000000000f160594a405d53811d3bc4766596efd80fd545a27000000000000000000000128acb080000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009cc54410f805000000000000000000000000000fffd8963efd1fc6a506488495d951d5263988d2500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d6b175474e89094c44da98b954eedeac495271d0fc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f4010001c4ba12222222228d8ba445958a75a0704d566bf2c80000000000000000000052bbbe2900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000ff00000000000000000000000000000000008485b36623632ffa5e486008df4d0b6d363defdb00020000000000000000034a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005f98805a4e8be255a32880fdec7f6728c6568ba000000000000000000000000000000000000000000000003acbfe2488ff5c000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000f19663f2ca0454accad3e094448ea6f7744388045400000000000000000000128acb08000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec44000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000003a6d6cd1833904000000000000000000000000000000000000000000000000000000000001000276a400000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d5f98805a4e8be255a32880fdec7f6728c6568ba0c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb80000",
        "output": "0x",
        "calls": [
          {
            "type": "CALL",
            "from": "0x70526cc7a6d6320b44122ea9d2d07670accc85a1",
            "to": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
            "value": "0x0",
            "gas": "0x7b2a2",
            "gasUsed": "0x34064",
            "input": "0xe051479210030000000000000000000000f160594a405d53811d3bc4766596efd80fd545a27000000000000000000000128acb080000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009cc54410f805000000000000000000000000000fffd8963efd1fc6a506488495d951d5263988d2500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d6b175474e89094c44da98b954eedeac495271d0fc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f4010001c4ba12222222228d8ba445958a75a0704d566bf2c80000000000000000000052bbbe2900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000ff00000000000000000000000000000000008485b36623632ffa5e486008df4d0b6d363defdb00020000000000000000034a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005f98805a4e8be255a32880fdec7f6728c6568ba000000000000000000000000000000000000000000000003acbfe2488ff5c000000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000f19663f2ca0454accad3e094448ea6f7744388045400000000000000000000128acb08000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec44000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000003a6d6cd1833904000000000000000000000000000000000000000000000000000000000001000276a400000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d5f98805a4e8be255a32880fdec7f6728c6568ba0c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb80000",
            "output": "0x",
            "calls": [
              {
                "type": "STATICCALL",
                "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "gas": "0x77f15",
                "gasUsed": "0x9e6",
                "input": "0x70a08231000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec44",
                "output": "0x0000000000000000000000000000000000000000000000313abf3c5282b4912f"
              },
              {
                "type": "CALL",
                "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                "to": "0x60594a405d53811d3bc4766596efd80fd545a270",
                "value": "0x0",
                "gas": "0x76a9e",
                "gasUsed": "0xf59c",
                "input": "0x128acb080000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009cc54410f805000000000000000000000000000fffd8963efd1fc6a506488495d951d5263988d2500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d6b175474e89094c44da98b954eedeac495271d0fc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f40100",
                "output": "0xffffffffffffffffffffffffffffffffffffffffffffffc5311d4d18418aed2b00000000000000000000000000000000000000000000000009cc54410f805000",
                "calls": [
                  {
                    "type": "CALL",
                    "from": "0x60594a405d53811d3bc4766596efd80fd545a270",
                    "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "value": "0x0",
                    "gas": "0x6df38",
                    "gasUsed": "0x3312",
                    "input": "0xa9059cbb0000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000003acee2b2e7be7512d5",
                    "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                  },
                  {
                    "type": "STATICCALL",
                    "from": "0x60594a405d53811d3bc4766596efd80fd545a270",
                    "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "gas": "0x6a98c",
                    "gasUsed": "0x9e6",
                    "input": "0x70a0823100000000000000000000000060594a405d53811d3bc4766596efd80fd545a270",
                    "output": "0x0000000000000000000000000000000000000000000000dbe172a2b8ca9ae46d"
                  },
                  {
                    "type": "CALL",
                    "from": "0x60594a405d53811d3bc4766596efd80fd545a270",
                    "to": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                    "value": "0x0",
                    "gas": "0x69cd4",
                    "gasUsed": "0x2fa1",
                    "input": "0xfa461e33ffffffffffffffffffffffffffffffffffffffffffffffc5311d4d18418aed2b00000000000000000000000000000000000000000000000009cc54410f8050000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002d6b175474e89094c44da98b954eedeac495271d0fc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f4010000000000000000000000000000000000000000",
                    "output": "0x",
                    "calls": [
                      {
                        "type": "CALL",
                        "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        "value": "0x0",
                        "gas": "0x67e20",
                        "gasUsed": "0x2b11",
                        "input": "0x23b872dd000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec4400000000000000000000000060594a405d53811d3bc4766596efd80fd545a27000000000000000000000000000000000000000000000000009cc54410f805000",
                        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                      }
                    ]
                  },
                  {
                    "type": "STATICCALL",
                    "from": "0x60594a405d53811d3bc4766596efd80fd545a270",
                    "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "gas": "0x66b79",
                    "gasUsed": "0x216",
                    "input": "0x70a0823100000000000000000000000060594a405d53811d3bc4766596efd80fd545a270",
                    "output": "0x0000000000000000000000000000000000000000000000dbeb3ef6f9da1b346d"
                  }
                ]
              },
              {
                "type": "CALL",
                "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                "to": "0xba12222222228d8ba445958a75a0704d566bf2c8",
                "value": "0x0",
                "gas": "0x66de6",
                "gasUsed": "0x11c84",
                "input": "0x52bbbe2900000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000ff00000000000000000000000000000000008485b36623632ffa5e486008df4d0b6d363defdb00020000000000000000034a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005f98805a4e8be255a32880fdec7f6728c6568ba000000000000000000000000000000000000000000000003acbfe2488ff5c000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000",
                "output": "0x00000000000000000000000000000000000000000000003a9335df23feb747af",
                "calls": [
                  {
                    "type": "CALL",
                    "from": "0xba12222222228d8ba445958a75a0704d566bf2c8",
                    "to": "0x8485b36623632ffa5e486008df4d0b6d363defdb",
                    "value": "0x0",
                    "gas": "0x60d56",
                    "gasUsed": "0x4254",
                    "input": "0x9d2c110c00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000039d35935dae2cab038d40000000000000000000000000000000000000000000018f4c67acb2fb796ea8300000000000000000000000000000000000000000000000000000000000000000000000000000000000000006b175474e89094c44da98b954eedeac495271d0f0000000000000000000000005f98805a4e8be255a32880fdec7f6728c6568ba000000000000000000000000000000000000000000000003acbfe2488ff5c00008485b36623632ffa5e486008df4d0b6d363defdb00020000000000000000034a0000000000000000000000000000000000000000000000000000000000ec51330000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f560000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000000",
                    "output": "0x00000000000000000000000000000000000000000000003a9335df23feb747af"
                  },
                  {
                    "type": "CALL",
                    "from": "0xba12222222228d8ba445958a75a0704d566bf2c8",
                    "to": "0x6b175474e89094c44da98b954eedeac495271d0f",
                    "value": "0x0",
                    "gas": "0x5aa6d",
                    "gasUsed": "0x297a",
                    "input": "0x23b872dd0000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f56000000000000000000000000ba12222222228d8ba445958a75a0704d566bf2c800000000000000000000000000000000000000000000003acbfe2488ff5c0000",
                    "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                  },
                  {
                    "type": "CALL",
                    "from": "0xba12222222228d8ba445958a75a0704d566bf2c8",
                    "to": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
                    "value": "0x0",
                    "gas": "0x57251",
                    "gasUsed": "0x3390",
                    "input": "0xa9059cbb0000000000000000000000000000000000007f150bd6f54c40a34d7c3d5e9f5600000000000000000000000000000000000000000000003a9335df23feb747af",
                    "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                  }
                ]
              },
              {
                "type": "CALL",
                "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                "to": "0x9663f2ca0454accad3e094448ea6f77443880454",
                "value": "0x0",
                "gas": "0x54b0b",
                "gasUsed": "0xead6",
                "input": "0x128acb08000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec44000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000003a6d6cd1833904000000000000000000000000000000000000000000000000000000000001000276a400000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000002d5f98805a4e8be255a32880fdec7f6728c6568ba0c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb80000",
                "output": "0x00000000000000000000000000000000000000000000003a6d6cd18339040000fffffffffffffffffffffffffffffffffffffffffffffffff6218cda9d1bdc4d",
                "calls": [
                  {
                    "type": "CALL",
                    "from": "0x9663f2ca0454accad3e094448ea6f77443880454",
                    "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                    "value": "0x0",
                    "gas": "0x4ad44",
                    "gasUsed": "0x1f7e",
                    "input": "0xa9059cbb000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec4400000000000000000000000000000000000000000000000009de732562e423b3",
                    "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                  },
                  {
                    "type": "STATICCALL",
                    "from": "0x9663f2ca0454accad3e094448ea6f77443880454",
                    "to": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
                    "gas": "0x48add",
                    "gasUsed": "0x9b7",
                    "input": "0x70a082310000000000000000000000009663f2ca0454accad3e094448ea6f77443880454",
                    "output": "0x00000000000000000000000000000000000000000000b88db8ae77fad8af1b44"
                  },
                  {
                    "type": "CALL",
                    "from": "0x9663f2ca0454accad3e094448ea6f77443880454",
                    "to": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                    "value": "0x0",
                    "gas": "0x47e53",
                    "gasUsed": "0x1d73",
                    "input": "0xfa461e3300000000000000000000000000000000000000000000003a6d6cd18339040000fffffffffffffffffffffffffffffffffffffffffffffffff6218cda9d1bdc4d0000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000002d5f98805a4e8be255a32880fdec7f6728c6568ba0c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb8000000000000000000000000000000000000000000",
                    "output": "0x",
                    "calls": [
                      {
                        "type": "CALL",
                        "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                        "to": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
                        "value": "0x0",
                        "gas": "0x46844",
                        "gasUsed": "0x1900",
                        "input": "0xa9059cbb0000000000000000000000009663f2ca0454accad3e094448ea6f7744388045400000000000000000000000000000000000000000000003a6d6cd18339040000",
                        "output": "0x0000000000000000000000000000000000000000000000000000000000000001"
                      }
                    ]
                  },
                  {
                    "type": "STATICCALL",
                    "from": "0x9663f2ca0454accad3e094448ea6f77443880454",
                    "to": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
                    "gas": "0x45edd",
                    "gasUsed": "0x1e7",
                    "input": "0x70a082310000000000000000000000009663f2ca0454accad3e094448ea6f77443880454",
                    "output": "0x00000000000000000000000000000000000000000000b8c8261b497e11b31b44"
                  }
                ]
              },
              {
                "type": "STATICCALL",
                "from": "0x0000000000007f150bd6f54c40a34d7c3d5e9f56",
                "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "gas": "0x462ec",
                "gasUsed": "0x216",
                "input": "0x70a08231000000000000000000000000dfee68a9adb981cd08699891a11cabe10f25ec44",
                "output": "0x0000000000000000000000000000000000000000000000313ad15b36d61864e2"
              }
            ]
          }
        ]
      }
    },
    {
      "...": null
    }
  ]
}
`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockNumber",
    type: "string",
    paramDescription: 'This describes the block number to fetch the transaction by.',
  },
  {
    paramName: "tracer",
    type: "object",
    paramDescription: 'Currently supports callTracer and prestateTracer',
    childrenParamsType: "object",
    childrenParams: [
        {
          paramName: "tracer",
          type: "string",
          paramDescription: 'Default: callTracer'
        },
        {
          paramName: "tracerConfig",
          type: "object",
          childrenParamsType: "boolean",
          childrenParams: [
              {
                paramName: "onlyTopCall",
                type: "boolean",
              },
          ],
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
    type: "array_of_objects",
    paramDescription: "Is different for callTracer and prestateTracer",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "callTracer",
        type: "object",
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
            {
              paramName: "error",
              type: "string",
              paramDescription:
                  "Error, if any",
            },
            {
              paramName: "revertReason",
              type: "string",
              paramDescription:
                  "solidity revert reason, if any",
            },
            {
              paramName: "calls",
              type: "array",
              paramDescription:
                  "list of sub-calls",
              },
            ],
          },
      {
        paramName: "prestateTracer",
        type: "object",
        childrenParamsType: "object",
        childrenParams: [
           {
              paramName: "balance",
              type: "string",
              paramDescription:
                  "Balance in wei",
            },
            {
              paramName: "nonce",
              type: "uint64",
            },
            {
              paramName: "code",
              type: "string",
              paramDescription:
                  "Hex-encoded bytecode",
              },
            {
              paramName: "storage",
              type: "map[string]string",
              paramDescription:
                  "Storage slots of the contract",
              },
        ]
      }
        ],
      },
];

const USE_CASES = [
  "Trace execution paths for transactions in specific block",
  "Debug contract interactions within a given block",
  "Analyze gas usage for transactions in specific block",
];

const CONSTRAINTS = [
  "Limited to nodes with debugging capabilities enabled",
  "Traces may include large data sets for complex blocks",
  "Potential delays due to high processing requirements",
];
