import { ethers } from "ethers";
import genericErc20Abi from '../data/ERC20ABI.json'

export const getContractInstance = (contractAddress) => {
    const { InfuraProvider } = ethers.providers
    const tempInfuraProvider = new InfuraProvider('homestead', process.env.REACT_APP_INFURA_PROJECT_ID)
    return new ethers.Contract(contractAddress, genericErc20Abi, tempInfuraProvider);
}