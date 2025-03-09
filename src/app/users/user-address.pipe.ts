import { Pipe, PipeTransform } from "@angular/core";
import { Address } from "./user.type";

@Pipe({
  name: "userAddress",
})
export class UserAddressPipe implements PipeTransform {
  transform(address: Address): unknown {
    return `${address.city}, ${address.street} | ${address.zipcode}`;
  }
}
