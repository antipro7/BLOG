<template>
  <div>
  <!-- <Tinymce v-model="myContent1" timymce-id="tinymce1"></Tinymce> -->
    <el-table
      @cell-mouse-enter="hover"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div class="popover" :style="popoverStyle">
      <div class="btn-group">
        <el-button>开始</el-button>
        <el-button>结束</el-button>
      </div>
      <div class="popover__arrow"></div>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    Tinymce
  },
  data () {
    return {
      myContent1: '',
      popoverStyle: {
        left: '850px'
      },
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  methods: {
    hover (row, column, cell, event) {
      let node = cell.parentNode;
      this.popoverStyle.left = (node.offsetWidth - 150) + 'px';
    }
  }
}
</script>

<style lang="less" scoped>
.popover {
  position: absolute;
  margin-top: 12px;
  min-width: 150px;
  padding: 12px;
  line-height: 1.4;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  color: #606266;
  background: #fff;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  word-break: break-all;
  transform-origin: left center;

  .btn-group {
  }

  .popover__arrow {
    position: absolute;
    z-index: 9999;
    top: -6px;
    left: 50%;
    width: 0;
    height: 0;
    margin-right: 3px;
    border-width: 6px;
    border-top-width: 0;
    border-bottom-color: #ebeef5;
    border-color: transparent;
    border-style: solid;
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
    transform: translateX(-50%);

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 1px;
      margin-left: -6px;
      border-width: 6px;
      border-color: transparent;
      border-style: solid;
      border-top-width: 0;
      border-bottom-color: #fff;
    }
  }
}
</style>
