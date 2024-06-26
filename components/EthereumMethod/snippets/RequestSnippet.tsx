import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import highlightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark";
import classes from "./RequestSnippet.module.css";
import React from "react";
import Image from "next/image";
import IconCopy from "components/icons/IconCopy.svg";
import { Group } from "@mantine/core";
import { CodeSnippetObject } from "../types";
import { Text } from "../../Text";
import { useCopyString } from "../../hooks/useCopyString";

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/539
const SyntaxHighlighter =
  Prism as typeof React.Component<SyntaxHighlighterProps>;

type Props = {
  snippet: string;
  language: CodeSnippetObject["language"];
};

export function RequestSnippet({ snippet, language }: Props) {
  let { copy } = useCopyString({ value: snippet });

  let lang = React.useMemo(() => {
    switch (language) {
      case "js":
      case "node":
        return "javascript";
      case "shell":
        return "bash";
      default:
        return language;
    }
  }, [language, snippet]);

  return (
    <section className={classes.root}>
      <header className={classes.header}>
        <Group>
          <Text size="xs" color="grayLike" uppercase>
            Request
          </Text>
        </Group>
        <div className={classes.examplesWrap}>
          <Text size="xs" color="grayLike" uppercase asBlock>
            Examples
          </Text>
        </div>
      </header>

      <section className={classes.codeHighlight}>
        <SyntaxHighlighter
          language={lang}
          style={highlightStyle}
          lineProps={{
            style: {
              wordBreak: "break-all",
              whiteSpace: "pre-wrap",
              fontSize: "14px",
            },
          }}
          wrapLines={true}
          customStyle={{
            backgroundColor: "#323b41",
            padding: 0,
          }}
        >
          {snippet}
        </SyntaxHighlighter>
      </section>

      <footer className={classes.footer}>
        <span className={classes.iconCopy} onClick={copy}>
          <Image src={IconCopy} alt={"Copy"} width={24} height={24} />
        </span>
      </footer>
    </section>
  );
}
