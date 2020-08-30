require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remain erosion imitate prison fortune twin'; 
let testAccounts = [
"0x177095fb529bf163f8695345383fa311e6f3b92d5234758b14d76f5c36a3ba5e",
"0x6f6f463ff39981637d5b4e5455d7e965759ecb99d0fdabd84c4531d814caa35d",
"0x7674e77efdaff1dd592fc7248cbe1b2bf46ff9c352c8c547c5cf11dd8d848542",
"0x08966990e9993ae19416f0d5936f9e11a6d356f3da91fd4c39c6684f62262384",
"0x8a8176d0cc4db22017be7f898fca76e6f0e28d0a5ab94bb450c7ff9726363903",
"0x1b55067e2b8b3cbcc4da55c6e5993bdd3250a308402f8042ea2b0def693dd186",
"0x412383e2204e345e15de908f308e5758bdc486fb5f45085aeebb873b99340de4",
"0xf41ed9b7fc03e39b8a9a84364c4d4daea68772f4bc7b7c690c3394287eb03c8b",
"0x7767696d5b428335b13ab885157a1749a68585c65268ea1b26f43916a87570e7",
"0x77501b062d86400eaa6c856c40fc073aa027c95a6c2e18e65ef328aac0a78422"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
