import { useState } from "react";

function DataForm() {
  const [email, setEmail] = useState<string>("email@gmail.com");
  return (
    <form>
      <h3>Enter Data</h3>

      <div data-testid="image wrapper">
        <img src="data.jpg" alt="data" />
      </div>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />

      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red" type="text" />

      <button title="Click when ready to submit">Submit</button>


      
    </form>
  );
}

export default DataForm;
