import { Button } from "./button";

export class PCButton implements Button {
    render(): void {
      console.log("Rendering PC Button");
    }
  }