console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.internals.AdminApiHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.AdminApiHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#35"
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#49"
 , "c1" : "Collection&lt;RequestAndKeys&lt;K&gt;&gt;"
 , "c2" : "buildRequest(int;Set&lt;K&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#71"
 , "c1" : "ApiResult&lt;K,V&gt;"
 , "c2" : "handleResponse(Node;Set&lt;K&gt;;AbstractResponse)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#79"
 , "c1" : "AdminApiLookupStrategy&lt;K&gt;"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00146] For method buildBatchedRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method buildRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method buildSingleRequest arguments int  brokerId|K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method handleSingleResponse arguments Node  broker|K  key|AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method buildRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#164"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00164] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method handleResponse arguments Node  broker|Set&lt;K &gt;  keys|AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#171"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00171] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.clients.admin.internals.AdminApiHandler.Unbatched.handleResponse@POLYN187134 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.clients.admin.internals.AdminApiHandler.Unbatched.handleResponse@POLYN187134 the MagicNumber/String  'Unbatched admin handler should only be required to handle responses for a single key at a time' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
