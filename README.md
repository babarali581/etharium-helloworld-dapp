

## Create env file 

DEV_API_URL = "Add Value"
PRIVATE_KEY = "Add Value"
PUBLIC_KEY = "Add Value"


## COMPILE OUR CONTRACT


npx hardhat compile

You might get a warning about SPDX license identifier not provided in source file , but no need to worry about that — hopefully everything else looks good! If not, you can always message in the Alchemy discord.

## DEPLOY OUR CONTRACT

npx hardhat run scripts/deploy.js --network ropsten
 
You should then see something like


Contract deployed to address: 0x6cd7d44516a20882cEa2DE9f205bF401c0d23570


##Documentation 

https://ethereum.org/en/developers/tutorials/hello-world-smart-contract/