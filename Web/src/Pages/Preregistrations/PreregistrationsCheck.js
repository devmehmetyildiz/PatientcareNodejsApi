import React, { useEffect, useState } from 'react'
import validator from '../../Utils/Validator'
import { Button, Checkbox, Dropdown, Form, Modal } from 'semantic-ui-react'
import { Contentwrapper, PatientsDetailCard } from '../../Components'
import Formatdate from '../../Utils/Formatdate'
import { CASE_PATIENT_STATUS_DEATH, CASE_PATIENT_STATUS_LEFT } from '../../Utils/Constants'

export default function PreregistrationsCheck(props) {
  const {
    handleCheckmodal,
    CheckPatients,
    CancelCheckPatients,
    Profile,
    Patients,
    Patientdefines,
    Stocks,
    Stockdefines,
    Units,
    Users,
    Cases,
    Departments,
    Stocktypes,
    Stocktypegroups,
    Files,
    Costumertypes,
    Patienttypes,
    Usagetypes,
    GetPatientdefines,
    GetStocks,
    GetStockdefines,
    GetUnits,
    GetCases,
    GetDepartments,
    GetStocktypes,
    GetStocktypegroups,
    GetUsers,
    GetFiles,
    GetUsagetypes,
    GetPatienttypes,
    GetCostumertypes,
    handleSelectedPatient,
    fillPatientnotification
  } = props

  const { isCheckmodalopen, selected_record, isCheckdeactive } = Patients

  const t = Profile?.i18n?.t

  const {
    CaseID,
    Uuid,
    Isoninstitution
  } = selected_record

  const Isdeactive = isCheckdeactive
  const [selectedcase, setSelectedcase] = useState(CaseID)
  const [selectedinfo, setSelectedinfo] = useState(null)
  const [selectedIsoninstitution, setSelectedIsoninstitution] = useState(Isoninstitution)

  useEffect(() => {
    if (isCheckmodalopen && !Users.isLoading) {
      GetPatientdefines()
      GetStocks()
      GetStockdefines()
      GetUnits()
      GetCases()
      GetDepartments()
      GetStocktypes()
      GetStocktypegroups()
      GetUsers()
      GetUsagetypes()
      GetFiles()
      GetCostumertypes()
      GetPatienttypes()
    }
  }, [isCheckmodalopen])

  const stocks = (Stocks.list || []).filter(u => u.Isactive).filter(u => u.WarehouseID === selected_record?.Uuid).map(element => {
    return {
      ...element,
      key: Math.random(),
      Skt: validator.isISODate(element.Skt) ? Formatdate(element.Skt) : element.Skt
    }
  });

  const files = (Files.list || []).filter(u => u.Isactive).filter(u => u.ParentID === Uuid).map(element => {
    return {
      ...element,
      key: Math.random(),
      Usagetype: ((element?.Usagetype || '').split(',') || []).map(u => {
        return (Usagetypes.list || []).find(type => type.Uuid === u)?.Name
      })
    }
  });

  const CaseOption = (Cases.list || [])
    .filter(u => u.Isactive)
    .filter(u => u.Patientstatus !== CASE_PATIENT_STATUS_DEATH && u.Patientstatus !== CASE_PATIENT_STATUS_LEFT)
    .map(casedata => {
      const departmentuuids = (casedata?.Departmentuuids || []).map(u => u.DepartmentID);
      let isHavepatients = false
      departmentuuids.forEach(departmentuuid => {
        const department = (Departments.list || []).find(u => u.Uuid === departmentuuid)
        if (department?.Ishavepatients === true || department?.Ishavepatients === 1) {
          isHavepatients = true
        }
      });
      return isHavepatients === true && casedata?.CaseStatus === 0 ? { key: casedata.Uuid, text: casedata.Name, value: casedata.Uuid } : false
    }).filter(u => u)

  return (
    <Modal
      onClose={() => {
        handleCheckmodal(false)
        setSelectedcase(null)
        setSelectedinfo(null)
        setSelectedIsoninstitution(false)
      }}
      onOpen={() => {
        setSelectedcase(null)
        setSelectedinfo(null)
        setSelectedIsoninstitution(false)
        handleCheckmodal({ modal: true, deactive: Isdeactive ? Isdeactive : false })
      }}
      open={isCheckmodalopen}
    >
      <Modal.Header>{Isdeactive ? t('Pages.Preregistrations.Page.Modal.CancelCheckHeader') : t('Pages.Preregistrations.Page.Modal.CheckHeader')}</Modal.Header>
      <PatientsDetailCard
        Profile={Profile}
        Patients={Patients}
        Patientdefines={Patientdefines}
        Stocks={Stocks}
        Stockdefines={Stockdefines}
        Units={Units}
        Users={Users}
        Cases={Cases}
        Departments={Departments}
        Stocktypes={Stocktypes}
        Stocktypegroups={Stocktypegroups}
        Files={Files}
        Costumertypes={Costumertypes}
        Patienttypes={Patienttypes}
        Usagetypes={Usagetypes}
        fillnotification={fillPatientnotification}
        stocks={stocks}
        files={files}
      />
      <Modal.Content>
        <Contentwrapper>
          <Form>
            <Form.Group widths={'equal'}>
              <Form.Field>
                <label
                  className='text-[#000000de]'>
                  {t('Pages.Preregistrations.Column.Case')}
                </label>
                <Dropdown
                  value={selectedcase}
                  clearable
                  search
                  fluid
                  selection
                  options={CaseOption}
                  onChange={(e, data) => { setSelectedcase(data.value) }}
                />
              </Form.Field>
              <Form.Input
                label={t('Pages.Preregistrations.Column.Info')}
                value={selectedinfo || ''}
                onChange={(e) => { setSelectedinfo(e.target.value) }}
                fluid
              />
            </Form.Group>
            <Form.Group widths={'equal'}>
              <Form.Field>
                <label
                  className='text-[#000000de]'>
                  {t('Pages.Preregistrations.Complete.Label.Isoninstitution')}
                </label>
                <Checkbox toggle className='m-2'
                  checked={selectedIsoninstitution}
                  onClick={() => { setSelectedIsoninstitution(prev => !prev) }}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </Contentwrapper>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => {
          handleCheckmodal(false)
          setSelectedcase(null)
          setSelectedinfo(null)
          setSelectedIsoninstitution(false)
          handleSelectedPatient({})
        }}>
          {t('Common.Button.Goback')}
        </Button>
        {Isdeactive
          ? <Button
            content={t('Common.Button.CancelCheck')}
            labelPosition='right'
            icon='checkmark'
            className=' !bg-[#2355a0] !text-white'
            onClick={() => {
              let errors = []
              if (!validator.isUUID(selectedcase)) {
                errors.push({ type: 'Error', code: t('Pages.Preregistrations.Page.Header'), description: t('Pages.Preregistrations.Create.Messages.CaseRequired') })
              }
              if (errors.length > 0) {
                errors.forEach(error => {
                  fillPatientnotification(error)
                })
              } else {
                const {
                  Uuid
                } = selected_record
                CancelCheckPatients({
                  Uuid,
                  Cancelcheckinfo: selectedinfo,
                  CaseID: selectedcase,
                  Isoninstitution: selectedIsoninstitution
                })
                handleCheckmodal(false)
                handleSelectedPatient({})
              }
            }}
            positive
          />
          : <Button
            content={t('Common.Button.Check')}
            labelPosition='right'
            icon='checkmark'
            className=' !bg-[#2355a0] !text-white'
            onClick={() => {
              let errors = []
              if (!validator.isUUID(selectedcase)) {
                errors.push({ type: 'Error', code: t('Pages.Preregistrations.Page.Header'), description: t('Pages.Preregistrations.Create.Messages.CaseRequired') })
              }
              if (errors.length > 0) {
                errors.forEach(error => {
                  fillPatientnotification(error)
                })
              } else {
                const {
                  Uuid
                } = selected_record
                CheckPatients({
                  Uuid,
                  Checkinfo: selectedinfo,
                  CaseID: selectedcase,
                  Isoninstitution: selectedIsoninstitution
                })
                handleCheckmodal(false)
                handleSelectedPatient({})
              }
            }}
            positive
          />
        }
      </Modal.Actions>
    </Modal>
  )
}
