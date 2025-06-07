/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider & {
      request: (args: { method: string; params?: Array<any> }) => Promise<any>;
    };
  }
}
