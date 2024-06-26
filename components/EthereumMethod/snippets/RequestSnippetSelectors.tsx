import { Grid, Group } from "@mantine/core";
import classes from "./RequestSnippetSelectors.module.css";
import cx from "clsx";
import { CodeSnippetObject } from "../types";
import { getLanguageName } from "../getLanguageName";
import { Text } from "../../Text";
import { IconLanguage } from "../../icons/IconLanguage";

type Props = {
  snippets: CodeSnippetObject[];
  snippet: string;
  setSnippet: React.Dispatch<React.SetStateAction<string>>;
};

export function RequestSnippetSelectors({
  snippets,
  snippet,
  setSnippet,
}: Props) {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Text uppercase size={"xs"} fontWeight="medium" color={"grayLike"}>
          Language
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <Group justify="space-between">
          {snippets.map((snippetObj, index) => (
            <button
              key={index}
              onClick={() => setSnippet(snippetObj.language)}
              className={cx(
                classes.button,
                snippet === snippetObj.language && classes.buttonActive
              )}
            >
              <span>
                <IconLanguage language={snippetObj.language} />
              </span>

              <Text size={"xs"} fontWeight="medium">
                {getLanguageName(snippetObj.language)}
              </Text>
            </button>
          ))}
        </Group>
      </Grid.Col>
    </Grid>
  );
}
