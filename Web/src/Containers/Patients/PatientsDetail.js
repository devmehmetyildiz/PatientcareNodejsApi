import { connect } from 'react-redux'
import PatientsDetail from '../../Pages/Patients/PatientsDetail'
import { GetPatient, setPatient, handleDeletemodal, handleSelectedPatient, handleInmodal, handleOutmodal } from "../../Redux/PatientSlice"
import { GetPatientdefines } from "../../Redux/PatientdefineSlice"
import { GetCases } from "../../Redux/CaseSlice"
import { GetCostumertypes } from "../../Redux/CostumertypeSlice"
import { GetPatienttypes } from "../../Redux/PatienttypeSlice"
import { GetFloors } from "../../Redux/FloorSlice"
import { GetRooms } from "../../Redux/RoomSlice"
import { GetBeds } from "../../Redux/BedSlice"
import { GetPatientstocks } from "../../Redux/PatientstockSlice"
import { GetStockdefines } from "../../Redux/StockdefineSlice"
import { GetUnits } from "../../Redux/UnitSlice"
import { GetPatientmovements } from "../../Redux/PatientmovementSlice"
import { GetFiles } from "../../Redux/FileSlice"
import { GetPatientstockmovements } from "../../Redux/PatientstockmovementSlice"
import { GetTodosbyPatient } from "../../Redux/TodoSlice"
import { GetTododefines } from "../../Redux/TododefineSlice"

const mapStateToProps = (state) => ({
    Patients: state.Patients,
    Patientdefines: state.Patientdefines,
    Cases: state.Cases,
    Profile: state.Profile,
    Patienttypes: state.Patienttypes,
    Costumertypes: state.Costumertypes,
    Floors: state.Floors,
    Rooms: state.Rooms,
    Beds: state.Beds,
    Patientstocks: state.Patientstocks,
    Stockdefines: state.Stockdefines,
    Units: state.Units,
    Patientmovements: state.Patientmovements,
    Files: state.Files,
    Patientstockmovements: state.Patientstockmovements,
    Todos: state.Todos,
    Tododefines: state.Tododefines,
})

const mapDispatchToProps = {
    GetPatient, setPatient, handleDeletemodal, handleSelectedPatient,
    GetPatientdefines, GetCases,
    GetCostumertypes, GetPatienttypes,
    GetFloors, GetRooms, GetBeds,
    GetPatientstocks, GetStockdefines, GetUnits,
    GetPatientmovements, GetFiles,
    GetPatientstockmovements, handleInmodal, handleOutmodal, GetTodosbyPatient, GetTododefines
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsDetail)