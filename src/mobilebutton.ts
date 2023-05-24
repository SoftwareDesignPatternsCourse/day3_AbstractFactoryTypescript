import { Button } from "./button";

export class MobileButton implements Button {
    render(): void {
      console.log("Rendering Mobile Button");
    }
  }