import { useState } from 'react';

function App() {
  // Deklarasi State: variabel 'count' dengan nilai awal 0
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0 p-4">
            <h2 className="text-primary mb-3 text-center">Modul 5: State & Event Handling</h2>
            <p className="text-muted text-center">
              Belajar mengontrol memori komponen React secara *real-time* menggunakan <code>useState</code>.
            </p>

            <div className="alert alert-light text-center border py-4 my-3">
              <span className="fs-1 fw-bold text-dark">{count}</span>
            </div>

            <div className="d-flex gap-2 justify-content-center">
              {/* Event Handling onClick */}
              <button
                className="btn btn-outline-danger px-4"
                onClick={() => setCount(count - 1)}
              >
                Kurang (-)
              </button>

              <button
                className="btn btn-success px-4"
                onClick={() => setCount(0)}
              >
                Reset
              </button>

              <button
                className="btn btn-primary px-4"
                onClick={() => setCount(count + 1)}
              >
                Tambah (+)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;