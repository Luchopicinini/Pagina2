<!-- Contenedor filtros -->
<div class="filtros">
  <div class="filtro-item">
    <label for="marcaFiltro">Marca</label>
    <select id="marcaFiltro">
      <option value="todos">Todos</option>
      <option value="ford">Ford</option>
      <option value="peugeot">Peugeot</option>
      <option value="audi">Audi</option>
      <!-- Más opciones -->
    </select>
  </div>

  <div class="filtro-item">
    <label for="anoFiltro">Año</label>
    <select id="anoFiltro">
      <option value="todos">Todos</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <!-- Más opciones -->
    </select>
  </div>

  <div class="filtro-item">
    <label for="kmFiltro">Kilometraje Máximo</label>
    <select id="kmFiltro">
      <option value="todos">Todos</option>
      <option value="5000">5,000 km</option>
      <option value="10000">10,000 km</option>
      <option value="20000">20,000 km</option>
      <!-- Más opciones -->
    </select>
  </div>

  <button id="limpiarFiltrosBtn" disabled>Limpiar filtros</button>
</div>
