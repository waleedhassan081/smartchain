Name: Waleed Hassan
Project Name: SmartChain
Dependencies: 
- Node Version v18.3.0
- Typescript compiler version 4.7.3
Follow following steps to run the project successfully:
1. Clone the project
2. change the .example.env file to .env file and add the APP_KEY
3. APP_KEY can get from etherscan.io
4. Run this command to install the packages 'npm install'
5. To run the project use this command 'npm run dev'
5. The project will start running on PORT:3000 
6. The Api to get the balance will work on the following url 'http://localhost:3000/v1/account/balance' and it's a post api.
7. The following will be the body of the api. 

{
    "address":[
      "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
      "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
      "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
      "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4"     
    ],
    "tag":"latest"
}

8. The following will be the api response and balance will be in ETH format,

{
    "message": "success",
    "address": [
        {
            "account": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae",
            "balance": "40.424500011777"
        },
        {
            "account": "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
            "balance": "0.637657413738832276"
        },
        {
            "account": "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
            "balance": "0.000000000000042"
        },
        {
            "account": "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
            "balance": "0"
        }
    ],
    "totalBalance": 41.06215742551587
}


Note: In this project I have used Typescript + Express Node js framework
