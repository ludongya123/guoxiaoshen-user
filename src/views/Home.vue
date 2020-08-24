<template>
  <div class="home">
    <van-form :show-error-message="true" label-width="100" :validate-first="true" :scroll-to-error="true" @submit="onSubmit">
      <h5>基本信息</h5>
      <van-field name="name" v-model="user.name" label="姓名" placeholder="请输入本人姓名" :rules="[{ required: true }]" clearable/>
      <van-field name="mobile" v-model="user.mobile" type="tel" label="手机号" placeholder="请输入本人手机号" :rules="[{pattern: testTel,message:'格式错误' }]" clearable />
      <van-field name="idCard" v-model="user.idCard" type="text" label="身份证号" maxlength="19" placeholder="请输入本人身份证号" :rules="[{ required: true }]" clearable />
      <van-field name="education" label="学历" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.education" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">高中</van-radio>
            <van-radio :name="2">大专</van-radio>
            <van-radio :name="3">本科</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="maritalStatus" label="婚姻状况" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.maritalStatus" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="3">未婚</van-radio>
            <van-radio :name="1">已婚</van-radio>
            <van-radio :name="2">离异</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="domicile" v-model="user.domicile" type="text" label="户籍所在地" placeholder="请输入户籍所在城市" :rules="[{ required: true }]" clearable />
      <van-field name="residentialAddress" v-model="user.residentialAddress" type="textarea" autosize label="现居住地址" placeholder="请输入现居住详细地址" :rules="[{ required: true }]" clearable />
      <van-field name="currentHousingNature" label="现居住房性质" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.currentHousingNature" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">房主</van-radio>
            <van-radio :name="2">租客</van-radio> 
          </van-radio-group>
        </template>
      </van-field>
      <h5>工作信息</h5>
      <van-field name="company" v-model="user.company" type="text" label="单位名称" placeholder="请输入单位名称" :rules="[{ required: true }]" clearable />
      <van-field name="jobType" label="职业类别" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.jobType" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">上班人群</van-radio>
            <van-radio :name="2">经营人事</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="incomeType" label="收入类型" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.incomeType" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">现金工薪</van-radio>
            <van-radio :name="2">打卡工薪</van-radio> 
            <van-radio :name="3">自营收入</van-radio> 
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="department" v-model="user.department" type="text" label="所属部门" placeholder="请输入所属部门"  clearable />
      <van-field name="position" label="职位" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.position" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">普通员工</van-radio>
            <van-radio :name="2">管理层</van-radio> 
            <van-radio :name="3">法人</van-radio> 
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="salary" v-model="user.salary" type="number" label="月平均收入(元)" placeholder="请输入月平均收入（元）" :rules="[{ required: true }]" clearable />
      <van-field name="workYear" v-model="user.workYear" type="digit" center label="现单位工作年限" placeholder="请输入工作年限（输入数字）" :rules="[{ required: true }]" clearable />
      <van-field name="companyAddress" v-model="user.companyAddress" type="textarea" autosize label="现单位地址" placeholder="请输入现单位详细地址" :rules="[{ required: true }]" clearable />
      <van-field name="companyMobile" v-model="user.companyMobile" type="tel" label="单位电话" placeholder="请输入单位电话" :rules="[{ required: true }]" clearable />
      <h5>资产信息</h5>
      <van-field name="socialSecurityAddress" v-model="user.socialSecurityAddress" type="text" label="社保缴纳地" placeholder="请输入社保缴纳城市"  clearable />
      <van-field name="socialSecurityAmount" v-model="user.socialSecurityAmount" type="number" label="社保缴纳金额" placeholder="请输入社保缴纳金额（元）"  clearable />
      <van-field name="providentFundAddress" v-model="user.providentFundAddress" type="text" label="公积金纳地" placeholder="请输入公积金纳城市" clearable />
      <van-field name="providentFundAmount" v-model="user.providentFundAmount" type="number" label="公积金纳金额" placeholder="请输入公积金纳金额（元）"  clearable />
      <van-field name="haveHousing" label="名下是否有房产" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.haveHousing" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">是</van-radio>
            <van-radio :name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="housingAddress" v-if="user.haveHousing==1" v-model="user.housingAddress" type="text" label="名下房产所在地" placeholder="请输入名下房产所在城市" :rules="[{ required: true }]" clearable />
      <van-field name="housingNature" v-if="user.haveHousing==1" label="房产性质" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.housingNature" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">住宅</van-radio>
            <van-radio :name="2">公寓</van-radio>
            <van-radio :name="3">别墅</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-if="user.haveHousing==1" name="housingStatus" label="房产状态" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.housingStatus" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">有按揭</van-radio>
            <van-radio :name="2">无按揭</van-radio> 
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="haveCar" label="名下是否有车辆" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.haveCar" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">是</van-radio>
            <van-radio :name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-if="user.haveCar==1" name="haveCarLoan" label="车辆是否有贷款" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.haveCarLoan" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">是</van-radio>
            <van-radio :name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="haveCompany" label="名下是否有公司" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.haveCompany" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">是</van-radio>
            <van-radio :name="2">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="companyType" v-if="user.haveCompany==1" v-model="user.companyType" type="text" label="公司经营行业" placeholder="请输入公司经营行业" :rules="[{ required: true }]" clearable />
      <h5>购房信息</h5>
      <van-field name="estateName" v-model="user.estateName" type="text" label="楼盘名称" placeholder="请输入楼盘名称" :rules="[{ required: true }]" clearable />
      <van-field name="estateAddress" v-model="user.estateAddress" type="text" label="楼盘所在地" placeholder="请输入楼盘所在城市" :rules="[{ required: true }]" clearable />
      <van-field name="estateHousingNature" label="房屋性质" :rules="[{ required: true }]">
        <template #input>
          <van-radio-group v-model="user.estateHousingNature" direction="horizontal" icon-size="16px"  checked-color="#07c160">
            <van-radio :name="1">住宅</van-radio>
            <van-radio :name="2">公寓</van-radio>
            <van-radio :name="3">别墅</van-radio>
            <van-radio :name="4">商铺</van-radio>
            <van-radio :name="5">写字楼</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="estateHousingArea" v-model="user.estateHousingArea" type="number" label="房屋面积（㎡）" placeholder="请输入房屋面积（平方米）" :rules="[{ required: true }]" clearable />
      <van-field name="estateHousingAmountTotal" v-model="user.estateHousingAmountTotal" type="number" label="房屋总价（万）" placeholder="请输入房屋总价（万元）" :rules="[{ required: true }]" clearable />
      <van-field name="estateHousingAmountFirst" v-model="user.estateHousingAmountFirst" type="number" label="首付金额（万）" placeholder="请输入首付金额（万元）" :rules="[{ required: true }]" clearable />
      <van-field name="consultantName" v-model="user.consultantName" type="text" label="置业顾问姓名" placeholder="请输入置业顾问姓名" :rules="[{ required: true }]" clearable />
      <van-field name="consultantMobile" v-model="user.consultantMobile" type="tel" label="置业顾问电话" placeholder="请输入置业顾问电话" :rules="[{ required: true }]" clearable />
      <div class="btn">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// @ is an alias to /src 
import {userAdd} from '@/api/index'
export default {
  name: 'Home',
  components: { 
  },
  data(){
    return { 
      testTel: /^1[3456789]\d{9}$/,
      user: {
        name: '',
        mobile:'',
        idCard: '',
        education: 1,
        maritalStatus: 3,
        domicile: '',
        residentialAddress: '',
        currentHousingNature: 1,
        company: '',
        jobType: 1,
        incomeType: 1,
        department: '',
        position: 1,
        salary: '',
        workYear: '',
        companyAddress: '',
        companyMobile: '',
        socialSecurityAddress: '',
        socialSecurityAmount: '',
        providentFundAddress: '',
        providentFundAmount: '',
        haveHousing: 1,
        housingAddress: '',
        housingNature: 1,
        housingStatus: 1,
        haveCar: 1,
        haveCarLoan: 1,
        haveCompany: 1,
        companyType: '',
        estateName: '',
        estateAddress: '',
        estateHousingNature: 1,
        estateHousingArea: '',
        estateHousingAmountTotal: '',
        estateHousingAmountFirst: '',
        consultantName: '',
        consultantMobile: ''
      }
    }
  }, 
  methods:{
    onSubmit(data){ 
      this.$toast.loading({
        message: '提交中...',
        forbidClick: true,
        duration:0
      });
      userAdd(data).then(res=>{
        if (res.status == 1) {
          this.$toast.clear()
          this.$dialog.alert({
            message: '信息已提交成功',
            theme: 'round-button',
          }) 
        } else {
          this.$toast(res.msg)
        }
      }).catch(()=>{
        this.$toast('网络连接异常')
      })
    }
  }
}
</script>
<style scoped lang="scss">
h5{
  margin: 0;
  padding: 0;
  font-size: 30px;
  color: #666;
  line-height: 100px;
  padding-left: 30px;
  font-weight: normal;
}
img{
  width: 100px;
}
.btn{
  padding: 30px 30px 50px 30px;
}
</style>
<style >
.van-radio__label {
  font-size: 13px;
  position: relative;
  top: 2px;
  margin-left: 4px;
}
</style>
