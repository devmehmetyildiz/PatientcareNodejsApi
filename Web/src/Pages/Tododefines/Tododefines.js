import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Breadcrumb, Button, Grid, GridColumn } from 'semantic-ui-react'
import DataTable from '../../Utils/DataTable'
import LoadingPage from '../../Utils/LoadingPage'
import NoDataScreen from '../../Utils/NoDataScreen'
import ColumnChooser from '../../Containers/Utils/ColumnChooser'
import Notification from "../../Utils/Notification"
import Literals from './Literals'
import Pagedivider from '../../Common/Styled/Pagedivider'
import Pagewrapper from '../../Common/Wrappers/Pagewrapper'
import Headerwrapper from '../../Common/Wrappers/Headerwrapper'
import TododefinesDelete from '../../Containers/Tododefines/TododefinesDelete'
import MobileTable from '../../Utils/MobileTable'
import Settings from '../../Common/Settings'
export default class Tododefines extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checkperiodStatus: []
    }
  }

  componentDidMount() {
    const { GetTododefines, GetCheckperiods } = this.props
    GetTododefines()
    GetCheckperiods()
  }

  render() {
    const { Tododefines, Profile, handleDeletemodal, handleSelectedTododefine, Checkperiods } = this.props
    const { isLoading, isDispatching } = Tododefines

    const Columns = [
      { Header: Literals.Columns.Id[Profile.Language], accessor: 'Id', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Uuid[Profile.Language], accessor: 'Uuid', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Name[Profile.Language], accessor: 'Name', sortable: true, canGroupBy: true, canFilter: true, Firstheader: true },
      { Header: Literals.Columns.IsRequired[Profile.Language], accessor: 'IsRequired', sortable: true, canGroupBy: true, canFilter: true, Cell: col => this.boolCellhandler(col) },
      { Header: Literals.Columns.IsNeedactivation[Profile.Language], accessor: 'IsNeedactivation', sortable: true, canGroupBy: true, canFilter: true, Cell: col => this.boolCellhandler(col) },
      { Header: Literals.Columns.Info[Profile.Language], accessor: 'Info', sortable: true, canGroupBy: true, canFilter: true },
      { Header: Literals.Columns.Checkperiods[Profile.Language], accessor: 'Checkperiodtxt', sortable: true, canGroupBy: true, Subheader: true, canFilter: true, isOpen: false, Cell: col => this.checkperiodCellhandler(col) },
      { Header: Literals.Columns.Createduser[Profile.Language], accessor: 'Createduser', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Updateduser[Profile.Language], accessor: 'Updateduser', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Createtime[Profile.Language], accessor: 'Createtime', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.Updatetime[Profile.Language], accessor: 'Updatetime', sortable: true, canGroupBy: true, canFilter: true, },
      { Header: Literals.Columns.edit[Profile.Language], accessor: 'edit', canGroupBy: false, canFilter: false, disableFilters: true, sortable: false, className: 'text-center action-column' },
      { Header: Literals.Columns.delete[Profile.Language], accessor: 'delete', canGroupBy: false, canFilter: false, disableFilters: true, sortable: false, className: 'text-center action-column' }]

    const metaKey = "Tododefines"
    let tableMeta = (Profile.tablemeta || []).find(u => u.Meta === metaKey)
    const initialConfig = {
      hiddenColumns: tableMeta ? JSON.parse(tableMeta.Config).filter(u => u.isVisible === false).map(item => {
        return item.key
      }) : ["Uuid", "Createduser", "Updateduser", "Createtime", "Updatetime"],
      columnOrder: tableMeta ? JSON.parse(tableMeta.Config).sort((a, b) => a.order - b.order).map(item => {
        return item.key
      }) : [],
      groupBy: tableMeta ? JSON.parse(tableMeta.Config).filter(u => u.isGroup === true).map(item => {
        return item.key
      }) : [],
    };

    const list = (Tododefines.list || []).map(item => {
      var text = (item.Checkperioduuids || []).map(u => {
        return (Checkperiods.list || []).find(checkperiod => checkperiod.Uuid === u.CheckperiodID)?.Name
      }).join(", ")
      return {
        ...item,
        Checkperiodtxt: text,
        edit: <Link to={`/Tododefines/${item.Uuid}/edit`} ><Icon size='large' className='row-edit' name='edit' /></Link>,
        delete: <Icon link size='large' color='red' name='alternate trash' onClick={() => {
          handleSelectedTododefine(item)
          handleDeletemodal(true)
        }} />
      }
    })

    return (
      isLoading || isDispatching ? <LoadingPage /> :
        <React.Fragment>
          <Pagewrapper>
            <Headerwrapper>
              <Grid columns='2' >
                <GridColumn width={8}>
                  <Breadcrumb size='big'>
                    <Link to={"/Tododefines"}>
                      <Breadcrumb.Section>{Literals.Page.Pageheader[Profile.Language]}</Breadcrumb.Section>
                    </Link>
                  </Breadcrumb>
                </GridColumn>
                <Settings
                  Profile={Profile}
                  Pagecreateheader={Literals.Page.Pagecreateheader[Profile.Language]}
                  Pagecreatelink={"/Tododefines/Create"}
                  Columns={Columns}
                  list={list}
                  initialConfig={initialConfig}
                  metaKey={metaKey}
                  Showcreatebutton
                  Showcolumnchooser
                  Showexcelexport
                />
              </Grid>
            </Headerwrapper>
            <Pagedivider />
            {list.length > 0 ?
              <div className='w-full mx-auto '>
                {Profile.Ismobile ?
                  <MobileTable Columns={Columns} Data={list} Config={initialConfig} Profile={Profile} /> :
                  <DataTable Columns={Columns} Data={list} Config={initialConfig} />}
              </div> : <NoDataScreen message={Literals.Messages.Nodatafind[Profile.Language]} />
            }
          </Pagewrapper>
          <TododefinesDelete />
        </React.Fragment>
    )
  }

  handleChangeModal = (value) => {
    this.setState({ modal: value })
  }

  expandCheckperiods = (rowid) => {
    const prevData = this.state.checkperiodStatus
    prevData.push(rowid)
    this.setState({ checkperiodStatus: [...prevData] })
  }

  shrinkCheckperiods = (rowid) => {
    const index = this.state.periodStatus.indexOf(rowid)
    const prevData = this.state.checkperiodStatus
    if (index > -1) {
      prevData.splice(index, 1)
      this.setState({ checkperiodStatus: [...prevData] })
    }
  }

  checkperiodCellhandler = (col) => {

    const { Checkperiods, Profile } = this.props

    if (col.value) {
      if (!col.cell?.isGrouped && !Profile.Ismobile) {
        const itemId = col.row.original.Id
        const itemCheckperiods = (col.row.original.Checkperioduuids || []).map(u => { return (Checkperiods.list || []).find(checkperiod => checkperiod.Uuid === u.CheckperiodID) })
        return col.value.length - 35 > 20 ?
          (
            !this.state.checkperiodStatus.includes(itemId) ?
              [col.value.slice(0, 35) + ' ...(' + itemCheckperiods.length + ')', <Link to='#' className='showMoreOrLess' onClick={() => this.expandCheckperiods(itemId)}> ...Daha Fazla Göster</Link>] :
              [col.value, <Link to='#' className='showMoreOrLess' onClick={() => this.shrinkCheckperiods(itemId)}> ...Daha Az Göster</Link>]
          ) : col.value
      }
      return col.value
    }
    return col.value
  }

  boolCellhandler = (col) => {
    const { Profile } = this.props
    return col.value !== null && (col.value ? Literals.Messages.Yes[Profile.Language] : Literals.Messages.No[Profile.Language])
  }
}


