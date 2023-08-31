const data = document.querySelectorAll(".graph");
data.forEach((item) => {
  const graphData = item.dataset.graph;
  item.style.width = `${graphData}%`;
});
