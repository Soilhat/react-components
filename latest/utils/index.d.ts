import { default as React } from '../../node_modules/react';
declare const getChildrenOnDisplayName: (children: React.ReactNode, displayName: string) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>[] | null | undefined;
declare const getChildrenExcludingDisplayName: (children: React.ReactNode, displayNames: string[]) => (string | number | bigint | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined>)[] | null | undefined;
declare function genId(): string;
export { getChildrenOnDisplayName, getChildrenExcludingDisplayName, genId };
