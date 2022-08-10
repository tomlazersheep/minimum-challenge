function(instance, context) {
  const { React, ReactDOM, ReactSpreadsheetImport } = window.RSIPlugin;
  const createElement = React.createElement;

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
    {
      label: "Address",
      key: "address",
      alternateMatches: ["Address", "address"],
      fieldType: {
        type: "input",
      },
      example: "Av Libertador 2200",
      validations: [
        {
          rule: "required",
          errorMessage: "Address is required",
          level: "error",
        },
      ],
    },
    {
      label: "Franchise",
      key: "franchise",
      alternateMatches: ["franchise", "company"],
      fieldType: {
        type: "input",
      },
      example: "Dina",
      validations: [
        {
          rule: "required",
          errorMessage: "Franchise is required",
          level: "error",
        },
      ],
    },
    {
      label: "Opening Date",
      key: "open_date",
      fieldType: {
        type: "input",
      },
      example: "2022-04-06 16:56:11",
      validations: [
        {
          rule: "required",
          errorMessage: "Open date is required",
          level: "error",
        },
      ],
    },
  ];
  
  var handleOnClose = () =>  {
    console.log("closing");

      ReactDOM.render(createElement(ReactSpreadsheetImport,{
          onClose: handleOnClose,
          isOpen: false,
          onSubmit: handleSubmit,
          fields: fields
      }), document.getElementById("rsi-container"));
    
  }
  
  var handleSubmit =  async (data) => {
    console.log("submit...",data);
    let payload = "";
    data.validData.forEach(entry => {
      payload += `{"open_date": "${entry.open_date}", "name": "${entry.name}", address: "${entry.address}", "franchise": "${entry.franchise}"} \n`;
    });

    console.log("payload: ",payload);
    // const res = await axios({
    //   method: 'post',
    //   url: 'https://developer-challenge.bubbleapps.io/version-test/api/1.1/obj/shop/bulk',
    //   headers: {
    //     'Content-Type': 'text/plain'
    //   }
    //    data: payload
    //         
    // });
    // if (res.status === 201) { console.log("success!") }
  }
  
  ReactDOM.render(createElement(ReactSpreadsheetImport,{
    onClose: handleOnClose,
    isOpen: true,
    onSubmit: handleSubmit,
    fields: fields
  }), document.getElementById("rsi-container"));
}