<template>
  <div>
    <x-header>商品详情</x-header>
    <publish></publish>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import publish from '@/components/publish'
export default {
  components: {
    XHeader,
    publish
  },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
