import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "介绍",
      icon: "laptop-code",
      prefix: "guide/readme.md",
      link: "guide/readme.md",
      children: "structure",
    },
    {
      text: "部署",
      icon: "book",
      prefix: "deploy/",
      children: "structure",
    },
    {
      text: "API调用方法",
      icon: "person-chalkboard",
      link: "guide/api/api.md",
    },
  ],
});
