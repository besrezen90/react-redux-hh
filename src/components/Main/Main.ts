import { connect } from "react-redux";
import { MainView } from "./MainView";
import { onChangeText } from "../../actions";
import { IFilter } from "../../types";

const mapStateToProps = (state: { filter: IFilter }) => ({
  filter: state.filter
});

export default connect(
  mapStateToProps,
  { onChangeText }
)(MainView);
