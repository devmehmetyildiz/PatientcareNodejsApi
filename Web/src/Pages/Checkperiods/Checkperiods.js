import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Breadcrumb, Button, Grid, GridColumn } from 'semantic-ui-react'
import ColumnChooser from '../../Containers/Utils/ColumnChooser'
import DataTable from '../../Utils/DataTable'
import LoadingPage from '../../Utils/LoadingPage'
import NoDataScreen from '../../Utils/NoDataScreen'
import Notification from '../../Utils/Notification'
import Literals from './Literals'
import Pagewrapper from '../../Common/Wrappers/Pagewrapper'
import Headerwrapper from '../../Common/Wrappers/Headerwrapper'
import Pagedivider from '../../Common/Styled/Pagedivider'
import CheckperiodsDelete from "../../Containers/Checkperiods/CheckperiodsDelete"
export default class Checkperiods extends Component {

  constructor(props) {
    super(props)
    this.state = {
      periodStatus: []
    }
  }

  componentDidMount() {
    const { GetCheckperiods, GetPeriods } = this.props
    GetCheckperiods()
    GetPeriods()
  }

  componentDidUpdate() {
    const { Checkperiods, Periods, removePeriodnotification, removeCheckperiodnotification } = this.props
    Notification(Checkperiods.notifications, removeCheckperiodnotification)
    Notification(Periods.notifications, removePeriodnotification)
  }

  render() {


    const { Checkperiods, Periods, Profile, handleSelectedCheckperiod, handleDeletemodal } = this.props
    const { isLoading, isDispatching } = Checkperiods

    const Columns = [
      { Header: Literals.Columns.Id[Profile.Language], accessor: 'Id', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Uuid[Profile.Language], accessor: 'Uuid', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Name[Profile.Language], accessor: 'Name', sortable: true, canGroupBy: true, canFilter: true },
      { Header: Literals.Columns.Periodstxt[Profile.Language], accessor: 'Periodstxt', sortable: true, canGroupBy: true, canFilter: true, isOpen: false, Cell: col => this.periodCellhandler(col) },
      { Header: Literals.Columns.Periodtype[Profile.Language], accessor: 'Periodtype', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Occureddays[Profile.Language], accessor: 'Occureddays', sortable: true, canGroupBy: true, canFilter: true, Cell: col => this.dayCellhandler(col) },
      { Header: Literals.Columns.Createduser[Profile.Language], accessor: 'Createduser', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Updateduser[Profile.Language], accessor: 'Updateduser', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Createtime[Profile.Language], accessor: 'Createtime', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Updatetime[Profile.Language], accessor: 'Updatetime', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.edit[Profile.Language], accessor: 'edit', canGroupBy: false, canFilter: false, disableFilters: true, sortable: false, className: 'text-center action-column' },
      { Header: Literals.Columns.delete[Profile.Language], accessor: 'delete', canGroupBy: false, canFilter: false, disableFilters: true, sortable: false, className: 'text-center action-column' }]

    const metaKey = "Checkperiods"
    let tableMeta = (Profile.tablemeta || []).find(u => u.Meta === metaKey)
    const initialConfig = {
      hiddenColumns: tableMeta ? JSON.parse(tableMeta.Config).filter(u => u.isVisible === false).map(item => {
        return item.key
      }) : ["Uuid", "Createduser", "Updateduser", "Createtime", "Updatetime"],
      columnOrder: tableMeta ? JSON.parse(tableMeta.Config).sort((a, b) => a.order - b.order).map(item => {
        return item.key
      }) : []
    };

    const list = (Checkperiods.list || []).map(item => {

      var text = (item.Perioduuids || []).map(u => {
        return (Periods.list || []).find(period => period.Uuid === u.PeriodID)?.Name
      }).join(", ")

      return {
        ...item,
        Periodstxt: text,
        edit: <Link to={`/Checkperiods/${item.Uuid}/edit`} ><Icon size='large' className='row-edit' name='edit' /></Link>,
        delete: <Icon link size='large' color='red' name='alternate trash' onClick={() => {
          handleSelectedCheckperiod(item)
          handleDeletemodal(true)
        }} />,
      }
    })

    return (
      isLoading || isDispatching ? <LoadingPage /> :
        <React.Fragment>
          <Pagewrapper>
            <Headerwrapper>
              <Grid columns='2' >
                <GridColumn width={8} className="">
                  <Breadcrumb size='big'>
                    <Link to={"/Checkperiods"}>
                      <Breadcrumb.Section>{Literals.Page.Pageheader[Profile.Language]}</Breadcrumb.Section>
                    </Link>
                  </Breadcrumb>
                </GridColumn>
                <GridColumn width={8} >
                  <Link to={"/Checkperiods/Create"}>
                    <Button color='blue' floated='right' className='list-right-green-button'>
                      {Literals.Button.Create[Profile.Language]}
                    </Button>
                  </Link>
                  <ColumnChooser meta={Profile.tablemeta} columns={Columns} metaKey={metaKey} />
                </GridColumn>
              </Grid>
            </Headerwrapper>
            <Pagedivider />
            {list.length > 0 ?
              <div className='w-full mx-auto '>
                <DataTable Columns={Columns} Data={list} Config={initialConfig} />
              </div> : <NoDataScreen message={Literals.Messages.Nodatafind[Profile.Language]} />
            }
          </Pagewrapper>
          <CheckperiodsDelete />
        </React.Fragment>
    )
  }

  expandPeriods = (rowid) => {
    const prevData = this.state.periodStatus
    prevData.push(rowid)
    this.setState({ periodStatus: [...prevData] })
  }

  shrinkPeriods = (rowid) => {
    const index = this.state.periodStatus.indexOf(rowid)
    const prevData = this.state.periodStatus
    if (index > -1) {
      prevData.splice(index, 1)
      this.setState({ periodStatus: [...prevData] })
    }
  }

  periodCellhandler = (col) => {

    const { Periods } = this.props

    if (col.value) {
      if (!col.cell.isGrouped) {
        const itemId = col.row.original.Id
        const itemPeriods = (col.row.original.Perioduuids || []).map(u => { return (Periods.list || []).find(period => period.Uuid === u.PeriodID) })
        return col.value.length - 35 > 20 ?
          (
            !this.state.periodStatus.includes(itemId) ?
              [col.value.slice(0, 35) + ' ...(' + itemPeriods.length + ')', <Link to='#' className='showMoreOrLess' onClick={() => this.expandPeriods(itemId)}> ...Daha Fazla Göster</Link>] :
              [col.value, <Link to='#' className='showMoreOrLess' onClick={() => this.shrinkPeriods(itemId)}> ...Daha Az Göster</Link>]
          ) : col.value
      }
      return col.value
    }
    return null
  }

  dayCellhandler = (col) => {

    const { Profile } = this.props

    const Dayoptions = [
      { key: 0, text: Literals.Options.Dayoptions.value0[Profile.Language], value: 0 },
      { key: 1, text: Literals.Options.Dayoptions.value1[Profile.Language], value: 1 },
      { key: 2, text: Literals.Options.Dayoptions.value2[Profile.Language], value: 2 },
      { key: 3, text: Literals.Options.Dayoptions.value3[Profile.Language], value: 3 },
      { key: 4, text: Literals.Options.Dayoptions.value4[Profile.Language], value: 4 },
      { key: 5, text: Literals.Options.Dayoptions.value5[Profile.Language], value: 5 },
      { key: 6, text: Literals.Options.Dayoptions.value6[Profile.Language], value: 6 },
    ]

    if (col.value) {
      if (!col.cell.isGrouped) {
        let days = ((col.value || '').split(',') || []).map(daytext => { return Dayoptions.find(u => u.value === parseInt(daytext))?.text }).join(',')
        return days
      }
      return col.value
    }
    return null
  }
}