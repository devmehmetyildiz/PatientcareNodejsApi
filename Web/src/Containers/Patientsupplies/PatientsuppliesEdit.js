import { connect } from 'react-redux'
import PatientsuppliesEdit from '../../Pages/Patientsupplies/PatientsuppliesEdit'
import { EditPatientstocks, GetPatientstock, handleSelectedPatientstock,  fillPatientstocknotification } from '../../Redux/PatientstockSlice'
import { GetStockdefines } from '../../Redux/StockdefineSlice'
import { GetDepartments } from '../../Redux/DepartmentSlice'
import { GetPatients } from "../../Redux/PatientSlice"
import { GetPatientdefines } from "../../Redux/PatientdefineSlice"

const mapStateToProps = (state) => ({
    Patientstocks: state.Patientstocks,
    Patients: state.Patients,
    Patientdefines: state.Patientdefines,
    Patients: state.Patients,
    Stockdefines: state.Stockdefines,
    Departments: state.Departments,
    Profile: state.Profile
})

const mapDispatchToProps = {
    EditPatientstocks, GetPatientstock, handleSelectedPatientstock, fillPatientstocknotification, GetPatientdefines,
    GetStockdefines,  GetDepartments, GetPatients
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientsuppliesEdit)