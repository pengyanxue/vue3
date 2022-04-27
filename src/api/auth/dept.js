import request from '@/utils/request'

export function getDeptTree(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function initDeptList(urlPath, searchParams) {
  return request({
    url: urlPath,
    method: 'get',
    params: searchParams
  })
}

export function searchDept(urlPath, searchParams) {
  return request({
    url: urlPath,
    method: 'get',
    params: searchParams
  })
}

export function saveOrUpdate(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function homePageSelect() {
  return request({
    url: `/admin/cms-service/siteBaseInfo/getAdminCmsSiteList`,
    method: `get`
  })
}

export function view(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function update(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function move(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function activeBatch(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function discardBatch(urlPath, data) {
  return request({
    url: urlPath,
    method: 'post',
    data
  })
}

export function logout(urlPath) {
  return request({
    url: urlPath,
    method: 'get'
  })
}

export function getTabData(params) {
  return request({
    url: `/admin/auth-user/account/search` + params,
    method: 'get'
  })
}

export function getValidateMobileNumberUniq(params) {
  return request({
    url: `/admin/auth-user/validateMobileNumberUniq` + params,
    method: 'get'
  })
}

export function getValidateDepartment(params) {
  return request({
    url: `/admin/auth-department/validateDepartment` + params,
    method: 'get'
  })
}

export function getSearchRole(params) {
  return request({
    url: `/admin/auth-user/account/searchRole` + params,
    method: 'get'
  })
}

export function getUserTree() {
  return request({
    url: `/admin/auth-department/defaultStaticTree?treeNodeParentId=~&all=1`,
    method: 'get'
  })
}

export function getSex() {
  return request({
    url: `/admin/auth-dictionary/data/list?category.id=8a80cb81-712ea04e-0171-33cbc2bb-0014`,
    method: 'get'
  })
}

export function getNation() {
  return request({
    url: `/admin/auth-dictionary/data/list?category.id=402880f4-7133e025-0171-340fbf28-0004`,
    method: 'get'
  })
}

export function isAdmin(param) {
  return request({
    url: `/admin/auth-user/validateUserNameUniq?userName=` + param,
    method: 'get'
  })
}

export function isEmail(param) {
  return request({
    url: `/admin/auth-user/validateEmailUniq?email=` + param,
    method: 'get'
  })
}

export function idCard() {
  return request({
    url: `/admin/auth-dictionary/data/list?category.id=4028c7d2-61738527-0161-73882e4c-0001`,
    method: 'get'
  })
}

export function sendData(data) {
  return request({
    url: `/admin/auth-user/account/add`,
    method: 'post',
    data
  })
}
export function sendRegistData(data) {
  return request({
    url: `/admin/auth-user/account/add/regist`,
    method: 'post',
    data
  })
}

export function userGroupTab(params) {
  return request({
    url: `/admin/auth-usergroup/search` + params,
    method: 'get'
  })
}

export function preAdd() {
  return request({
    url: `/admin/auth-usergroup/preAdd`,
    method: 'get'
  })
}

export function send(data) {
  return request({
    url: `/admin/auth-usergroup/add`,
    method: 'post',
    data
  })
}

export function getUpdate(params) {
  return request({
    url: `/admin/auth-usergroup/preUpdate/` + params,
    method: 'get'
  })
}

export function upData(data) {
  return request({
    url: `/admin/auth-usergroup/update`,
    method: 'post',
    data
  })
}

export function lookData(params) {
  return request({
    url: `/admin/auth-usergroup/preView/` + params,
    method: 'get'
  })
}

export function getUser(params) {
  return request({
    url: `/admin/auth-user/account/preGrant?ids=` + params,
    method: 'get'
  })
}

export function Tree() {
  return request({
    url: `/admin/auth-authorization/role/defaultTree?treeNodeParentId=~`,
    method: 'get'
  })
}

export function findDataAuth(params) {
  return request({
    url: `/admin/auth-authorization/dataAuthType/findDataAuthTypesByRoleIds?ids=` + params,
    method: 'get'
  })
}

export function addUserAccountDataAuth(params) {
  return request({
    url: '/admin/auth-authorization/dataAuth/addUserAccountDataAuth',
    method: 'post',
    data: params
  })
}

export function getUserAccountDataAuthByUserId(userId) {
  return request({
    url: `/admin/auth-authorization/dataAuth/getUserAccountDataAuthByUserId?userId=${userId}`,
    method: 'get'
  })
}

export function findAdmin(params) {
  return request({
    url: `/admin/auth-user/account/preSetDataAdministrator?` + params,
    method: 'get'
  })
}

export function adminTree(params) {
  return request({
    url: `/admin/auth-user/dynamicUserDepartmentTree` + params,
    method: 'get'
  })
}

export function getEditUser(params) {
  return request({
    url: `/admin/auth-user/account/preUpdate/` + params,
    method: 'get'
  })
}

export function getLookUser(params) {
  return request({
    url: `/admin/auth-user/account/view/` + params,
    method: 'get'
  })
}

export function listDataAdministratorIds(params) {
  return request({
    url: `/admin/auth-authorization/dataAuth/listDataAdministratorIds?dataAuthTypeCode=USER&managedDataId=` + params,
    method: 'get'
  })
}

export function accountUpdate(data) {
  return request({
    url: `admin/auth-user/account/update`,
    method: 'post',
    data
  })
}

export function accountRegistUpdate(data) {
  return request({
    url: `admin/auth-user/account/update/regist`,
    method: 'post',
    data
  })
}

export function dealWithProcessVariables(params) {
  return request({
    url: `/admin/workflow/flow/dealWithProcessVariables`,
    method: 'post',
    params: params
  })
}

export function newMessage() {
  return request({
    url: `/admin/social-message/persSysMsg/getSysMsgUnread`,
    method: 'post',
  })
}

export function homePageDetail(params) {
  return request({
    url: `/admin/cms-service/cmsSite/searchAllArticles?siteId=` + params,
    method: 'get',
  })
}
  // 用户授权
export function getReference() {
  return request({
    url: '/admin/auth-user/getReference',
    method: 'get'
  })
}
