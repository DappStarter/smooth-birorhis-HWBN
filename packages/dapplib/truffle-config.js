require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hidden swift trip lizard raise place evil include drive fresh gesture'; 
let testAccounts = [
"0xb784879b6349895e2bbd82adeef4d7a7367a79aa2fe36c33ed9cb4ef9936e311",
"0x18cabe0479d60dd095ae93124afd5f3f60185b40c53a9a4f378f4113742cb13a",
"0x11c9174f49befda150c0cc40229e7f33425f864227aeee44776c67f45dbedf56",
"0xd11977e11d43c28f35ea089eb0b06c7726af5a2b2eb70475a8dfc9d9a299e6ac",
"0x1e6c7d667280031cb61d24ae10f2b4310ff57ca70937bf7fb46c7469178e58a9",
"0x6a287515f585d44f6882d754657b30bd1207e1ea52caa83aa23ae30e18d911c1",
"0x5954a3bf217b7c3c51cbadddc444d2d42cc1d11807dceabab3a0e6c40c51c3d9",
"0x0f8385c2052bc23e31d9a5a19e850f0b7a0872889146d84eebfcc8f49a18355a",
"0x878b574632625f82bba5c25902cb8688c0da42464c7478b668e0925311242ad9",
"0xa45bba1f99cc2b791570d8022c0a266b429143292572a69e7fb5ec24b6ecbfcd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

