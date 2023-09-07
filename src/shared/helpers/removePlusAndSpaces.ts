export function removePlusAndSpaces({ inputString, removeSpace = false, removePlus = false }: { inputString: string; removeSpace?: boolean; removePlus?: boolean }): string {
  if (removeSpace) {
    inputString = inputString.replace(/\s/g, "");
  }
  if (removePlus) {
    inputString = inputString.replace(/\+/g, "");
  }
  return inputString;
}
