import { Keypair } from "@solana/web3.js";
import { ethers } from "ethers";
import bs58 from "bs58";
import dotenv from 'dotenv';
dotenv.config();
const keypair = Keypair.fromSecretKey(bs58.decode(process.env.SOL_PRIVATE_KEY!));
const eth = new ethers.Wallet(process.env.ETH_PRIVATE_KEY!);

console.log(keypair.publicKey.toString())
console.log(eth.address);