<template>
  <div class="size_info" id="detailparams">
    <table v-for="sizes in paramInfo.sizes" >
      <tr v-for="item in sizes">
        <td v-for="(td,index) in item" :class="{td_one: index===0}">{{td}}</td>
      </tr>
    </table>
  </div>
  <div class="info_param">
    <div v-for="item in paramInfo.infos" class="info_param_one">
      <div class="name">{{item.key}}</div>
      <div class="value">{{item.value}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailParams",
  props:{
     paramInfo :{
       type:Object,
       default:{}
     }
  }
}
</script>

<style scoped>
  .size_info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .size_info table {
    width: 100%;
    border-collapse: collapse;
  }

  .size_info table tr {
    height: 42px;
  }

  .size_info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .td_one{
    color: red;
  }
  .info_param{
    display: flex;
    flex-wrap: wrap;
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info_param_one{
    width: 100%;
    /*height: 42px;*/
    /*vertical-align:middle;*/
    /*line-height: 30px;*/
    display: flex;
    padding: 15px 0;

    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .name{
    float: left;
    width: 30%;
  }
  .value{
    float: left;
    width: 70%;
  }
</style>