export const repeatContent = (content: string, quantity: number): string => {
  return new Array(quantity).fill(content).join(' ');
};
