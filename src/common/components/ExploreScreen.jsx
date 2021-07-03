import React, { useState } from 'react';

export default function ExploreScreen() {
  const [explorer, setexplorer] = useState;
  return (
    <div>
      <div>
        <p data-testid="explore-food">Explorar Comidas</p>
        <button type="button">Explorar Comidas</button>
      </div>
      <div>
        <p data-testid="explore-drinks">Explorar Bebidas</p>
        <button type="button">Explorar Bebidas</button>
      </div>
    </div>
  );
}
