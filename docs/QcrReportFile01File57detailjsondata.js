console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java 11 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DeleteAclsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DeleteAclsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DeleteAclsResult"
 , "c2" : "DeleteAclsResult(Map<AclBindingFilter,KafkaFuture<FilterResults>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<AclBindingFilter,KafkaFuture<FilterResults>>"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<Collection<AclBinding>>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<AclBinding>"
 , "c2" : "getAclBindings(Map<AclBindingFilter,KafkaFuture<FilterResults>>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class DeleteAclsResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class FilterResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00043] The class FilterResults contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.clients.admin.DeleteAclsResult.all@POLYN179294 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method getAclBindings arguments Map&lt;AclBindingFilter ,KafkaFuture&lt;FilterResults &gt; &gt;  futures"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00083] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.admin.DeleteAclsResult.getAclBindings@POLYN179633 the MagicNumber/String  'DeleteAclsResult#all: internal error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.admin.DeleteAclsResult.getAclBindings@POLYN179633 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
