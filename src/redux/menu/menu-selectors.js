import { createSelector } from "reselect";

let selectMenu = (state) => state.menu;

let selectMenuItems = createSelector([selectMenu], (menu) => menu.items);

export { selectMenuItems };
