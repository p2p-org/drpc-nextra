import EthereumMethod from "../../EthereumMethod/EthereumMethod";
import { RequestParamProp } from "../../EthereumMethod/params/RequestParams";
import { ResponseParam } from "../../EthereumMethod/params/ResponseParams";
import { CodeSnippetObject } from "../../EthereumMethod/types";
import { DRPC_ENDPOINT_URL } from "./constants";

export function EthereumMethod_getUncleByBlockHashAndIndex() {
  return (
    <EthereumMethod
      method="eth_getUncleByBlockHashAndIndex"
      network="ethereum"
      cu={15}
      description={
        "Returns information about an uncle of a block by hash and uncle index position."
      }
      useCases={USE_CASES}
      constraints={CONSTRAINTS}
      codeSnippets={CODE_SNIPPETS}
      requestParams={REQUEST_PARAMS}
      requestParamsType="array_of_strings"
      responseJSON={RESPONSE_JSON}
      responseParams={RESPONSE_PARAMS}
      responseParamsType="object"
      responseParamsDescription={
        "A block object with the following fields, or null when no block was found."
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
  "params": [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  "method": "eth_getUncleByBlockHashAndIndex"
}
'`,
  },
  {
    language: "js",
    code: () => `const url = '${DRPC_ENDPOINT_URL}';

const data = {
  id: 1,
  jsonrpc: "2.0",
  params: [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  method: "eth_getUncleByBlockHashAndIndex"
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
  params: [
    "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
    "0x0"
  ],
  method: "eth_getUncleByBlockHashAndIndex"
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
		"params": []interface{}{
			"0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
			"0x0",
		},
		"method": "eth_getUncleByBlockHashAndIndex",
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
    "params": [
        "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
        "0x0"
    ],
    "method": "eth_getUncleByBlockHashAndIndex"
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
        "params": [
            "0xb3e8c898cfbf4072eaad440e8606e578a33ca4fafc27d7936d83d7392ba3e939",
            "0x0"
        ],
        "method": "eth_getUncleByBlockHashAndIndex"
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
    "number": "0xfd2ff7",
    "hash": "0x7de9c923b2eab68a6a750fbe321638387911e9d02bda4671fa89e38999adbab1",
    "transactions": [
      "0x5ef7a16854a865e9b23ddc20162bd5de95f2d00bd8049e19bafe54b1faf83dbe",
      "0x2375160fcf98d944393f3ed5f32e592cde0744f8bae4e067ead362cbf0e30600",
      "0x15e24a6116a6ab83318755bcf24b61ab893150fab720d930867510ae936ee94a",
      "0x61be6237d1b6a4bd8e85f90a11370c9e9b88b5befa0fe8e061eb637e03eb3283",
      "0xb8a056bfb2bebb7f5aa3ba3190f9cc3e541500cfcc2353323988c2d3f03b545e",
      "0xb48cf97147cf598503c65c56d1b24360f2fd5907cf7bd059046c0cf1d2c32d50",
      "0x3f89662ca3eed8756350b5fd371a905eca77ac7847c7a7e4d57d0ed574232095",
      "0x86aa75ded10e74f555f92b36a910b0a8b89dbf7031a8547455f8a4fc8bdbb959",
      "0x0434360c5d00b6d9f035c3dc46a6c6b244f9d73c5204469afd4d07aa06d6e05e",
      "0x98c4bee5092d0515145b989fe05646462012f75887935a411b87834a9d1badd0",
      "0x1b9e55da3b0895d0d3d38433cb1aab0137010781407c5ce684a1ea2433255c8f",
      "0x9a883c8f1cddc0b157873996b9d93ea992516fcd08575bff575866d437ade261",
      "0xbd4ba4b061241e2c832c9c3f8dd8840b669edd904a9d7f469fc5696c75097d2f",
      "0xac2a8770f6dff665c05656ab6c23c07f787dd67ed36baa186d45c0d2c5fc75a3",
      "0xb772449e118039fd1c23e5a5496458fc58eeb0dc86c23ddf73642080bfc9f396",
      "0xdb15e8d1547ac7236ed7651fc30d4ff9b84feef4c296f4a8e757a3fd94847390",
      "0xffc484ea4dc64bfa564e8385b037f9aa4e91336efb1e296a3f9a96f7b3e5d62c",
      "0x154a164ce1231f5bebb731000dc2ae71c7c7ed202b30edc555342cdbca95841b",
      "0x6b7cff7b01fa6f2b6733f22e990a47ee38c7881dee4570a81847b7c195bec1c5",
      "0xd60ac2787ab0763c2d3a1ba843abdea010693b9ab21943cd0cdf462babccfcc8",
      "0x5364376ab0bcd562e4855d7008fc8e51126a91d38e7675f88cef21ed67ce9782",
      "0x52c97ba1c217065b0d817a3fdb31ddf2388587110e11cbdd4040ce8e58ad5e75",
      "0x17b293e5bc0df7b70f223090b9db2efa34b930852a7880b676c258100347324f",
      "0xe9d761ae0868e85d9be233db83da7ff369054130405e284e324e29a3f1877fd8",
      "0xaedec65ecec35567d86198c019e3cedc21c9180709df5894036880a445a4d00d",
      "0x4c8384e5231553ae5dd1f3009e4f0b16ee0e66128b9aa64ec2140de2aff931bc",
      "0xb80c9c256c5999e0b19202fe9dd53f6ace46cc45b91e6c2b0232fba524c77694",
      "0xb0a594a39ca16a00713f6a69610e94b9109f72283bd5e9f5562df4c736a85e60",
      "0xdc8e6073e05fb9f07e8785c8fc024ad869fa12bbd3af139990c1c5b5d36fa148",
      "0x1132ba664b5e70d50d1d724665620ee5f8535e41dbfde257b3cef44bbb4d677f",
      "0x5e9c5e27f30f635bf323c4d8fa0cdc96af71157bad0e040bc15c304480eb978b",
      "0xecdb5eca4b543393d9556467ab83c62fd56772175d4260495c10ae05a3813b0c",
      "0xb99df146e291550db2ddfd757b912726be84e2ca2f8e52b87a3e297ff1c858f2",
      "0x07108cc985c5e8609cdd9b159205ac0120a53b6f50384a5ac38441e7e779544b",
      "0x2919b22b1d9cb9097ee8ffda4350bc4df300130ff9f772baf89a1b9fe324025d",
      "0x3151778fd2eeff55c0b0ce517c231451f192dabcf95d049273f5940f104aa683",
      "0xd38f7e032cb46e0d45d23d761a79b935b0e75bbf95a9f8b672435965be42d4f9",
      "0x89f551c80a4483b68d98bc5649b6864d6398e4aa3bb84b3663f788604f4cb50e",
      "0x5cb5e0185842f155ca0081e199c926d34e0ea04db4605aee95653f62969ef000",
      "0xac418446c571331b9b7d2e9f054188a5d5500b37c40ecbf1843915151e67c4fe",
      "0x8be7c1de80a2d6b35ce6436a6bade11f05cb1dbf18a0a4512bdb0a330ba77a4e",
      "0x0df92f3a8595bad77b8126892cbbd53a20a18ca8bd2cf6e2ef134eb057e6b946",
      "0xe825326abe360ce1ab0e578c60c265422155b2800cbdcadb5655013594027d05",
      "0xd8eb9ce3b054a93cb7d72c6838f52101d294a60033b5a5be6e3fc95e5e24b581",
      "0x8154296da735de7599c3e722abd1b8f59574c0c68d415e8336116eb0639f70e8",
      "0xb631f6fc4627801b5e27f25427ddc82a27e673e8846c6e52a1aeaa52fea5a70a",
      "0x583070021ecda366a2528df7f8997ef9d83970c774b86d620b8feb8540b15868",
      "0x62f56c791e641571ddba9fab307aedf9e5ac450b4dec6f7dce4ec2c84923f4ce",
      "0x2db22f4140a5efe5888a19b1f951b55fb63dc422cd1c96f7c8c46f9cbcd5c156",
      "0x86d0377c418dfac6b7b68b849516701f4a8970974624ba72307b1bbf55ea7d5f",
      "0xe2c41fea29efde93377413759752c90f06f5588611d93e1dac08da0ee7b21c1a",
      "0xde077c5db3b02fc112d1f1f4e0ddc0921b1877e67bacd7d70a836a6f53b1b7d2",
      "0x29629a3d613dd6001cf372d1b3b78bd282920f7ff841ababe47ed07185b20e78",
      "0xa0f920f890373e2eadbc62f416de85ad1c176020658f9acd01d606562433158e",
      "0x7c6cbad39fb53c8c5e9116c30ca4a4a8149c722b7f38d465f4229c51a1713b08",
      "0x63b5fc7dbaec3f5efeab83d65c65a0d16b04861494c882bbb1ab3acf914a2b4f",
      "0x936057a4ca0df9f68cc99b2946668e561ce20da17a6ce11fd650d53fff036387",
      "0x2e07d1f9ecff190dcc7fa26d01ac0c5fa52b491866f0d01e53f677957bafbebc",
      "0xf217c798876f724f7e717d97c5a7d4fac57f12835015954bd59505ccb2540651",
      "0xb948475e7a69fb3baff273bc3c0f82c06d8ffee27b9257dd5af7315c6e06fb9d",
      "0xe66b96af88fa9ebf776e0d76396c232085eec6a87c31d1d3c73cd88382acc233",
      "0x1a092224f2bc78542e03e2109942f77b6505be901c88b59301d84c187f474869",
      "0x616ce7c137dd42e8d74b1a71d1c3f710d77ee476b64630af9aa578040c673fc6",
      "0xfa3a71ead49f7d33f90c688c65eae3b4c97ef7c2939bad9ef9542c90d8a520ab",
      "0xcd2c66955a34adf03f9f2ab61e25a23df8f46d32cb191eff0aff0b130b3e8f3a",
      "0xc8dc0e621967852290004d1a0100119e9ad07f991b9ac27a495d73ef6d5ec362",
      "0x51b0df9351c492797a7ecd45a83e23db8edf2d9af99f7a8eb55b07bb6265e130",
      "0xf4da6d54bfb330286fd171a6df91dcf49b3b7e6a8e1f5c97c24d6de93b1f8849",
      "0x773782c7fa4c3c2068ef52c1526eb35318eb1ba80703dd6049a0c4c1b8c1ec52",
      "0x43aac532b488f7b5cf4d5432096b755f9fd41edc48b74d9948281ec4d687f9d7",
      "0x9d5eed4c7d165d2966d08f840cc73083931875ceece94f4f99503671507ca8f6",
      "0x27f0b266d0250780f2b4a69ab56d95e670acbad6a4cce55ce6b98e7ffa7098a8",
      "0xbf10d5592f072d8cafc471d569acddbbb5bae414096dbb283746f3520bd7a705",
      "0xadf5125e98d3a89c1a96c002ac0d21e54dfa3c5bd28444310c7e55ba7968fb1b",
      "0x3edd96fbc8efc46fdd83759a2236c220c880662e8c9ebd6ba98b5591d5f99540",
      "0xdd591f37dd661a56890b45af77cafe5599ae501c8258dc0ba25b1150a540b894",
      "0x8f269da6d10c62163678543a937559fcd0d821a61c1a2e50317943a630e794f7",
      "0xcf02af1b4ce278ea7e60de23440249b1370e36452cc5cc5d5b342e05016ab7a8",
      "0x321e27efec157799993f1b423b45852fea954ce690944d8a1cf10f3e9ec6da1a",
      "0xf0e4e7302e960a982661396a789b03447d9090ef0fda2baf25a7f4cc64291680",
      "0x630290112c2e23f7237255bf1d2f00680338f8ed27c58a231cde8912c9622963",
      "0x537e8fb57be0dbdb18172085aa9a7d1fadbdc941c19e213c481d007984d2312b",
      "0x716a2b4d87f4f4905707e305fd48fdfec142ad9001edfe9055d0b92e3e4731be",
      "0x7985fd28ee75590ca17abcef39acfd7572ea533629d735fcbc553875e75dc279",
      "0x0b8ce62605de616b4259b3855132fefd4e54d8f8a5f7be2b8c413125841ffaa6",
      "0x34afe95fc45615578273e644e30542002ee67d63a14b00b17f8d693a1a819b1d",
      "0x822d5825c9d6af2d5052ea82443238a5e51b869fa9c44256b196bbf9c64a801b",
      "0xc088eae280ee3ee92dc27661e58955717052e41342addc7b85279d35a0d225dc",
      "0x8136d771e25f16821f4e917ea50714d09a1a95f8b7ec12db4ccb48494a153858",
      "0xe811d264c8327280434a8e08d210c1c8d4aeca0f1c7ee4e6059d6d0a80233bc6",
      "0x02ba41537fdfc4fa40a074da7ad3191c67978c6ecd96045a2f812bc98eb9a403",
      "0xc1199a03e472a7656c2f0554d2924c56cf85027d4bad6666fdf1a042555ad4d2",
      "0x67f47ed37a844e29d2a842e24893c1ec8cf4fecd580416e63c2fb729dce055af",
      "0x280c108993984f0f782ccf0f12492b9e0ba0fb86c47556d20e9541e2f201c6c8",
      "0x014be7f1b148508cdb6539b657ea545a683fcf5ff0b9c523b1272b9d840dadb4",
      "0xd0680f3ab906995e5aeba7bec4e44cf9e2da3d9ef5382d99075870e9fea22979",
      "0xef6332d1192e411a82792c0198dc45f4ad0091defa3028a2a8c299cbd43abddf",
      "0xcf5b9e45c19510125857c3e563b457ee62396a50f1af90136349281821fa6c90",
      "0xbddfb9d3f26389ada212e2336edb4ca73be183830231376727c2cb40894b5b3a",
      "0x8780abcbfae42f2468acd4e306b02cb6b8043bdc7c2db0f8e68f873048e59abb",
      "0x3fea86657164c98324299cfa8bc97436af531e42dfa565b9d6992f460a6f62dd",
      "0x0c1c38c6a6a9e9b9fd41221c1f1d366f310d8da55366daf6eeb6ff529c4266fd",
      "0x70fc2bdb1a88ad5f2d3923db4ce669ebc4d774e4f09796627133626f7549cc6f",
      "0xe5a82deb1d7a8fc0a7b728717a6cf381c33a5278c27454be2738c7b6da50caed",
      "0x796aff156d6b31441085167f752cecf49573f857e7cdd2510ec75b0625e7f3d7",
      "0x39c0c61bab408118c34f1779933541ee1bfd77d4bc966209c05c22d9c625db37",
      "0xdba9172649edbddddd527c8e4753dc901d81ddfd9ac02e4f2ab39f54c42be155",
      "0x4b20c0e431121577038f900312a1ff4fb7db82693bef615432a3272754efa7b5",
      "0x7af243172a64fb168f9e0a7ec7f9689fad37a33ef2a9ab38f2d99dfc198aa65c",
      "0x93a1f449d2ebb401aac875bd7a6d33333d51039d6b7ff414be89aa1413b8f832",
      "0xfa594ef4d1fbde2f95f5cdcb3586c602d773049c507aaba046d38544200abfc9",
      "0xfa9aa04c374286648efe0f4e8ecccebeda80458bba5e650f830e23e6c5469e6f",
      "0x2b2fd61a6fc1798e6185fbd7e3ccf5e4709cac2e4490d10ccae90f4a7af89a59",
      "0x9eb284d3ddef9fb8b253d5739ecb61f37791309e48b201b83c39c30d36301245",
      "0xa4ad2607dd621a05c6e834e9ddffa93b753a6f8acf77bef929a7d560eb5c56ba",
      "0xedb71f387dcbf24a4a0d3fbfe7d83094d163d5f2d4d3e0be7791a317730c5a69",
      "0xcf8263887b2651a5e5c54a82e3f03845ad5f3637f94004e740af3c334341789d",
      "0x173819e7fc06c601c91600e72db71bf9b0e668f16d6ce0e3fa341ab22d6275d2",
      "0x067d71bd57d83d4ed7ca13193e2c5c6c74aefe2fae0cbc852cfdc009fc2793e3",
      "0x4dc5f11b6b82d0aa00d9efde578b6c465f5954b1e93428d9b0b98079108b1a8c",
      "0xffc890c290afd0ba7b8bd64254a0ab9465e9f0eb20c90572d12909104735af35",
      "0xec3d4f252a9c0031a34443b50e7bdeb9cc1541f22568c2f2009682adf2d8c8c9",
      "0xe6ccd2ef8339ae6c9f875dc22154b5657f9748cb22add25938c6b5080ff7c8f5",
      "0x7d7491d17f005c96c2fc27fea3dc45cc384c2d2e7db59bc2be129b67aae12640",
      "0x0c5062dc7084f0cf21616f654d2ec4e595c4da36bb3694b505242cec1076291c",
      "0x4d3dae949cfbefcffa7904f7b25eaa837692ac51df20919f2219da40e7db4087",
      "0x46838953c2b6136eafcbe3db9bf4a852e61c400a57f5e8780e5ff54f450f1baf",
      "0x09c0e6d2f37ec85a3cded264c03c50e37b326916314ed27e1adfb05a0c8fbf52",
      "0xb0c1c427d35702e39e63f516ba2e1aa9611afbf39d98e95aa28d81878090ca9c",
      "0x81f0179706708dfa0a021b54f073847a6bfdc51806f3da34df6bf03b77065279",
      "0x203a0a172e3fb98bac947f615c6ed23b662a9a280572da370391c8d12602874d",
      "0x1adbcb3c83dc4c2121ca2f0932f8ccbb7b02f50ffe324eb6fc1799a3bd132cac",
      "0x902f78c49a953da4065ba81443a6041934a7b82909b9aa6f80664fc0f6d3747b",
      "0x4c090e5dd25fcdbb18592e0e36ab284a8262c145df8b344d22fb1542789f928a",
      "0x0e60f81949852644b55fc71c64cb38ba34b8063753651fb293bbcee2cbb7de18",
      "0x48657c3fbd3651dd558617ec3dbeb2721db645d6acad754b72defc0e0dba2e71",
      "0xa65e2c4cd74da914034e865a3872008b8bc003dc2371f85db996e3345e9a8d4f",
      "0xe9f0d14895c2cdfaef85d81efba9cb856a9686026580e173dd8a77fd93e668a9",
      "0x335dabe9cf4743219f7e46cf56fb93b2bc391aaf3490244757f95baa0f5cb3ee",
      "0x53184e8914333ccfa5cbd79104381dc8b0970425b37647d933f6fded0cd20512",
      "0xdcb8c4b03eeb541fcf62b27339bfd7887a9072fdad2604fe8c201e42396a8c1c",
      "0x92cc5b4c23c52ccb7e13e696131140f8123e3e084042cddbd4589269f7bcad73",
      "0x8c51a81f08f88a9a4fead2fa44b4d2d01afd8df88ae5b9aed48836109998977e",
      "0xa3cda8c96c9d6744b4e41478cfeed3b1ea8e59d0e02925d81796db222ed0322d",
      "0x5b766fe54639a3f44fef92a5d2a1543fdd64da9417dd0ead97fa59ac19b4271d",
      "0x8e8135278dd8bff8bc00ab5060e8f99d2fd7c6c3913cedc74d0599babb793a86",
      "0x92d703b46d8a631b24f9407ea840cb24909f3f51c2e3352d848a4a7f1c2aea0b",
      "0x10c5f8dcaf6539dcceeaa40cd1f2a179fe9107f17d7bd26b7da8c24175a780a6",
      "0x347d5f17889d8f8cf2653791bfb55808df04b74450481e96b9221ba8933394ca",
      "0xc258a2fa2fbcb770b09f7cc67da2844b7d4cfbfe66e22fc16675f8068ac59570",
      "0x04cded61939429fc52f73b47e364920e56d8e884035dfb3f1cc2bd299150c577",
      "0x8c898b5ca0fd1f50a1ec9b98137031c55db88ec2ce63fdcd146f8cfe13c67905",
      "0xaaeae1a476621d0c759c42fbe054b064820b6d5474118a25cd033ccaebbd66be"
    ],
    "difficulty": "0x0",
    "extraData": "0x506f776572656420627920626c6f58726f757465",
    "gasLimit": "0x1c9c380",
    "gasUsed": "0x1c92f0c",
    "logsBloom": "0x02b429414c945297cb070e118446c367d7330231d91882e75081760002280108d0dd65740001018a325e8408692c0a1e42120382294820010e64170820b681c4851806b10105e33c201efcb885b1257ebd1129bb996288090814848010482a3913104120cb0a714c4405042129084861c37e28858c808440474084ba810cc89c905a2a063143730f20591321610e0a43a90534dea25050fc9920a870293810a88f21bf908858c51c8062c8f271168111ca535e808ed18ca36c023082d682d8e4e64181270670302a4924f8435805521a005e20e60dc89014af2a886e5de56b76dc1fa3ea3943a220021c300747414c1009ba48220ad81c4082859290206115c1",
    "miner": "0x388c818ca8b9251b393131c08a736a67ccb19297",
    "mixHash": "0x844a8382c76346a82e69c8f81a0fdb10f9a6c57a5de95df42857184593e675be",
    "nonce": "0x0000000000000000",
    "parentHash": "0x6f207bcfe8afb73f9b21fc8bb2ad36724d4f46aedf63bc6f0341002688493c99",
    "receiptsRoot": "0x36bc53a918e7a802324af5f76380536caaeb52c3a6d6c0ab6a73ab7d1643a773",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "size": "0x6520",
    "stateRoot": "0x51b6d009dbd487d279a2efdc3385ef38cec4124e5a700da200d01062fad3bb16",
    "timestamp": "0x63e536bb",
    "totalDifficulty": "0xc70d815d562d3cfa955",
    "transactionsRoot": "0xb131c71d64da16a3ac789decc230fe6d565571b8c6d89991582e338711bee223",
    "uncles": [],
    "baseFeePerGas": "0x120e61b4c1"
  }
}`;

const REQUEST_PARAMS: RequestParamProp = [
  {
    paramName: "blockHash",
    type: "string",
    paramDescription: 'The block hash.',
  },
  {
    paramName: "index",
    type: "string",
    paramDescription: ' The uncle\'\'s index position (in hex).'
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
    paramDescription:
      "A block object with the following fields, or null when no block was found.",
    childrenParamsType: "object",
    childrenParams: [
      {
        paramName: "nonce",
        type: "string",
        paramDescription:
          "8 Bytes - hash of the generated proof-of-work, null when its pending block.",
      },
      {
        paramName: "hash",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block, null when its pending block.",
      },
      {
        paramName: "baseFeePerGas",
        type: "string",
        paramDescription:
          "32 Bytes - hash of the block, null when its pending block.",
      },
      {
        paramName: "number",
        type: "string",
        paramDescription:
          "The block number, null when its pending block.",
      },
      {
        paramName: "parentHash",
        type: "string",
        paramDescription: "32 Bytes - hash of the parent block.",
      },
      {
        paramName: "sha3Uncles",
        type: "string",
        paramDescription:
          "32 Bytes - SHA3 of the uncles data in the block.",
      },
      {
        paramName: "logsBloom",
        type: "string",
        paramDescription:
          "256 Bytes - the bloom filter for the logs of the block, null when its pending block.",
      },
      {
        paramName: "transactionsRoot",
        type: "boolean",
        paramDescription:
          "32 Bytes - the root of the transaction trie of the block.",
      },
      {
        paramName: "stateRoot",
        type: "array_of_strings",
        paramDescription:
          "32 Bytes - the root of the final state trie of the block.",
      },
      {
        paramName: "receiptsRoot",
        type: "string",
        paramDescription:
          "32 Bytes - the root of the receipts trie of the block.",
      },
      {
        paramName: "miner",
        type: "string",
        paramDescription:
          "20 Bytes - the address of the beneficiary to whom the mining rewards were given.",
      },
      {
        paramName: "difficulty",
        type: "string",
        paramDescription:
          "Integer of the difficulty for this block.",
      },
      {
        paramName: "totalDifficulty",
        type: "string",
        paramDescription:
          "Integer of the total difficulty of the chain until this block.",
      },
      {
        paramName: "extraData",
        type: "string",
        paramDescription:
          "The \"extra data\" field of this block.",
      },
      {
        paramName: "size",
        type: "string",
        paramDescription:
          "Integer the size of this block in bytes.",
      },
      {
        paramName: "gasLimit",
        type: "string",
        paramDescription:
          "The maximum gas allowed in this block.",
      },
      {
        paramName: "timestamp",
        type: "string",
        paramDescription:
          "The unix timestamp for when the block was collated.",
      },
      {
        paramName: "transactions",
        type: "string",
        paramDescription:
          "Array of transaction objects, or 32 Bytes transaction hashes depending on the last given parameter.",
      },
      {
        paramName: "uncles",
        type: "string",
        paramDescription:
          "Array of uncle hashes.",
      },
    ],
  },
];

const USE_CASES = [
  "Retrieve uncle block details by block hash and index",
  "Analyze uncle blocks for network fork occurrences",
  "Verify uncle block data for blockchain validation",
];

const CONSTRAINTS = [
  "Requires valid block hash and index",
  "Node synchronization with blockchain necessary",
  "Accurate hash and index input needed",
];
