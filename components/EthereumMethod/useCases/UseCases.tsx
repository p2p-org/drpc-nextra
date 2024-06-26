import Image from "next/image";
import ImgUseCases from "../../icons/UseCases.png";
import { Grid, Group } from "@mantine/core";
import classes from "./UseCases.module.css";
import { Text } from "../../Text";

export function UseCases({ list }: { list: string[] }) {
  return (
    <Grid
      align="start"
      justify="start"
      gutter={10}
      p={20}
      className={classes.useCases}
    >
      <Grid.Col span={"content"}>
        <Image
          src={ImgUseCases}
          alt="Use cases"
          width={16}
          className={classes.icon}
        />
      </Grid.Col>

      <Grid.Col span={"auto"}>
        <Group mb={10}>
          <Text size="md" fontWeight="semibold" color={"white"} spacing="big">
            Use cases
          </Text>
        </Group>
        <ul className={classes.ul}>
          {list.map((item, index) => (
            <li key={index} className={classes.li}>
              <Text size="sm" color="white">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </Grid.Col>
    </Grid>
  );
}
