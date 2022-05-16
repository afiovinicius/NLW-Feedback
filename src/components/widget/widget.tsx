import { cWidget } from "./style";
import { ChatTeardropDots } from "phosphor-react";
import * as Popover from "@radix-ui/react-popover";
import { globalStyles } from "../../styles/global";

export function Widget() {
  globalStyles();
  return (
    <Popover.Root>
      <Popover.Trigger className={cWidget()}>
        <div className="btnSolid">
          <ChatTeardropDots size={24} />
          <span className="bw_text">Feedback</span>
        </div>
      </Popover.Trigger>
      <Popover.Content>
        <p>Hello Word</p>
      </Popover.Content>
    </Popover.Root>
  );
}
