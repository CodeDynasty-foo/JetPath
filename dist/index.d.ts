import { type jetOptions } from "./primitives/types.js";
export { JetPlugin } from "./primitives/plugin.js";
import { JetPlugin } from "./primitives/plugin.js";
export declare class JetPath {
    server: any;
    private listening;
    private options;
    private plugs;
    constructor(options?: jetOptions);
    use(plugin: JetPlugin): void;
    listen(): Promise<void>;
}
export type { AppCTX, JetSchema } from "./primitives/types.js";
