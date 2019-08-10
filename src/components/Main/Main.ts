import { connect } from "react-redux";
import { MainView } from "./MainView";
import { onChangeText, onFetchData } from "../../actions";
import { IFilter, IVacancy } from "../../types";

const mapStateToProps = (state: { filter: IFilter; vacancys: Array<IVacancy> }) => ({
  filter: state.filter,
  vacancys: state.vacancys
});

export default connect(
  mapStateToProps,
  { onChangeText, onFetchData }
)(MainView);
