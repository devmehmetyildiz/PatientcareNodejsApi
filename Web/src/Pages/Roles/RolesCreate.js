import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Checkbox, Divider, Form, Search, Breadcrumb, Button } from 'semantic-ui-react'
import Literals from './Literals'
import validator from '../../Utils/Validator'
import { FormContext } from '../../Provider/FormProvider'
import { FormInput, Contentwrapper, Footerwrapper, Gobackbutton, Headerbredcrump, Headerwrapper, LoadingPage, Pagedivider, Pagewrapper, Submitbutton } from '../../Components'
export default class RolesCreate extends Component {

    PAGE_NAME = 'RolesCreate'

    constructor(props) {
        super(props)
        this.state = {
            selectedPrivileges: [],
            searchParam: ''
        }
    }

    componentDidMount() {
        const { GetPrivileges, GetPrivilegegroups } = this.props
        GetPrivileges()
        GetPrivilegegroups()
    }

    render() {
        const { Roles, Profile, history, closeModal } = this.props
        const { privileges, privilegegroups, isLoading } = Roles

        const decoratedgroups = (privilegegroups || []).map(group => {
            const foundedPrivileges = (privileges || []).filter(u => u.group[Profile.Language] === group[Profile.Language] && (u.text[Profile.Language].toLowerCase()).includes(this.state.searchParam.toLowerCase()))
            return foundedPrivileges.length > 0 ? { name: group[Profile.Language], privileges: foundedPrivileges } : null
        }).filter(u => u)

        return (
            isLoading ? <LoadingPage /> :
                <Pagewrapper>
                    <Headerwrapper>
                        <Headerbredcrump>
                            <Link to={"/Roles"}>
                                <Breadcrumb.Section >{Literals.Page.Pageheader[Profile.Language]}</Breadcrumb.Section>
                            </Link>
                            <Breadcrumb.Divider icon='right chevron' />
                            <Breadcrumb.Section>{Literals.Page.Pagecreateheader[Profile.Language]}</Breadcrumb.Section>
                        </Headerbredcrump>
                        {closeModal && <Button className='absolute right-5 top-5' color='red' onClick={() => { closeModal() }}>Kapat</Button>}
                    </Headerwrapper>
                    <Pagedivider />
                    <Contentwrapper>
                        <Form>
                            <FormInput page={this.PAGE_NAME} required placeholder={Literals.Columns.Name[Profile.Language]} name="Name" />
                            <div className='w-full py-2'>
                                <Search
                                    placeholder='Search...'
                                    onSearchChange={(e) => { this.setState({ searchParam: e.target.value }) }}
                                    showNoResults={false}
                                />
                            </div>
                            <div className={`mb-4 outline outline-[1px] rounded-md outline-gray-200 p-4 overflow-y-auto max-h-[calc(100vh-${Profile.Ismobile ? '27' : '30'}.2rem)]`}>
                                {(decoratedgroups || []).map((privilegegroup, index) => {
                                    return <div key={index} className="mb-8">
                                        <div className='flex flex-row justify-start items-center'>
                                            <label className='text-[#000000de] font-bold'>{privilegegroup?.name}</label>
                                            <Checkbox toggle className='ml-4'
                                                onClick={(e) => { this.handleAddgroup(e) }}
                                                id={privilegegroup?.name}
                                                checked={this.Checkprivilegesgroup(privilegegroup?.name) ? true : false}
                                            />
                                        </div>
                                        <Divider className='w-full  h-[1px]' />
                                        <div className={`grid ${Profile.Ismobile ? 'grid-cols-1' : 'lg:grid-cols-3 md:grid-cols-2 '} gap-2`}>
                                            {(privilegegroup?.privileges || []).map((privilege, index) => {
                                                return <Checkbox toggle className='m-2'
                                                    checked={(this.state.selectedPrivileges.length > 0 ? this.state.selectedPrivileges : []).find(u => u.code === privilege.code) ? true : false}
                                                    onClick={(e) => { this.handleClickprivilege(e) }}
                                                    id={privilege.code}
                                                    key={index}
                                                    label={privilege.text[Profile.Language]} />
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </Form>
                    </Contentwrapper>
                    <Footerwrapper>
                        <Form.Group widths={'equal'}>
                            <Gobackbutton
                                history={history}
                                redirectUrl={"/Roles"}
                                buttonText={Literals.Button.Goback[Profile.Language]}
                            />
                            <Button floated="right" type="button" color='grey' onClick={(e) => {
                                this.setState({ selectedPrivileges: [] })
                            }}>{Literals.Button.Clear[Profile.Language]}</Button>
                        </Form.Group>
                        <Submitbutton
                            isLoading={isLoading}
                            buttonText={Literals.Button.Create[Profile.Language]}
                            submitFunction={this.handleSubmit}
                        />
                    </Footerwrapper>
                </Pagewrapper >
        )
    }


    handleSubmit = (e) => {
        e.preventDefault()

        const { AddRoles, history, fillRolenotification, Profile, closeModal } = this.props

        const data = this.context.getForm(this.PAGE_NAME)
        data.Privileges = this.state.selectedPrivileges.map(u => { return u.code })

        let errors = []
        if (!validator.isString(data.Name)) {
            errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.NameRequired[Profile.Language] })
        }
        if (!validator.isArray(data.Privileges)) {
            errors.push({ type: 'Error', code: Literals.Page.Pageheader[Profile.Language], description: Literals.Messages.PrivilegesRequired[Profile.Language] })
        }
        if (errors.length > 0) {
            errors.forEach(error => {
                fillRolenotification(error)
            })
        } else {
            AddRoles({ data, history, closeModal })
        }
    }

    Checkprivilegesgroup = (group) => {
        const { Profile } = this.props
        const selectedlist = (this.state.selectedPrivileges || []).filter(u => u.group[Profile.Language] === group)
        const list = (this.props.Roles.privileges || []).filter(u => u.group[Profile.Language] === group)
        if ((list.length === selectedlist.length) && list.length !== 0 && selectedlist.length !== 0) {
            return true
        } else {
            return false
        }
    }

    handleAddgroup = (e) => {
        const { Profile } = this.props
        e.target.checked
            ? this.setState({ selectedPrivileges: this.state.selectedPrivileges.filter(function (el) { return (el.group[Profile.Language] !== e.target.id) }).concat(this.props.Roles.privileges.filter(u => u.group[Profile.Language] === e.target.id) || []) })
            : this.setState({ selectedPrivileges: this.state.selectedPrivileges.filter(function (el) { return (el.group[Profile.Language] !== e.target.id) }) })
    }

    handleClickprivilege = (e) => {
        e.target.checked
            ? this.setState({ selectedPrivileges: [...this.state.selectedPrivileges, this.props.Roles.privileges.find(u => u.code === e.target.id)] })
            : this.setState({ selectedPrivileges: this.state.selectedPrivileges.filter(function (el) { return el.code !== e.target.id; }) })
    }
}
RolesCreate.contextType = FormContext