export function cleanup(rawString: string) {
  return rawString.split(`\n`).join(`<br/>`);
}
