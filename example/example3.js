$(document).ready(function() {

  var columnDefs = [{
    data: "id",
    title: "Id",
    type: "readonly"
  },
  {
    data: "name",
    title: "Name"
  },
 {
    data: "position",
    title: "Position"
  },
 {
    data: "office",
    title: "Office"
  },
 {
    data: "extension",
    title: "Extn."
  },
 {
    data: "startDate",
    title: "Start date"
  },
 {
    data: "salary",
    title: "Salary"
  }];

  var myTable;

  myTable = $('#example').DataTable({
    "sPaginationType": "full_numbers",
    ajax: {
        url : 'https://raw.githubusercontent.com/luca-vercelli/DataTable-AltEditor/master/example/data3.json',
        //our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
        dataSrc : ''
    },
    columns: columnDefs,
		dom: 'Bfrtip',        // Needs button container
          select: 'single',
          responsive: true,
          altEditor: true,     // Enable altEditor
          buttons: [{
            text: 'Add',
            name: 'add'        // do not change name
          },

          {
            extend: 'selected', // Bind to Selected row
            text: 'Edit',
            name: 'edit'        // do not change name
          },

          {
            extend: 'selected', // Bind to Selected row
            text: 'Delete',
            name: 'delete'      // do not change name
         },

          {
            text: 'Refresh',
            name: 'refresh'      // do not change name
         }]
  });


});

