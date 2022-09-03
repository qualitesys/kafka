console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java 14 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.xml" 
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
 , "c1" : "String"
 , "c2" : "apiName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Collection<RequestAndKeys<K>>"
 , "c2" : "buildRequest(int;Set<K>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ApiResult<K,V>"
 , "c2" : "handleResponse(Node;Set<K>;AbstractResponse)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "AdminApiLookupStrategy<K>"
 , "c2" : "lookupStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
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
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00029] The class ApiResult contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00077] The class RequestAndKeys contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00088] The class Batched contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method buildBatchedRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method buildRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00098] The class Unbatched contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method buildSingleRequest arguments int  brokerId|K  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method handleSingleResponse arguments Node  broker|K  key|AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method buildRequest arguments int  brokerId|Set&lt;K &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method handleResponse arguments Node  broker|Set&lt;K &gt;  keys|AbstractResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.internals.AdminApiHandler.Unbatched.handleResponse@POLYN177984 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AdminApiHandler.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.clients.admin.internals.AdminApiHandler.Unbatched.handleResponse@POLYN177984 the MagicNumber/String  'Unbatched admin handler should only be required to handle responses for a single key at a time' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
