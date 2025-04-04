Papa.parse('dog_features_subset.csv', {
    download: true,
    header: true,
    complete: function(results) {
      const grid = document.getElementById('grid');
      results.data.forEach(row => {
        if (!row.interpretation) return;
  
        const examples = Array.from({ length: 10 }, (_, i) => row[`top_example_${i + 1}`])
          .filter(Boolean)
          .join(', ');
  
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h2><a href="neuron_plots_relative/${row.neuron_idx}.png" target="_blank">${row.interpretation}</a></h2>
          <p>${examples}</p>
        `;
        grid.appendChild(card);
      });
    }
  });
