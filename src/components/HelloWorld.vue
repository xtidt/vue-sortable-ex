<template>
  <div>
    <div class="itxst" id="itxst1">
      <div class="item" :data-id="item.key" :key="item.key" v-for="(item) in items">{{item.name}}</div>
    </div>

    {{items}}

    <div class="itxst" id="itxst2">
      <div class="item" :data-id="item.key" :key="item.key" v-for="(item) in items2">{{item.name}}</div>
    </div>

    {{items2}}

  </div>
</template>

<script>
import Sortable from 'sortablejs'
import getRandomArrs from './random'

const temp1 = getRandomArrs(1, 10, 10)
const temp2 = getRandomArrs(11, 20, 10)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      items: temp1,
      items2: temp2
    }
  },

  methods: {
    init() {
      var $ul = this.$el.querySelector('#itxst1')
      var $ul2 = this.$el.querySelector('#itxst2')
      var that = this
      var options = {
        animation: 100,
        draggable: ".item",
        group: {
            name: "itxst.com"
        },
        onEnd:function(event){
            var newIndex = event.newIndex,
                oldIndex = event.oldIndex,
                $li = $ul.children[newIndex],
                $oldLi = $ul.children[oldIndex]
            // 先删除移动的节点
            $ul.removeChild($li)    
            // 再插入移动的节点到原有节点，还原了移动的操作
            if(newIndex > oldIndex) {
                $ul.insertBefore($li,$oldLi)
            } else {
                $ul.insertBefore($li,$oldLi.nextSibling)
            }
            // 更新items数组
            var item = that.items.splice(oldIndex,1)
            that.items.splice(newIndex,0,item[0])
            // 下一个tick就会走patch更新
        },
      }
      new Sortable($ul, options)

      var options2 = {
        animation: 100,
        draggable: ".item",
        group: {
            name: "itxst.com"
        },
        onEnd:function(event){
            var newIndex = event.newIndex,
                oldIndex = event.oldIndex,
                $li = $ul2.children[newIndex],
                $oldLi = $ul2.children[oldIndex]
            // 先删除移动的节点
            $ul2.removeChild($li)    
            // 再插入移动的节点到原有节点，还原了移动的操作
            if(newIndex > oldIndex) {
                $ul2.insertBefore($li,$oldLi)
            } else {
                $ul2.insertBefore($li,$oldLi.nextSibling)
            }
            // 更新items数组
            var item = that.items2.splice(oldIndex,1)
            that.items2.splice(newIndex,0,item[0])
            // 下一个tick就会走patch更新
        },
      }
      new Sortable($ul2, options2)
    }
  },

  mounted () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itxst {
  margin: 10px auto;
  width: 80%;
  min-height: 50px;
  border: 1px solid black;
}

.itxst div {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
</style>
