import { connect } from "react-redux";
import { MainView } from "./MainView";
import { onLogin, onExit, onChangeText, onFetchData, onGoToPage } from "../../actions";
import { IFilter, IVacancy, IPagination, IUser } from "../../types";

const mapStateToProps = (state: {
  user: IUser;
  filter: IFilter;
  vacancys: Array<IVacancy>;
  pagination: IPagination;
}) => ({
  user: state.user,
  filter: state.filter,
  vacancys: state.vacancys,
  pagination: state.pagination
});

export default connect(
  mapStateToProps,
  { onLogin, onExit, onChangeText, onFetchData, onGoToPage }
)(MainView);
