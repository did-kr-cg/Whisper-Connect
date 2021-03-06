import { AbiItem } from 'web3-utils';
// import { AbiCoder } from 'web3-eth-abi';
const Web3EthAbi = require('web3-eth-abi');

/*
pragma solidity >=0.4.22 <0.7.0;

contract WC {
     // _type = sha256(type), _hash = sha256(byte2hex(msgpock({nonce, timestamp, parms}))
    function register(bytes32 _type, bytes32 _hash) public {
      // dummy function
    }
    function authenticate(bytes32 _type, bytes32 _hash) public {
      // dummy function
    }
    function credencial(bytes32 _type, bytes32 _hash) public {
      // dummy function
    }
    function presentation(bytes32 _type, bytes32 _hash) public {
      // dummy function
    }
    // function contract(address _contractAddress, byte32 _hash)
    // function transfer(address _token, address _to, byte32 _hash)
}
*/

const abi: AbiItem[] = [
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_type',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32'
			}
		],
		name: 'authenticate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_type',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32'
			}
		],
		name: 'credencial',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_type',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32'
			}
		],
		name: 'presentation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_type',
				type: 'bytes32'
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32'
			}
		],
		name: 'register',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

interface Abi { [index: string]: AbiItem }
interface Topic { [index: string]: { name: string, abi: AbiItem } }

const ABI: Abi = {};
const TOPIC: Topic = {};

/*
const ABI: Abi = {};
const TOPIC: Topic = {};
const abiCoder = new AbiCoder();

for(let i = 0; i < abi.length; i++) {
  ABI[abi[i].name!.toUpperCase()] = abi[i];
  TOPIC[abiCoder.encodeFunctionSignature(abi[i])] = {
    name: abi[i].name!.toUpperCase(),
    abi: abi[i],
  };
}
*/

for(let i = 0; i < abi.length; i++) {
  ABI[abi[i].name!.toUpperCase()] = abi[i];
  TOPIC[Web3EthAbi.encodeFunctionSignature(abi[i])] = {
    name: abi[i].name!.toUpperCase(),
    abi: abi[i],
  };
}

export { ABI, TOPIC };
