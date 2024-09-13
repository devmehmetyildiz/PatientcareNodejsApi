import { connect } from 'react-redux'
import Approve from "../../Pages/Approve/Approve"
import { GetStocks } from '../../Redux/StockSlice'
import { GetStockmovements, ApproveStockmovements } from '../../Redux/StockmovementSlice'
import { GetPatients, ApprovePatients } from '../../Redux/PatientSlice'
import { GetCases } from '../../Redux/CaseSlice'
import { GetFiles } from '../../Redux/FileSlice'
import { GetUsagetypes } from '../../Redux/UsagetypeSlice'
import { GetStocktypes } from '../../Redux/StocktypeSlice'
import { GetUnits } from '../../Redux/UnitSlice'
import { GetPatientdefines } from '../../Redux/PatientdefineSlice'
import { GetStockdefines } from '../../Redux/StockdefineSlice'
import { GetWarehouses } from '../../Redux/WarehouseSlice'
import { GetPurchaseorders } from '../../Redux/PurchaseorderSlice'
import { GetUsers } from '../../Redux/UserSlice'

const mapStateToProps = (state) => ({
    Stocks: state.Stocks,
    Stockmovements: state.Stockmovements,
    Warehouses: state.Warehouses,
    Purchaseorders: state.Purchaseorders,
    Stockdefines: state.Stockdefines,
    Stocktypes: state.Stocktypes,
    Users: state.Users,
    Units: state.Units,
    Cases: state.Cases,
    Usagetypes: state.Usagetypes,
    Files: state.Files,
    Patients: state.Patients,
    Patientdefines: state.Patientdefines,
    Profile: state.Profile
})

const mapDispatchToProps = {
    GetStocks, GetStockmovements, GetPatients, GetCases, GetStockdefines, GetPurchaseorders,
    GetFiles, GetUsagetypes, GetUsers, GetStocktypes, GetUnits, GetPatientdefines, GetWarehouses,
    ApproveStockmovements, ApprovePatients
}

export default connect(mapStateToProps, mapDispatchToProps)(Approve)