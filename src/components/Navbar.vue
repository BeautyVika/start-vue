<template>
  <div class="navbar">
    <div class="vue" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О приложении</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px">Store</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px">Composition Api</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns{
  margin-left: auto;
}
.vue {
  font-size: 25px;
  color: teal;
  font-weight: 700;
}
</style>