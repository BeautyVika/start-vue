<template>
  <div class="app">
    <post-form
        @create="createPost"/>
    <post-list
        :posts="posts"
    />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
export default {
  components: {
    PostList, PostForm
  },
  data () {
    return {
      posts: [
        {id: 1, title: 'Javascript1', body: 'Описание поста1'},
        {id: 2, title: 'Javascript2', body: 'Описание поста2'},
        {id: 3, title: 'Javascript3', body: 'Описание поста3'}
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>