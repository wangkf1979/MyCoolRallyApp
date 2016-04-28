 //add this at the top of your app
 Ext.define('Rally.ui.cardboard.row.RowFix', {
     override: 'Rally.ui.cardboard.row.Row',

     isMatchingRecord: function(record) {
         return this.callParent(arguments) ||
             this.getValue().Name === record.get('Release').Name;
     }
 });


 Ext.define('mycardcolumnheader', {
     extend: 'Rally.ui.cardboard.ColumnHeader',
     alias: 'widget.mycardcolumnheader'

 });

 Ext.define('CustomApp', {
     extend: 'Rally.app.App',
     componentCls: 'app',
     launch: function() {

         //Fetch tree of items
         //  a) starting from item type in picker
         //  b) subject to a filter

         //The number of columns is related to the number of lowest level PI type items that are found
         //The header must show the top level (from the picker) and all the children
         //The user stories are shown in a vertical line below
         //Might want to introduce the concept of timebox in the vertical direction (for user stories)
         //The cards for the PIs should show the progress bars

         var dTab = Ext.create('Ext.Container', {
             items: [{
                 xtype: 'rallycardboard',
                 types: ['HierarchicalRequirement'],
                 //             columnConfig: { xtype: 'mycardcolumn', displayField: 'feat', valueField: 'fest' },
                 //             attribute: 'ScheduleState'
                 attribute: 'Feature',
                 rowConfig: {
                     field: 'Release',
                     sortDirection: 'ASC'
                 },
                 enableDragAndDrop: true
             }]
         });

         this.add(dTab);

     }
 });