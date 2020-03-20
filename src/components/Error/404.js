import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@/components/Link";
// import Image from './images/undraw_page_not_found_su7k.svg';
import useStyles from "./styles";

const defaultTitle = "404";
const defaultContent = "啊哦，资源找不到了";
const defaultAction = (
  <Link href="/">
    <Button>返回首页</Button>
  </Link>
);

export default ({
  title = defaultTitle,
  content = defaultContent,
  action = defaultAction
}) => {
  const classes = useStyles();
  return <>1111</>;
};
