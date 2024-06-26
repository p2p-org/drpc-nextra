import { notifications } from "@mantine/notifications";
import React from "react";

type Props = {
  value: string;
};

export function useCopyString({ value }: Props) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copy = React.useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      notifications.show({
        message: "Value copied to clipboard",
      });
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  }, [value]);

  return { isCopied, copy };
}
