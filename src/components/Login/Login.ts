import { connect } from "react-redux";
import { onLogin } from "../../actions";
import { IUser } from "../../types";
import { LoginView } from "./LoginView";

const mapStateToProps = (state: { user: IUser }) => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { onLogin }
)(LoginView);
