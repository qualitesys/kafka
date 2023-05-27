console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DeleteAclsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DeleteAclsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#87"
 , "c1" : "DeleteAclsResult"
 , "c2" : "DeleteAclsResult(Map&lt;AclBindingFilter,KafkaFuture&lt;FilterResults&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#95"
 , "c1" : "Map&lt;AclBindingFilter,KafkaFuture&lt;FilterResults&gt;&gt;"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#103"
 , "c1" : "KafkaFuture&lt;Collection&lt;AclBinding&gt;&gt;"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#107"
 , "c1" : "List&lt;AclBinding&gt;"
 , "c2" : "getAclBindings(Map&lt;AclBindingFilter,KafkaFuture&lt;FilterResults&gt;&gt;)"
 , "c3" : "4"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.DeleteAclsResult.all@POLYN167200 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method getAclBindings arguments Map&lt;AclBindingFilter ,KafkaFuture&lt;FilterResults &gt; &gt;  futures"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00107] The argument futures is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.admin.DeleteAclsResult.getAclBindings@POLYN167539 the MagicNumber/String  'DeleteAclsResult#all: internal error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.admin.DeleteAclsResult.getAclBindings@POLYN167539 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DeleteAclsResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
