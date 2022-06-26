import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LendingPoolInterface extends utils.Interface {
    functions: {
        "getUserAccountData(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getUserAccountData", values: [string]): string;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    events: {};
}
export interface LendingPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LendingPoolInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
    };
    getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
    }>;
    callStatic: {
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralETH: BigNumber;
            totalDebtETH: BigNumber;
            availableBorrowsETH: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getUserAccountData(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
