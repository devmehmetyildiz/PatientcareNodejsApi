import { connect } from 'react-redux'
import PatientstockmovementsEdit from '../../Pages/Patientstockmovements/PatientstockmovementsEdit'
import { EditPatientstockmovements, GetPatientstockmovement, RemoveSelectedPatientstockmovement, removePatientstockmovementnotification, fillPatientstockmovementnotification } from '../../Redux/Reducers/PatientstockmovementReducer'
import { GetPatientstocks, removePatientstocknotification } from '../../Redux/Reducers/PatientstockReducer'

const mapStateToProps = (state) => ({
    Patientstockmovements: state.Patientstockmovements,
    Patientstocks: state.Patientstocks,
    Profile: state.Profile
})

const mapDispatchToProps = {
    EditPatientstockmovements, GetPatientstockmovement, RemoveSelectedPatientstockmovement, removePatientstockmovementnotification, fillPatientstockmovementnotification,
    GetPatientstocks, removePatientstocknotification
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientstockmovementsEdit)