const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(index, timestamp, data, previousHash = "") {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash).toString();
	}
}

class Chain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock() {
		return new Block(0, "01/01/2018", "Genesis Block", "0");
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		console.log(JSON.stringify(this.getLatestBlock));
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}
}

var chichiCoin = new Chain();

console.log(JSON.stringify(chichiCoin));

chichiCoin.addBlock(new Block(1, "17/02/2018", {message: "Muddu ke bable gol gol!!"}));
console.log(JSON.stringify(chichiCoin));
chichiCoin.addBlock(new Block(2, "18/02/2018", {message: "Hum bhi gol tum bhi gol saari duniya gol gol!!"}));
console.log(JSON.stringify(chichiCoin));
chichiCoin.addBlock(new Block(3, "19/02/2018", {message: "Pappa ka paisa gol gol!!"}));
console.log(JSON.stringify(chichiCoin));
chichiCoin.addBlock(new Block(4, "20/02/2018", {message: "Mummy ki roti gol gol!!"}));

console.log(JSON.stringify(chichiCoin));
