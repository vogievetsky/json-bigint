export interface ParseOptions {
    strict: boolean;
    storeAsString: boolean;
    protoAction: 'preserve' | 'ignore' | 'error';
    constructorAction: 'preserve' | 'ignore' | 'error';
}

export function parse(text: string, reviver?: (this: any, key: string, value: any) => any, options?: ParseOptions): any;
export function stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
