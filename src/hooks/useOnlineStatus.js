import {useDispatch} from "react-redux";
import {set_online} from "../store/actions/mediaActions";
import useEventListener from "./useEventListener";

export default function useOnlineStatus() {
  const setOnline = useDispatch(set_online())
  //
  // useEventListener("online", () => setOnline(navigator.onLine))
  // useEventListener("offline", () => setOnline(navigator.onLine)
}
