import request from '@/utils/request'

export default{
    //1.讲师列表(条件查询带分页)
    //currnt 当前页   limit 每页记录数   teacherQuery 分页的对象
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            //url: '/table/list/'+current+'/'+limit,
            url:`/eduService/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换成json进行传递到接口里面
            data:teacherQuery
          })
    },
    //2.按id删除讲师
    deleteTeacherId(id){
        return request({
            url:`/eduService/teacher/${id}`,
            method: 'delete', 
        })
    },
    //3.添加讲师
    addTeacher(teacher){
        return request({
            url:`/eduService/teacher/addTeacher`,
            method: 'post', 
            data:teacher
        })
    },
    //根据id查询讲师
    getTeacherInfo(id){
        return request({
            url:`/eduService/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },
    //修改讲师
    updateTeacher(teacher){
        return request({
            url:`/eduService/teacher/updateTeacher`,
            method: 'post',
            data:teacher
        })
    }
}
