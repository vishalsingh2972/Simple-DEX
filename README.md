# Simple DEX
## Decentralized Exchange (DEX) Prototype using Node.js + Express

DEXs emerged as a response to the centralized control offered by platforms like Binance, WazirX, CoinDCX and Coinbase. Unlike these centralized exchanges that hold user assets, DEXs operate on a peer-to-peer basis. This means traders retain complete ownership of their cryptocurrencies, which are stored in personal wallets (often referred to as cold storage). DEXs facilitate direct asset swaps between users without intermediaries, ensuring that we always have full control over our funds.

This repository contains a basic prototype of a decentralized exchange (DEX) implemented using Node.js and Express. The DEX allows users to buy and sell assets (in this case, Ethereum and USDC) in a decentralized manner. It includes functionalities for adding liquidity, buying assets, and selling assets.

## Features

- **Add Liquidity:** Users can add liquidity to the exchange by providing assets (e.g., Ethereum and USDC).
- **Buy Assets:** Users can buy assets (e.g., Ethereum) from the exchange using USDC.
- **Sell Assets:** Users can sell assets (e.g., Ethereum) to the exchange in exchange for USDC.
- **Quote:** Users can obtain a price estimate for a desired asset (e.g., Ethereum) by specifying the asset and quantity they wish to purchase using another asset (e.g., USDC).

## Technologies Used

- Node.js
- Express
- TypeScript

```diff
- Note: This is a simplified prototype for educational and experimental purposes. It does not represent a fully functional or secure DEX for production use.
```



