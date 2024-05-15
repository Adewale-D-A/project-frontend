import { useRef } from "react";
import { Provider } from "react-redux";

//import redux
import { projectStore, AppStore } from ".";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = projectStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
