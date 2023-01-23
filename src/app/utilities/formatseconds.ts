export function formatseconds(input: number): string {
    let stringinput: string = input.toString();
    let decimalpart: string = stringinput.split(".")[1];
    if (decimalpart != undefined) {
      if (decimalpart.length === 0) {
        stringinput += "000";
      }
      else if (decimalpart.length === 1) {
        stringinput += "00";
      }
      else if (decimalpart.length === 2) {
        stringinput += "0";
      }
    }
    return stringinput;
}