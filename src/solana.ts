import * as _solana from "@wormhole-foundation/sdk-solana";
/** Platform and protocol definitons for Solana */
const solana = {
  Address: _solana.SolanaAddress,
  Platform: _solana.SolanaPlatform,
  getSigner: _solana.getSolanaSignAndSendSigner,
  protocolLoaders: {
    core: () => import("@wormhole-foundation/sdk-solana-core"),
    tokenbridge: () => import("@wormhole-foundation/sdk-solana-tokenbridge"),
    cctp: () => import("@wormhole-foundation/sdk-solana-cctp"),
  },
};
export default solana;