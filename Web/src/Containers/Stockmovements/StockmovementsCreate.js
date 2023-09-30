import { connect } from 'react-redux'
import StockmovementsCreate from '../../Pages/Stockmovements/StockmovementsCreate'
import { GetStocks, removeStocknotification } from '../../Redux/StockSlice'
import { GetStockdefines, removeStockdefinenotification } from '../../Redux/StockdefineSlice'
import { AddStockmovements, removeStockmovementnotification, fillStockmovementnotification } from '../../Redux/StockmovementSlice'


const mapStateToProps = (state) => ({
    Stocks: state.Stocks,
    Stockmovements: state.Stockmovements,
    Stockdefines: state.Stockdefines,
    Profile: state.Profile
})

const mapDispatchToProps = {
    GetStocks, removeStocknotification, AddStockmovements,
    removeStockmovementnotification, fillStockmovementnotification,
    GetStockdefines, removeStockdefinenotification
}

export default connect(mapStateToProps, mapDispatchToProps)(StockmovementsCreate)