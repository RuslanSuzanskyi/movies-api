import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useInfiniteScroll(loadMore: () => Promise<void>) {
  const isLoading = ref(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 && !isLoading.value) {
      isLoading.value = true;
      loadMore()
        .catch((error) => console.error('Error loading:', error))
        .finally(() => (isLoading.value = false));
    }
  };

  onMounted(() => window.addEventListener('scroll', handleScroll));
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));

  return { isLoading };
}
