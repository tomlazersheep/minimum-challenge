function(instance, properties, context) {
	const container = document.createElement("div");
    container.setAttribute("id","rsi-container");
    
	document.body.appendChild(container);
  window.RSIPlugin.container = container;
}