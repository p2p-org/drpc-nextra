import { Inter } from "next/font/google";
import { Grid, Group } from "@mantine/core";
import { CodeSnippetObject, TParamType } from "./types";
import { RequestParamProp, RequestParams } from "./params/RequestParams";
import { ResponseParam, ResponseParams } from "./params/ResponseParams";
import React from "react";
import { Text } from "../Text";
import { UseCases } from "./useCases/UseCases";
import { Constraints } from "./constraints/Constraints";
import { GetStarted } from "./getStarted/GetStarted";
import { RequestSnippetSelectors } from "./snippets/RequestSnippetSelectors";
import { RequestSnippet } from "./snippets/RequestSnippet";
import { RequestResponseJSON } from "./params/RequestResponseJSON";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  // Simple types
  method: string;
  network: string;
  cu: number;
  description: string;
  useCases: string[];
  constraints: string[];
  responseJSON: string;

  // Complex types
  codeSnippets: CodeSnippetObject[];
  requestParams: RequestParamProp;
  requestParamsType: TParamType;

  responseParams: ResponseParam[];
  responseParamsType: TParamType;
  responseParamsDescription?: string;
};

export default function EthereumMethod({
  method,
  network,
  cu,
  description,
  useCases,
  constraints,
  codeSnippets,
  responseJSON,
  requestParams,
  requestParamsType,
  responseParams,
  responseParamsType,
  responseParamsDescription,
}: Props) {
  const [snippet, setSnippet] = React.useState<CodeSnippetObject["language"]>(
    codeSnippets?.[0]?.language || null
  );

  const snippetCode = React.useMemo(() => {
    return codeSnippets.find((s) => s.language === snippet)?.code() || null;
  }, [codeSnippets, snippet]);

  const snippetLanguage = React.useMemo(() => {
    return codeSnippets.find((s) => s.language === snippet)?.language || null;
  }, [codeSnippets, snippet]);

  return (
    // Note: <main> already has pt 1rem, so we add 14px to match 30px from the design
    <Grid className={inter.className} gutter={20} pt={14}>
      <Grid.Col span={12} pt={0}>
        <Group justify="start" mb={10}>
          <Text fontWeight="semibold" size={"lg"}>
            {method} - <Text capitalize>{network}</Text>{" "}
            <Text opacity={0.5}>[Value: {cu}CU]</Text>
          </Text>
        </Group>

        <Group justify="start">
          <Text size="sm" color="gray">
            {description}
          </Text>
        </Group>
      </Grid.Col>

      <Grid.Col span={12}>
        <Grid>
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <UseCases list={useCases} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <Constraints list={constraints} />
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col span={12}>
        <GetStarted />
      </Grid.Col>

      <Grid.Col span={12}>
        <RequestSnippetSelectors
          snippets={codeSnippets || []}
          snippet={snippet}
          setSnippet={setSnippet}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <RequestSnippet snippet={snippetCode} language={snippetLanguage} />
      </Grid.Col>

      <Grid.Col span={12}>
        <RequestResponseJSON json={responseJSON} />
      </Grid.Col>

      <Grid.Col span={12}>
        <RequestParams
          requestParams={requestParams}
          requestParamsType={requestParamsType}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <ResponseParams
          responseParams={responseParams}
          responseParamsType={responseParamsType}
          responseParamsDescription={responseParamsDescription}
        />
      </Grid.Col>
    </Grid>
  );
}
