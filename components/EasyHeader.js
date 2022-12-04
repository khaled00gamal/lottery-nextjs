//in this component we will use already premade components
//from web3uikit
import { ConnectButton } from "web3uikit";
export default function Header() {
  return (
    <div>
      connected to lottery!!
      <ConnectButton moralisAuth={false} />
    </div>
  );
}
