import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatInputCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function parseCurrency(text: string): number {
  if (typeof text === "number") return text;
  if (typeof text !== "string") return 0;
  // Remove everything except digits
  const cleanValue = text.replace(/\D/g, "");
  return parseFloat(cleanValue) / 100 || 0;
}

export function formatInputPercent(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(value);
}

export function parsePercent(text: string): number {
  if (typeof text === "number") return text;
  if (typeof text !== "string") return 0;
  // Replace comma with dot for parsing
  const cleanValue = text.replace(/\./g, "").replace(",", ".");
  return parseFloat(cleanValue) || 0;
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "N/A";
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day).toLocaleDateString("pt-BR");
  } catch {
    return "N/A";
  }
}
