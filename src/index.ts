import express from "express";

const app =  express();

// Initial balances for ETH and USDC - here considering a liquidity pool with 200 ETH and 700000 USDC
const ETH_BALANCE = 200;
//if you think the price of ETH won't change in few years you can create pool here, else will get impermanent loss
const USDC_BALANCE = 700000; // the price of USDC/USDT mainly doesn't change

// app.post("/add-liquidity", (req, res) => {

// })

// trying to buy eth with usdc
//when there are more buyers than sellers price will go up
app.post("/buy-asset", (req, res) => {
  
})

//when there are more sellers than buyers price will go down
app.post("/sell-asset", (req, res) => {
  
})

app.post("/quote", (req, res) => {
  
})