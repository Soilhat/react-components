import React from 'react';

const getChildrenOnDisplayName = (children: React.ReactNode, displayName: string) =>
  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type && typeof child.type === 'function') {
      const type = child.type as { displayName?: string };
      return type.displayName === displayName ? child : null;
    }
    return null;
  });

const getChildrenExcludingDisplayName = (children: React.ReactNode, displayNames: string[]) =>
  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type && typeof child.type === 'function') {
      const type = child.type as { displayName?: string };
      return displayNames.includes(type.displayName ?? '') ? null : child;
    }
    return child;
  });

function genId(): string {
  return globalThis.crypto.randomUUID();
}

export { getChildrenOnDisplayName, getChildrenExcludingDisplayName, genId };
