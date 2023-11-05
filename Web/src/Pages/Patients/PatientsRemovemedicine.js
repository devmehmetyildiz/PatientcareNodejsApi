import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Button, Divider, Dropdown, Form, Grid, GridColumn, Header, Icon, Label, Loader, Popup, Tab } from 'semantic-ui-react'
import Notification from '../../Utils/Notification'
import formToObject from 'form-to-object'
import LoadingPage from '../../Utils/LoadingPage'
import FormInput from '../../Utils/FormInput'
import Literals from './Literals'
import validator from "../../Utils/Validator"
import { FormContext } from '../../Provider/FormProvider'
import Pagewrapper from '../../Common/Wrappers/Pagewrapper'
import Contentwrapper from '../../Common/Wrappers/Contentwrapper'
import Pagedivider from '../../Common/Styled/Pagedivider'
import Headerbredcrump from '../../Common/Wrappers/Headerbredcrump'
import Headerwrapper from '../../Common/Wrappers/Headerwrapper'
import Footerwrapper from '../../Common/Wrappers/Footerwrapper'
import config from '../../Config'
import { PATIENTMOVEMENTTYPE, ROUTES } from '../../Utils/Constants'
import DataTable from '../../Utils/DataTable'
import NoDataScreen from '../../Utils/NoDataScreen'

export default class PatientsRemovemedicine extends Component {

    PAGE_NAME = 'PatientsRemovemedicine'

    constructor(props) {
        super(props)
        this.state = {
            isDatafetched: false,
        }
    }

    componentDidMount() {
        const {
            GetPatient, match, history, PatientID,
            GetPatientdefines, GetPatientstocks, GetPatientstockmovements,
            GetWarehouses, GetStocks, GetStockmovements, GetStockdefines
        } = this.props
        let Id = PatientID || match?.params?.PatientID
        if (validator.isUUID(Id)) {
            GetPatient(Id)
            GetPatientdefines()
            GetPatientstocks()
            GetPatientstockmovements()
            GetWarehouses()
            GetStocks()
            GetStockmovements()
            GetStockdefines()
        } else {
            history.length > 1 ? history.goBack() : history.push(Id ? `/Patients/${Id}` : `/Patients`)
        }
    }

    componentDidUpdate() {
        const {
            Patients, Patientdefines, Patientstocks,
            Patientstockmovements, Warehouses,
            Stocks, Stockmovements, Stockdefines } = this.props
        const { selected_record } = Patients

        const isLoadingstatus =
            Patients.isLoading &&
            Patientdefines.isLoading &&
            Patientstocks.isLoading &&
            Patientstockmovements.isLoading &&
            Warehouses.isLoading &&
            Stocks.isLoading &&
            Stockmovements.isLoading &&
            Stockdefines.isLoading


        if (selected_record && Object.keys(selected_record).length > 0 && selected_record.Id !== 0 && isLoadingstatus && !this.state.isDatafetched) {
            this.setState({ isDatafetched: true })
            this.context.setForm(this.PAGE_NAME, selected_record)
        }
    }

    render() {

        const {
            Patients, Patientdefines, Patientstocks, Patientstockmovements, Warehouses,
            Stocks, Stockmovements, Stockdefines, Profile, history, match, PatientID
        } = this.props


        const Id = match.params.PatientID || PatientID

        const { selected_record } = Patients

        const isLoadingstatus =
            Patients.isLoading &&
            Patientdefines.isLoading &&
            Patientstocks.isLoading &&
            Patientstockmovements.isLoading &&
            Warehouses.isLoading &&
            Stocks.isLoading &&
            Stockmovements.isLoading &&
            Stockdefines.isLoading

        const patientdefine = (Patientdefines.list || []).find(u => u.Uuid === selected_record?.PatientdefineID)

        const Warehouseoptions = (Warehouses.list || []).filter(u => u.Isactive && u.Ismedicine).map(warehouse => {
            return { key: warehouse.Uuid, text: warehouse.Name, value: warehouse.Uuid }
        })


        const Patientstocklist = (Patientstocks.list || []).filter(u => u.PatientID === Id && u.Isapproved && u.Ismedicine && u.Isactive)

        const Stockoptions = (Patientstocks.list || []).filter(u =>
            u.Isactive &&
            u.Isapproved &&
            u.Ismedicine &&
            u.PatientID === selected_record?.Uuid
        ).map(stock => {
            const stockdefine = (Stockdefines.list || []).find(u => u.Uuid === stock?.StockdefineID)
            return { key: stock?.Uuid, text: `${stockdefine?.Name} (${stock?.Barcodeno})`, value: stock?.Uuid }
        })

        const Columns = [
            { Header: Literals.AddStock.Id[Profile.Language], accessor: 'Id', sortable: true, canGroupBy: true, canFilter: true },
            { Header: Literals.AddStock.Stockname[Profile.Language], accessor: 'StockdefineID', sortable: true, canGroupBy: true, canFilter: true, Cell: col => this.stockdefineCellhandler(col) },
            { Header: Literals.AddStock.Barcodeno[Profile.Language], accessor: 'Barcodeno', sortable: true, canGroupBy: true, canFilter: true },
            { Header: Literals.AddStock.Amount[Profile.Language], accessor: 'Amount', sortable: true, canGroupBy: true, canFilter: true, Cell: col => this.amountCellhandler(col) },
        ]


        return (
            isLoadingstatus ? <LoadingPage /> :
                <Pagewrapper >
                    <Headerwrapper>
                        <Headerbredcrump>
                            <Link to={"/Patients"}>
                                <Breadcrumb.Section>{Literals.Page.Pageheader[Profile.Language]}</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Link to={"/Patients/" + Id}>
                                <Breadcrumb.Section>{`${patientdefine?.Firstname} ${patientdefine?.Lastname}`}</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section>{Literals.Page.Pageremovemedicineheader[Profile.Language]}</Breadcrumb.Section>
                        </Headerbredcrump>
                    </Headerwrapper>
                    <Pagedivider />
                    <Contentwrapper>
                        <Form onSubmit={this.handleSubmit}>
                            <Label>{Literals.RemoveMedicine.Availablemedicines[Profile.Language]}</Label>
                            <Pagedivider />
                            {Patientstocklist.length > 0 ?
                                <div className='w-full mx-auto '>
                                    <DataTable Columns={Columns} Data={Patientstocklist} />
                                </div> : <NoDataScreen message={Literals.Messages.Nomedicinefind[Profile.Language]} style={{ height: 'auto' }} />}
                            <Pagedivider />
                            <Form.Group widths='equal'>
                                <FormInput page={this.PAGE_NAME} required placeholder={Literals.RemoveMedicine.Warehouse[Profile.Language]} name="WarehouseID" options={Warehouseoptions} formtype='dropdown' />
                                <FormInput page={this.PAGE_NAME} required placeholder={Literals.RemoveMedicine.Stockname[Profile.Language]} name="StockID" options={Stockoptions} formtype='dropdown' />
                                <FormInput page={this.PAGE_NAME} required placeholder={Literals.RemoveMedicine.Amount[Profile.Language]} name="Amount" type="number" />
                            </Form.Group>
                            <Footerwrapper>
                                {history && <Button onClick={(e) => {
                                    e.preventDefault()
                                    history.length > 1 ? history.goBack() : history.push(Id ? `/Patients/${Id}` : `/Patients`)
                                }} floated="left" color='grey'>{Literals.Button.Goback[Profile.Language]}</Button>}
                                <Button floated="right" type='submit' color='blue'>{Literals.Button.Remove[Profile.Language]}</Button>
                            </Footerwrapper>
                        </Form>
                    </Contentwrapper>
                </Pagewrapper >
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { history, Profile, Patientstockmovements, fillStocknotification, TransferfromPatient, match, PatientID } = this.props
        let Id = PatientID || match?.params?.PatientID
        const data = formToObject(e.target)
        data.Amount = parseFloat(data.Amount)
        data.WarehouseID = this.context.formstates[`${this.PAGE_NAME}/WarehouseID`]
        data.StockID = this.context.formstates[`${this.PAGE_NAME}/StockID`]
        data.PatientID = Id
        let errors = []
        if (!validator.isUUID(data.WarehouseID)) {
            errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.WarehouseReuired[Profile.Language] })
        }
        if (!validator.isUUID(data.StockID)) {
            errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.StockRequired[Profile.Language] })
        }

        if (validator.isUUID(data.StockID)) {
            let amount = 0.0;
            let movements = (Patientstockmovements.list || []).filter(u => u.StockID === data.StockID && u.Isactive && u.Isapproved)
            movements.forEach(movement => {
                amount += (movement.Amount * movement.Movementtype);
            });
            if (amount < parseInt(data.Amount)) {
                errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.Needmoreamountinpatient[Profile.Language] })
            }
        }
        if (errors.length > 0) {
            errors.forEach(error => {
                fillStocknotification(error)
            })
        } else {
            TransferfromPatient({ data, history, redirectID: Id })
        }
    }

    stockdefineCellhandler = (col) => {
        const { Stockdefines, Patientstocks } = this.props
        if (Stockdefines.isLoading) {
            return <Loader size='small' active inline='centered' ></Loader>
        } else {
            const stockdefine = (Stockdefines.list || []).find(u => u.Uuid === col.value)
            return `${stockdefine?.Name}`
        }
    }

    amountCellhandler = (col) => {
        const { Patientstockmovements, Patientstocks } = this.props
        if (Patientstockmovements.isLoading || Patientstocks.isLoading) {
            return <Loader size='small' active inline='centered' ></Loader>
        } else {
            const selectedStock = (Patientstocks.list || []).find(u => u.Id === col.row.original.Id)
            let amount = 0.0;
            let movements = (Patientstockmovements.list || []).filter(u => u.StockID === selectedStock.Uuid && u.Isactive && u.Isapproved)
            movements.forEach(movement => {
                amount += (movement.Amount * movement.Movementtype);
            });
            return amount
        }
    }
}
PatientsRemovemedicine.contextType = FormContext
