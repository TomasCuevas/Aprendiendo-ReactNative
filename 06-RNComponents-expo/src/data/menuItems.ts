//* INTERFACE *//
import { IMenuItem } from "../interfaces";

export const menuItems: IMenuItem[] = [
  {
    name: "Animation 01",
    icon: "cube-outline",
    component: "Animation01Screen",
  },
  {
    name: "Animation 02",
    icon: "albums-outline",
    component: "Animation02Screen",
  },
  {
    name: "Switch",
    icon: "toggle-outline",
    component: "SwitchScreen",
  },
  {
    name: "Alert",
    icon: "alert-circle-outline",
    component: "AlertScreen",
  },
  {
    name: "Prompt",
    icon: "terminal-outline",
    component: "PromptScreen",
  },
  {
    name: "TextInput",
    icon: "text-outline",
    component: "TextInputScreen",
  },
  {
    name: "Pull To Refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "Section List",
    icon: "list-outline",
    component: "SectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "Infinite Scroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
];
