import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

// Initial balances for ETH and USDC - here considering a liquidity pool with 200 ETH and 700000 USDC
let ETH_BALANCE = 200;
//if you think the price of ETH won't change in few years you can create pool here, else will get impermanent loss
let USDC_BALANCE = 700000; // the price of USDC/USDT mainly doesn't change

app.post('/add-liquidity', (req, res) => {
  const ETH_amount_Added = req.body.ethAmount;
  const USDC_amount_Added = req.body.usdcAmount;

  // updated ETH and USDC balances
  ETH_BALANCE += ETH_amount_Added;
  USDC_BALANCE += USDC_amount_Added;

  // send response
  res.json({
    message: `${ETH_amount_Added} ETH and ${USDC_amount_Added} USDC has been added to the liquidity pool.`,
    ETH_BALANCE, // Updated ETH balance
    USDC_BALANCE // Updated USDC balance
  });
});

// trying to buy eth with usdc
//when there are more buyers than sellers price will go up
app.post("/buy-asset", (req, res) => {
  //const product = ETH_BALANCE * USDC_BALANCE;
  const quantity = req.body.quantity;

  const updated_ETH_quantity = ETH_BALANCE - quantity;
  const updated_USDC_balance = (ETH_BALANCE * USDC_BALANCE) / updated_ETH_quantity;

  const paidAmount = updated_USDC_balance - USDC_BALANCE;
  ETH_BALANCE = updated_ETH_quantity;
  USDC_BALANCE = updated_USDC_balance

  res.json({
    message: `You paid ${paidAmount} USDC for ${quantity} ETH`
  })
})

//when there are more sellers than buyers price will go down
app.post("/sell-asset", (req, res) => {
  const quantity = req.body.quantity;

  const updated_ETH_quantity = ETH_BALANCE + quantity;
  const updated_USDC_balance = (ETH_BALANCE * USDC_BALANCE) / updated_ETH_quantity;

  const recievedAmount = USDC_BALANCE - updated_USDC_balance;
  ETH_BALANCE = updated_ETH_quantity;
  USDC_BALANCE = updated_USDC_balance

  res.json({
    message: `You recieved ${recievedAmount} USDC for ${quantity} ETH`
  })
})

app.post("/quote", (req, res) => {
  const quantity = req.body.quantity;
  const type = req.body.type;
  //console.log(type);

  if (type === 'buy') {
    const updated_ETH_quantity = ETH_BALANCE - quantity;
    const updated_USDC_balance = (ETH_BALANCE * USDC_BALANCE) / updated_ETH_quantity;
    const paidAmount = updated_USDC_balance - USDC_BALANCE;
    res.json({
      message: `You will pay ${paidAmount} USDC for ${quantity} ETH`
    });
  }
  else if (type === 'sell') {
    const updated_ETH_quantity = ETH_BALANCE + quantity;
    const updated_USDC_balance = (ETH_BALANCE * USDC_BALANCE) / updated_ETH_quantity;
    const receivedAmount = USDC_BALANCE - updated_USDC_balance;
    res.json({
      message: `You will receive ${receivedAmount} USDC for ${quantity} ETH`
    });
  }
  else {
    res.status(400).json({
      message: "Invalid type. Please specify 'buy' or 'sell'."
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});