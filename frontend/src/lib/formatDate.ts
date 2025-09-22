// lib/formatDate.ts
// Utility to format timestamps for display.

export function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  