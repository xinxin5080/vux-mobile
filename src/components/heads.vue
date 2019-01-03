<template>
  <div>
       <x-header>{{headtitle}}</x-header>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  props: ['headtitle']
}
</script>
