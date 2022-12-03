function Input({nombre, setNombre, password, setPassword}){
    return(
        <div>
        <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                name="nombre"
                placeholder="Ingresa tu Nombre"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                className="form-control mb-3"
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Ingresa tu password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control mb-3"
            />
        </div>
    )
}

export default Input;


