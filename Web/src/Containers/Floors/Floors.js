import { connect } from 'react-redux'
import Floors from "../../Pages/Floors/Floors"
import { GetFloors, DeleteFloors,  fillFloornotification, handleDeletemodal, handleSelectedFloor } from "../../Redux/FloorSlice"

const mapStateToProps = (state) => ({
  Floors: state.Floors,
  Profile: state.Profile,
})

const mapDispatchToProps = {
  GetFloors, DeleteFloors,  fillFloornotification,
  handleDeletemodal, handleSelectedFloor
}

export default connect(mapStateToProps, mapDispatchToProps)(Floors)