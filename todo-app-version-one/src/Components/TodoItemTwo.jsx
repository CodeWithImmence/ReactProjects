function TodoItemTwo() {
  let todoName = "Go to College";
  let todoDate = "01/09/2024";

  return (
    <div class="container">
      <div class="row t-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger t-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItemTwo;
