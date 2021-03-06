"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LendingPool__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getUserAccountData",
        outputs: [
            {
                internalType: "uint256",
                name: "totalCollateralETH",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "totalDebtETH",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "availableBorrowsETH",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "currentLiquidationThreshold",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "ltv",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "healthFactor",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class LendingPool__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.LendingPool__factory = LendingPool__factory;
LendingPool__factory.abi = _abi;
