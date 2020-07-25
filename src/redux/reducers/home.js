import { HOMEDATA } from "../constants/home";

const homeData = [];

export default function loading(prevState = homeData, action) {
  switch (action.type) {
    case HOMEDATA:
      return action.data;
    default:
      return prevState;
  }
}
