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
  // Prefer built-in secure randomUUID if available
  const cryptoObj = (
    globalThis as unknown as {
      crypto?: { randomUUID?: () => string; getRandomValues?: (buf: Uint8Array) => Uint8Array };
    }
  ).crypto;
  if (cryptoObj && typeof cryptoObj.randomUUID === 'function') {
    return cryptoObj.randomUUID();
  }

  // Use getRandomValues to create RFC4122 v4 UUID when available
  if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
    const bytes = new Uint8Array(16);
    cryptoObj.getRandomValues(bytes);
    // Set version and variant bits per RFC 4122
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex: string[] = [];
    for (let i = 0; i < bytes.length; i++) {
      hex.push((bytes[i] + 0x100).toString(16).slice(1));
    }
    return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`;
  }

  // Fallback to Math.random-based UUID (least secure)
  let d = Date.now();
  let d2 = (typeof performance !== 'undefined' && performance.now && Math.floor(performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0;
    if (d > 0) {
      r = ((d + r) % 16) | 0;
      d = Math.floor(d / 16);
    } else {
      r = ((d2 + r) % 16) | 0;
      d2 = Math.floor(d2 / 16);
    }
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export { getChildrenOnDisplayName, getChildrenExcludingDisplayName, genId };
