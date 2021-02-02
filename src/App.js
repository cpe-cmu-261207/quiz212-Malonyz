function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  for (let i = 0; i < persons; i++) {
    return persons(i);
  }
  let counter = 0;
  const countUp = () => {
    counter++;
    document.querySelector("p").innerHTML = counter;
  };
  const countDown = () => {
    counter--;
    document.querySelator("p").innerHTML = counter;
  };

  return (
    <div class="ml-2">
      {/* Code me please! */}

      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>620612151</p>
        <button onClick="countDown">-</button>
        <button>reset</button>
        <button onclick="countUp">+</button>
      </div>

      {/* Convert me to a component! */}

      <h3 class="title is-3">Person List</h3>
      <table></table>

      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Alice</td>
            <td>female</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
