<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
        v-focus
    />
    <div class="app__btns">
      <my-button>Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOption"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form/>
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostList, PostForm
  },
  data () {
    return {
      dialogVisible: false,
      sortOption: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  setup(props){
    const {totalPage, posts, isPostsLoading} = usePosts(10)
    const { selectedSort, sortedPosts} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      searchQuery, sortedAndSearchedPosts, isPostsLoading, totalPage, posts, selectedSort, sortedPosts
    }
  }
}
</script>

<style scoped>

.app__btns{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid black;
  padding: 10px;
}
.current-page{
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: green;
}
</style>