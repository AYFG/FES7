const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");
dragItems.forEach((Item) => {
  Item.addEventListener("dragstart", () => {
    // console.log("1");
    setTimeout(() => {
      console.log("2"); //3이 먼저 나오게 됨 (지연)
      Item.classList.add("dragging");
    }, 0);
    // console.log("3");
  });
  Item.addEventListener("dragend", () => {
    Item.classList.remove("dragging");
  });
});
console.log(dropTarget);
console.log(dragItems);

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItem = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );
  const nextItem = notDraggingItem.find((item) => {
    // clientY : 뷰포트 내 마우스 y 좌표
    // offsetTop : 뷰포트 내에서 요소까지의 y 좌표
    // offsetHeight : 요소의 높이 (border 포함)
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    // console.log("clientY : ", e.clientY);
    // console.log("offsetTop : ", item.offsetTop);
    // console.log("offsetHeight : ", item.offsetHeight);
  });
  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragOver);
dropTarget.addEventListener("dragenter", (e) => {});
