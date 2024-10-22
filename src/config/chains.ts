import { networks } from '@safe-global/protocol-kit/dist/src/utils/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

const chains = networks.reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})
const ChainLogos = {
  [chains['kakarot']]: 'public/images/kakarot_logo.svg',
}

export const getChainLogo = (chainId: string) => {
  return ChainLogos[chainId]
}

export default chains
