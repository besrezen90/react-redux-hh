import { connect } from "react-redux";
import { onExit } from "../../actions";
import { IUser } from "../../types";
import { HeaderView } from "./HeaderView";

const mapStateToProps = (state: { user: IUser }) => ({
  name: state.user.login
});

export default connect(
  mapStateToProps,
  { onExit }
)(HeaderView);
