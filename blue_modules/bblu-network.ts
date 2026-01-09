/**
 * BBLU (Bitcoin-Blu) Network Configuration
 * 
 * Network parameters for Bitcoin-Blu:
 * - Coin type: 4,353,123 (0x80426c63)
 * - Bech32 HRP: "bb"
 * - Address prefixes:
 *   - P2PKH: 0x19 (25)
 *   - P2SH: 0x56 (86)
 *   - WIF: 0xbc (188)
 * - BIP32:
 *   - Public: 0x0488B31F
 *   - Private: 0x0488AFE5
 */

import { Network } from 'bitcoinjs-lib';

export const bbluNetwork: Network = {
  messagePrefix: '\x1ABitcoinBlu Signed Message:\n',
  bech32: 'bb',
  bip32: {
    public: 0x0488b31f,
    private: 0x0488afe5,
  },
  pubKeyHash: 0x19, // 25 - P2PKH address prefix
  scriptHash: 0x56, // 86 - P2SH address prefix
  wif: 0xbc,        // 188 - Private key WIF prefix
};

// BIP44 Coin Type
export const BBLU_COIN_TYPE = 4353123; // 0x80426c63
export const BBLU_COIN_TYPE_STRING = "4353123'";

// Bech32 prefix for addresses (bb1)
export const BBLU_BECH32_PREFIX = 'bb1';

// URI scheme
export const BBLU_URI_SCHEME = 'bitcoinblu';

// Symbol
export const BBLU_SYMBOL = 'BBLU';

// Network ports
export const BBLU_P2P_PORT = 8343;
export const BBLU_RPC_PORT = 8342;

