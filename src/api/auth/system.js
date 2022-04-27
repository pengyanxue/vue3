import request from '@/utils/request'

export function getDisData(params) {
  return request({
    url: `/admin/auth-dictionary/data/search` + params,
    method: 'get'
  })
}

export function getTree(params) {
  return request({
    url: '/admin/auth-dictionary/category/defaultTree?' + params,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: `/admin/auth-dictionary/data/add`,
    method: 'post',
    data
  })
}
/* 新增数据字典类别，与之前的区别是不需要code */
export function addInitialValueDict(data) {
  return request({
    url: `/admin/auth-dictionary/data/addInitialValueDict`,
    method: 'post',
    data
  })
}
/* 修改数据字典类别，与之前的区别是不需要code */
export function updateInitialValueDict(data) {
  return request({
    url: `/admin/auth-dictionary/data/updateInitialValueDict`,
    method: 'post',
    data
  })
}

export function getItem(params) {
  return request({
    url: `/admin/auth-dictionary/data/preUpdate/` + params,
    method: 'get'
  })
}

export function getLook(params) {
  return request({
    url: `/admin/auth-dictionary/data/preView/` + params,
    method: 'get'
  })
}

export function personnel(params) {
  return request({
    url: `/admin/auth-user/account/list?&resultFormat=map&ids=` + params,
    method: 'get'
  })
}

export function getSelect() {
  return request({
    url: `/admin/auth-dictionary/category/search?parentId=402880f4-7133e025-0171-34124faf-0007`,
    method: 'get'
  })
}

export function submitData(urlPath, data) {
  const form = new FormData()
  const keys = Object.keys(data)
  keys.forEach(key => {
    form.append(key, data[key])
  })
  console.log('look', form)
  return request({
    url: urlPath,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: form
  })
}

export function logData(params) {
  return request({
    url: `/admin/operation-log/search/log` + params,
    method: 'get'
  })
}

export function downloadFile(urlPath, data, logDec) {
  return request({
    url: urlPath,
    method: 'post',
    responseType: 'arraybuffer',
    data: data,
    headers: { logDec: encodeURI(logDec) || '' }
  })
}

export function downloadExportFile(url) {
  return request({
    url: url,
    method: 'get',
    responseType: 'arraybuffer'
  })
}

// 新增上传
export function uploadUserFiles(data) {
  return request({
    url: `../admin/auth-user/account/import`,
    method: 'post',
    data: data
  })
}
// 新增上传
export function uploadRegistUserFiles(data) {
  return request({
    url: `../admin/auth-user/account/import/regist`,
    method: 'post',
    data: data
  })
}

export function uploadUserFilesV2(data, logDec) {
  return request({
    url: '../admin/auth-admin/calendar/import',
    method: 'post',
    data: data,
    headers: {
      logDec: encodeURI(logDec)
    }
  })
}

/*export function selectData() {
  return request({
    url: `/admin/auth-dictionary/category/list?parentId=402880f4-7133e025-0171-34124faf-0007`,
    method: 'get'
  })
}*/

export function selectData() {
  return request({
    url: `/admin/auth-dictionary/data/listDictionary?id=402880f4-7133e025-0171-34124faf-0007`,
    method: 'get'
  })
}

export function deleteData(params) {
  return request({
    url: '/admin/operation-log/search/delete',
    method: 'get',
    params: params
  })
}

export function update(data) {
  return request({
    url: `/admin/auth-dictionary/data/update`,
    method: 'post',
    data
  })
}

export function sysLogData(params) {
  return request({
    url: `/admin/operation-log/login-log/search` + params,
    method: 'get'
  })
}

// 数据字典上传
export function uploadDictionaryFiles(data) {
  return request({
    url: `../admin/auth-dictionary/data/import`,
    method: 'post',
    data: data
  })
}
// 新数据字典上传
export function uploadDicFiles(data) {
  return request({
    url: `../admin/auth-dictionary/data/importInitialValueDict`,
    method: 'post',
    data: data
  })
}
// 数据字典上传
export function resetPassword(data) {
  return request({
    url: `/admin/auth-user/resetPassword`,
    method: 'post',
    data: data
  })
}
