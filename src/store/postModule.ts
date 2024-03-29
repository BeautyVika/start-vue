import axios from "axios";
export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        totalPage: 0,
        limit: 10,
        sortOption: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
        ]
    }),
    getters: {
        sortedPosts(state: any) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state: any, getters: any) {
            return getters.sortedPosts.filter((post: any) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state: any, posts: any){
            state.posts = posts
        },
        setLoading(state: any, bool: any) {
            state.isPostLoading = bool
        },
        setPage(state: any, page: any) {
            state.page = page
        },
        setSelectedSort(state: any, selectedSort: any) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state: any, totalPages: any) {
            state.totalPage= totalPages
        },
        setSearchQuery(state: any, searchQuery: any) {
            state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchPosts( {state, commit}: any ) {
            try{
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                debugger
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            }catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        },
        async loadMorePosts({state, commit}: any) {
            try{
                commit('setPage',  state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', [...state.posts, ...response.data])
            }catch (e) {
                alert('Ошибка')
            }
        }
    },
    namespaced: true
}