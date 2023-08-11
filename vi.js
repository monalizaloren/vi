   <div className="App">
      <Router>
        <div>
          <Link to="/cart">
            <button>Clique</button>
          </Link>
          <Route component={Cart} path="/cart" />
        </div>
      </Router>
      <Menu />
      <div className="cabeçalho">
        <h1>Nossos Produtos</h1>
      </div>
