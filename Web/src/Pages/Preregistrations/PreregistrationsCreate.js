import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Dropdown, Form, FormField, Icon, Modal, Popup } from 'semantic-ui-react'
import { Breadcrumb, Button, Header } from 'semantic-ui-react'
import formToObject from 'form-to-object'
import LoadingPage from '../../Utils/LoadingPage'
import Notification from '../../Utils/Notification'
import Literals from './Literals'
import Pagewrapper from '../../Common/Wrappers/Pagewrapper'
import Headerwrapper from '../../Common/Wrappers/Headerwrapper'
import Headerbredcrump from '../../Common/Wrappers/Headerbredcrump'
import FormInput from '../../Utils/FormInput'
import Contentwrapper from '../../Common/Wrappers/Contentwrapper'
import Pagedivider from '../../Common/Styled/Pagedivider'
import Footerwrapper from '../../Common/Wrappers/Footerwrapper'
import validator from '../../Utils/Validator'
import { FormContext } from '../../Provider/FormProvider'
import PatientdefinesCreate from '../../Containers/Patientdefines/PatientdefinesCreate'
import DepartmentsCreate from '../../Containers/Departments/DepartmentsCreate'
import CasesCreate from '../../Containers/Cases/CasesCreate'
import Gobackbutton from '../../Common/Gobackbutton'
import Submitbutton from '../../Common/Submitbutton'
export default class PreregistrationsCreate extends Component {

  PAGE_NAME = 'PreregistrationsCreate'

  constructor(props) {
    super(props)
    this.state = {
      newRegister: false,
      Isdatafetched: false,
      modelOpened: false
    }
  }


  componentDidMount() {
    const { GetPatientdefines, GetDepartments, GetCases } = this.props
    GetPatientdefines()
    GetDepartments()
    GetCases()



  }

  componentDidUpdate() {
    const { Patientdefines, Patients, Departments, Cases } = this.props

    const loadingstatus = Patients.isLoading && Departments.isLoading && Cases.isLoading && Patientdefines.isLoading
    if (!loadingstatus && !this.state.Isdatafetched) {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      this.context.setFormstates({
        ...this.context.formstates,
        [`${this.PAGE_NAME}/Registerdate`]: formattedDate,
      })
      this.setState({ Isdatafetched: true })
    }
  }

  render() {

    const { Patientdefines, Patients, Departments, Cases, Profile, history, closeModal } = this.props
    const { isLoading, isDispatching } = Patients

    const Patientdefineoptions = (Patientdefines.list || []).filter(u => u.Isactive).map(define => {
      return { key: define.Uuid, text: `${define.Firstname} ${define.Lastname}-${define.CountryID}`, value: define.Uuid }
    })

    const Departmentoptions = (Departments.list || []).filter(u => u.Isactive && u.Ishavepatients).map(department => {
      return { key: department.Uuid, text: department.Name, value: department.Uuid }
    })

    const Casesoptions = (Cases.list || []).filter(u => u.Isactive).filter(u => u.Casestatus !== 1).map(cases => {
      return { key: cases.Uuid, text: cases.Name, value: cases.Uuid }
    })

    const Genderoptions = [
      { key: 0, text: 'ERKEK', value: "ERKEK" },
      { key: 1, text: 'KADIN', value: "KADIN" }
    ]

    const changeRegistertype = <Popup
      trigger={<div onClick={() => {
        this.setState({ newRegister: !this.state.newRegister })
        this.context.setFormstates({
          ...this.context.formstates,
          [`${this.PAGE_NAME}/PatientdefineID`]: null,
          [`${this.PAGE_NAME}/Firstname`]: null,
          [`${this.PAGE_NAME}/Lastname`]: null,
          [`${this.PAGE_NAME}/Fathername`]: null,
          [`${this.PAGE_NAME}/Mothername`]: null,
          [`${this.PAGE_NAME}/CountryID`]: null,
          [`${this.PAGE_NAME}/Dateofbirth`]: null,
          [`${this.PAGE_NAME}/Placeofbirth`]: null,
          [`${this.PAGE_NAME}/Gender`]: null,
        })
      }} className='cursor-pointer ml-2'  ><Icon name="redo" /></div>}
      content={`${!this.state.newRegister ? Literals.Columns.Newregister[Profile.Language] : Literals.Columns.Registered[Profile.Language]} Hasta Girişi İçin Tıklanıyız`}
      position='top left'
    />

    return (
      isLoading || isDispatching ? <LoadingPage /> :
        <Pagewrapper>
          <Headerwrapper>
            <Headerbredcrump>
              <Link to={"/Preregistrations"}>
                <Breadcrumb.Section>{Literals.Page.Pageheader[Profile.Language]}</Breadcrumb.Section>
              </Link>
              <Breadcrumb.Divider icon='right chevron' />
              <Breadcrumb.Section>{Literals.Page.Pagecreateheader[Profile.Language]}</Breadcrumb.Section>
            </Headerbredcrump>
            {closeModal && <Button className='absolute right-5 top-5' color='red' onClick={() => { closeModal() }}>Kapat</Button>}
          </Headerwrapper>
          <Pagedivider />
          <Contentwrapper>
            <Form>
              {!this.state.newRegister ?
                <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Patientdefine[Profile.Language]} name="PatientdefineID" options={Patientdefineoptions} formtype="dropdown" required additionalicon={changeRegistertype} modal={PatientdefinesCreate} />
                :
                <React.Fragment>
                  <Form.Group widths={'equal'}>
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Firstname[Profile.Language]} name="Firstname" additionalicon={changeRegistertype} />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Lastname[Profile.Language]} name="Lastname" />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Fathername[Profile.Language]} name="Fathername" />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Mothername[Profile.Language]} name="Mothername" />
                  </Form.Group>
                  <Form.Group widths={'equal'}>
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.CountryID[Profile.Language]} name="CountryID" required maxLength={11} validationfunc={this.validateTcNumber} validationmessage={"Geçerli Bir Tc Giriniz!"} />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Dateofbirth[Profile.Language]} name="Dateofbirth" type="date" />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Placeofbirth[Profile.Language]} name="Placeofbirth" />
                    <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Gender[Profile.Language]} name="Gender" options={Genderoptions} formtype="dropdown" />
                  </Form.Group>
                </React.Fragment>
              }
              <Form.Group widths={'equal'}>
                <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Deparment[Profile.Language]} name="DepartmentID" options={Departmentoptions} formtype="dropdown" required modal={DepartmentsCreate} />
                <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Case[Profile.Language]} name="CaseID" options={Casesoptions} formtype="dropdown" required modal={CasesCreate} />
              </Form.Group>
              <Form.Group widths={'equal'}>
                <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Registerdate[Profile.Language]} name="Registerdate" type='date' required />
                <FormInput page={this.PAGE_NAME} placeholder={Literals.Columns.Approvaldate[Profile.Language]} name="Approvaldate" type='date' required />
              </Form.Group>
              <Footerwrapper>
                <Gobackbutton
                  history={history}
                  redirectUrl={"/Preregistrations"}
                  buttonText={Literals.Button.Goback[Profile.Language]}
                />
                <Submitbutton
                  isLoading={isLoading}
                  buttonText={Literals.Button.Create[Profile.Language]}
                  submitFunction={this.handleSubmit}
                />
              </Footerwrapper>
            </Form>
          </Contentwrapper>
        </Pagewrapper >
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { Patientdefines, fillPatientnotification, AddPatients, history, Profile, closeModal } = this.props
    const data = this.context.getForm(this.PAGE_NAME)
    if (!validator.isISODate(data.Registerdate)) {
      data.Registerdate = null
    }
    if (!validator.isISODate(data.Approvaldate)) {
      data.Approvaldate = null
    }
    if (!validator.isISODate(data.Dateofbirth)) {
      data.Dateofbirth = null
    }

    const response = {
      Stocks: [],
      Patientstatus: 0,
      Files: [],
      Releasedate: null,
      RoomID: "",
      FloorID: "",
      BedID: "",
      Iswaitingactivation: true,
      ImageID: "",
      PatientdefineID: "",
      Patientdefine: {},
      Approvaldate: data.Approvaldate,
      Registerdate: data.Registerdate,
      DepartmentID: this.context.formstates[`${this.PAGE_NAME}/DepartmentID`],
      CheckperiodID: "",
      TodogroupdefineID: "",
      CaseID: this.context.formstates[`${this.PAGE_NAME}/CaseID`]
    }

    if (this.state.newRegister) {
      response.Patientdefine = {
        CountryID: data.CountryID,
        Dateofbirth: data.Dateofbirth,
        Fathername: data.Fathername,
        Firstname: data.Firstname,
        Lastname: data.Lastname,
        Mothername: data.Mothername,
        Placeofbirth: data.Placeofbirth,
        Gender: this.context.formstates[`${this.PAGE_NAME}/Gender`],
        CostumertypeID: "",
        PatienttypeID: "",
      }
    } else {
      response.Patientdefine = (Patientdefines.list || []).find(u => u.Uuid === this.context.formstates[`${this.PAGE_NAME}/PatientdefineID`])
      response.PatientdefineID = response.Patientdefine?.Uuid
    }

    let errors = []
    if (!validator.isUUID(response.DepartmentID)) {
      errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.Departmentrequired[Profile.Language] })
    }
    if (!validator.isUUID(response.CaseID)) {
      errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.CaseID[Profile.Language] })
    }
    if (!validator.isISODate(response.Registerdate)) {
      errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.Registerdaterequired[Profile.Language] })
    }
    if (!validator.isISODate(response.Approvaldate)) {
      errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.Approvaldaterequired[Profile.Language] })
    }
    if (this.state.newRegister ? !validator.isString(response.Patientdefine?.CountryID) : !validator.isUUID(response.PatientdefineID)) {
      errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.Patientdefinerequired[Profile.Language] })
    }
    if (errors.length > 0) {
      errors.forEach(error => {
        fillPatientnotification(error)
      })
    } else {
      AddPatients({ data: response, history, redirectUrl: "/Preregistrations", closeModal })
    }
  }

  validateTcNumber = (tcNumber) => {
    if (/^[1-9][0-9]{10}$/.test(tcNumber)) {
      const numberArray = tcNumber.split('').map(Number);
      const lastDigit = numberArray.pop();
      const sum = numberArray.reduce((acc, current, index) => acc + current, 0);
      const tenthDigit = sum % 10;

      if ((tenthDigit === lastDigit && numberArray[0] !== 0) || (sum % 10 === 0 && lastDigit === 0)) {
        return true;
      }
    }
    return false;
  };
}
PreregistrationsCreate.contextType = FormContext