import React from 'react'
import { Button, Dimmer, DimmerDimmable, Loader, Modal } from 'semantic-ui-react'

export default function PatientvisitsApprove(props) {

    const { open, setOpen, record, setRecord, Patientvisits, Patients, Patientdefines, Profile, ApprovePatientvisits, GetPatientvisits } = props

    const t = Profile?.i18n?.t

    const patient = (Patients.list || []).find(u => u.Uuid === record?.PatientID)
    const patientdefine = (Patientdefines.list || []).find(u => u.Uuid === patient?.PatientdefineID)
    const name = `${patientdefine?.Firstname} ${patientdefine?.Lastname}`

    return (
        <DimmerDimmable blurring >
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <Modal.Header >{t('Pages.Patientvisits.Page.ApproveHeader')}</Modal.Header>
                <Modal.Content image>
                    <Dimmer inverted active={Patientvisits.isLoading}>
                        <Loader inverted active />
                    </Dimmer>
                    <Modal.Description>
                        <p>
                            <span className='font-bold'>{name} </span>
                            {t('Pages.Patientvisits.Approve.Label.Check')}
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => {
                        setOpen(false)
                        setRecord(null)
                    }}>
                        {t('Common.Button.Giveup')}
                    </Button>
                    <Button
                        content={t('Common.Button.Approve')}
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => {
                            ApprovePatientvisits({
                                patientvisitID: record?.Uuid || '',
                                onSuccess: () => {
                                    setOpen(false)
                                    setRecord(null)
                                    GetPatientvisits()
                                }
                            })
                        }}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </DimmerDimmable>
    )
}
