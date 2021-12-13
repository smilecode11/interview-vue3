import { ref, onMounted, onUnmounted } from "vue";

function useMousePosition() {
  let x = ref(0),
    y = ref(0);

  const update = (event: any) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  onMounted(() => {
    console.log("- useMousePosition omMounted -");
    document.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    console.log("- useMousePosition onUnmounted -");
    document.removeEventListener("mousemove", update);
  });

  return {
    x,
    y,
  };
}

export default useMousePosition;
