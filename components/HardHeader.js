import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function HardHeader() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3 } =
    useMoralis();

  // useEffect checks dependenceies array for changes,
  // and calls the function passed to it when that happens,
  //then rerenders the ui
  //this use effect checks if we are connected
  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3();
      }
    }
  }, [isWeb3Enabled]);

  //this use effect checks if user changed account
  //checks if logged out (account == null)
  //removes cached connected from local storage
  // and exits metamask using deactivateWeb3()
  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log("account changed to ${account}");
      if (account == null) {
        window.localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("null account found");
      }
    });
  }, []);

  return (
    <div>
      {account ? (
        <div>connected to {account}</div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            //this line caches the account connected so
            // you dont have to reconnect each time you refresh
            //it adds a key value pair with these values in the local storage
            //that we can check to see if already connected
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected");
            }
          }}
        >
          connect wallet
        </button>
      )}
    </div>
  );
}
