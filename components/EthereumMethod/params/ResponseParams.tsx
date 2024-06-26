import { Grid, Group } from "@mantine/core";
import classes from "./ResponseParams.module.css";
import { ResponseParamsList } from "./ResponseParamsList";
import cx from "clsx";
import { TParamType } from "../types";
import { Text } from "../../Text";
import { IconCircleGreen } from "../../icons/IconCircleGreen";

export type ResponseParam = {
  type: TParamType;
  paramName: string;
  paramDescription?: string;
  paramEnum?: {
    value: string;
    description: string;
    isDefault?: boolean;
  }[];
  childrenParams?: ResponseParam[];
  childrenParamsType?: TParamType;
};

type Props = {
  responseParams: ResponseParam[];
  responseParamsType: TParamType;
  responseParamsDescription?: string;
};

export function ResponseParams({
  responseParams,
  responseParamsType,
  responseParamsDescription,
}: Props) {
  return (
    <Grid gutter={10}>
      <Grid.Col span={12}>
        <Text uppercase color={"grayLike"} size="xs" fontWeight="medium">
          Response
        </Text>
      </Grid.Col>

      <Grid.Col span={12}>
        <section className={classes.root}>
          <div className={classes.line}>
            <Grid align="center" flex={1}>
              <Grid.Col span={"auto"} flex={1}>
                <Group>
                  <IconCircleGreen />
                  <Text color="white" size="sm" fontWeight="medium">
                    200
                  </Text>
                </Group>
                {/* Description of the response */}
                {responseParamsDescription ? (
                  <Text color="gray" size="xs">
                    {responseParamsDescription}
                  </Text>
                ) : null}
              </Grid.Col>
            </Grid>
          </div>
          <div className={cx(classes.line, classes.noBorder)}>
            <Text color="grayLike" size="xs" fontWeight="medium" uppercase>
              Response params
            </Text>
          </div>

          <ResponseParamsList
            responseParams={responseParams}
            responseParamsType={responseParamsType}
          />
        </section>
      </Grid.Col>
    </Grid>
  );
}
