import { Grid } from "@mantine/core";
import classes from "./RequestParams.module.css";
import { RequestParamsList } from "./RequestParamsList";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";

type RequestParam = {
  type: TParamType;
  paramName: string;
  paramDescription?: string;
  paramEnum?: {
    value: string;
    description: string;
    isDefault?: boolean;
  }[];
  childrenParams?: RequestParam[];
  childrenParamsType?: TParamType;
};

export type RequestParamProp = RequestParam[] | null;

type Props = {
  requestParamsType: TParamType;
  requestParams: RequestParamProp;
};

export function RequestParams({ requestParams, requestParamsType }: Props) {
  return (
    <Grid gutter={10}>
      <Grid.Col span={12}>
        <Text uppercase color={"grayLike"} size="xs" fontWeight="medium">
          Request params
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>
          <div className={classes.line}>
            <Text color="white" size="sm" fontWeight="medium">
              id
            </Text>
            <Text color="gray" size="xs" italic>
              integer
            </Text>
          </div>
          <div className={classes.line}>
            <Text color="white" size="sm" fontWeight="medium">
              jsonrpc
            </Text>
            <Text color="gray" size="xs" italic>
              string
            </Text>
          </div>
          <div className={classes.line}>
            <Text color="white" size="sm" fontWeight="medium">
              method
            </Text>
            <Text color="gray" size="xs" italic>
              string
            </Text>
          </div>

          <section className={classes.params}>
            <Text color="white" size="sm" fontWeight="medium">
              Parameters
            </Text>
            <Text color="gray" size="xs" italic>
              {getParamsType(requestParamsType)}
            </Text>
          </section>

          {requestParams && requestParams.length > 0 ? (
            <RequestParamsList
              requestParams={requestParams}
              requestParamsType={requestParamsType}
            />
          ) : null}
        </section>
      </Grid.Col>
    </Grid>
  );
}
