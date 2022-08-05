function(instance, context) {
  
  var fields = [
    {
      // Visible in table header and when matching columns.
      label: "Name",
      // This is the key used for this field when we call onSubmit.
      key: "name",
      // Allows for better automatic column matching. Optional.
      alternateMatches: ["first name", "first"],
      // Used when editing and validating information.
      fieldType: {
        // There are 3 types - "input" / "checkbox" / "select".
        type: "input",
      },
      // Used in the first step to provide an example of what data is expected in this field. Optional.
      example: "Stephanie",
      // Can have multiple validations that are visible in Validation Step table.
      validations: [
        {
          // Can be "required" / "unique" / "regex"
          rule: "required",
          errorMessage: "Name is required",
          // There can be "info" / "warning" / "error" levels. Optional. Default "error".
          level: "error",
        },
      ],
    },
  ];
  window.RSIPlugin.isOpen = true;
  
  var handleOnClose = () =>  {
    console.log("closing");
    window.RSIPlugin.isOpen = false;
  }
  
  var handleSubmit = () => {
    console.log("submit...");
    window.RSIPlugin.isOpen = false;
  }
  
  
  window.RSIPlugin.ReactDOM.render(window.RSIPlugin.React.createElement(
    window.RSIPlugin.ReactSpreadsheetImport, {
      isOpen: window.RSIPlugin.isOpen,
      onClose: handleOnClose,
      onSubmit: handleSubmit,
      fields: fields,
  }), document.body);
}