import Image from "next/image";
import IconGetStartedCode from "../../icons/IconGetStartedCode.svg";
import classes from "./GetStarted.module.css";
import { Group } from "@mantine/core";
import { Text } from "../../Text";
import Link from "next/link";
import { SiteMap } from "../../../SiteMap";

export function GetStarted() {
  return (
    <section className={classes.getStarted}>
      <span className={classes.getStartedCircle}>
        <Image
          src={IconGetStartedCode}
          alt="Get started"
          width={20}
          height={20}
        />
      </span>

      <div className={classes.infoBlock}>
        <Group mb={10}>
          <Text color="white" size="lg" fontWeight="semibold">
            Unlock Access to 50+ chains
          </Text>
        </Group>
        <Group>
          <Text color="white" size="sm">
            Boost your app's speed and reliability with dRPC - get your access
            API key
          </Text>
        </Group>
      </div>

      <Link href={SiteMap.LoginPage} target="_blank">
        <button className={classes.button}>
          <Text color="white" size={"sm"} fontWeight="medium">
            Get started for free
          </Text>
        </button>
      </Link>
    </section>
  );
}
