import { ethers } from "ethers";
import WebpageStorageABI from "../artifacts/contracts/WebpageStorage.sol/WebpageStorage.json";

const contractAddress = "0x08066fbD2683776bA7f30Cd991429d634bdCFD28";

export async function getContract() {
  if (!window.ethereum) {
    throw new Error("Please install MetaMask!");
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, WebpageStorageABI.abi, signer);
}

export async function storeWebpage(domain: string, cid: string): Promise<string> {
  const contract = await getContract();
  const tx = await contract.storeWebpage(domain, cid);
  await tx.wait();
  return tx.hash;
}

export async function getWebpage(domain: string): Promise<{
  cid: string;
  owner: string;
  timestamp: Date;
}> {
  const contract = await getContract();
  const [cid, owner, timestamp] = await contract.getWebpage(domain);
  return {
    cid,
    owner,
    timestamp: new Date(timestamp.toNumber() * 1000),
  };
}

export async function getUserWebpages(address: string): Promise<string[]> {
  const contract = await getContract();
  return contract.getUserWebpages(address);
}

export async function createProposal(description: string): Promise<string> {
  const contract = await getContract();
  const tx = await contract.createProposal(description);
  await tx.wait();
  return tx.hash;
}

export async function vote(proposalId: number, support: boolean): Promise<string> {
  const contract = await getContract();
  const tx = await contract.vote(proposalId, support);
  await tx.wait();
  return tx.hash;
}

export async function executeProposal(proposalId: number): Promise<string> {
  const contract = await getContract();
  const tx = await contract.executeProposal(proposalId);
  await tx.wait();
  return tx.hash;
}
