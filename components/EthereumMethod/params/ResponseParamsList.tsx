import { Group } from "@mantine/core";
import classes from "./ResponseParamsList.module.css";
import { ResponseParam } from "./ResponseParams";
import cx from "clsx";
import { TParamType } from "../types";
import { getParamsType } from "../getParamsType";
import { Text } from "../../Text";

type Props = {
  responseParams: ResponseParam[];
  responseParamsType: TParamType;
  isChild?: boolean;
};

export function ResponseParamsList({
  responseParams,
  responseParamsType,
  isChild,
}: Props) {
  return (
    <section
      className={cx(classes.root, {
        [classes.isChild]: isChild,
      })}
    >
      <div className={classes.line}>
        <Text color="gray" size="xs" italic>
          {getParamsType(responseParamsType)}
        </Text>
      </div>

      {/* Iterate through and render each param */}
      {responseParams.map((param) => (
        <div key={param.paramName} className={classes.line}>
          <Group gap={10} align="center">
            <Text color="white" size="sm" fontWeight="medium">
              {param.paramName}
            </Text>
            <Text color="gray" size="xs" italic>
              {param.type}
            </Text>
          </Group>

          <Group>
            <Text color="grayLike" size="sm">
              {param.paramDescription}
            </Text>
          </Group>

          {/* If param has enum values, render them */}
          {param.paramEnum ? (
            <section className={classes.paramEnums}>
              <ul className={classes.paramEnumsUl}>
                {param.paramEnum.map((enumItem) => (
                  <li key={enumItem.value}>
                    <Group gap={10} align="center">
                      <Text color="grayLike" size="xs">
                        <Text color="grayLike" size="xs" capitalize>
                          {enumItem.value}
                        </Text>{" "}
                        {enumItem.isDefault ? "[default]" : ""}{" "}
                        {`- ${enumItem.description}`}
                      </Text>
                    </Group>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* If param has children params, render them */}
          {param.childrenParams ? (
            <div className={cx(classes.line, classes.children)}>
              <ResponseParamsList
                responseParams={param.childrenParams}
                responseParamsType={responseParamsType}
                isChild
              />
            </div>
          ) : null}
        </div>
      ))}
    </section>
  );
}
